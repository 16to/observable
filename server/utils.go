package main

import (
	"fmt"
	"log"
	"net/url"

	coreGlobal "github.com/huaweicloud/huaweicloud-sdk-go-v3/core/auth/global"
	coreConfig "github.com/huaweicloud/huaweicloud-sdk-go-v3/core/config"
	iam "github.com/huaweicloud/huaweicloud-sdk-go-v3/services/iam/v3"
	model "github.com/huaweicloud/huaweicloud-sdk-go-v3/services/iam/v3/model"
	"github.com/huaweicloud/huaweicloud-sdk-go-v3/services/iam/v3/region"
)

func initClient() *iam.IamClient {
	// 加载配置
	cfg, err := LoadConfig()
	if err != nil {
		log.Fatalf("Failed to load config: %v", err)
	}
	// Hard-coded or plaintext AK and SK are insecure. So, encrypt your AK and SK and store them in the configuration file or environment variables.
	// In this example, the AK and SK are stored in environment variables. Before running this example, set environment variables HUAWEICLOUD_SDK_AK and HUAWEICLOUD_SDK_SK.
	ak := cfg.AccessKey
	sk := cfg.SecretKey
	domainId := cfg.DomainId
	// region_id: If CN East-Shanghai1 is used, enter cn-east-3. If CN North-Beijing4 is used, enter cn-north-4. If CN South-Guangzhou is used, enter cn-south-4.
	regionId := cfg.RegionId

	httpConfig := coreConfig.DefaultHttpConfig().
		WithIgnoreSSLVerification(true)

	auth := coreGlobal.NewCredentialsBuilder().WithAk(ak).WithSk(sk).WithDomainId(domainId).Build()

	// Configure client attributes.
	client := iam.NewIamClient(iam.IamClientBuilder().
		WithRegion(region.ValueOf(regionId)).
		WithCredential(auth).
		WithHttpConfig(httpConfig).
		Build())
	return client
}

func getPolice() *model.ServicePolicy {
	// (Mandatory) Permission version. 1.0: System-defined role. 1.1: Custom policy.
	var version = "1.1"

	// (Mandatory) Actions, which describe the operations that are allowed or denied on resources. The value format is Service name:Resource type:Operation, for example, vpc:ports:create. You can use a wildcard to specify all actions.
	// Add actions. For example:
	var actions = []string{"iam:*:*"}

	// (Mandatory) Fixed value. Enter Allow or Deny.
	var effect = model.GetServiceStatementEffectEnum().ALLOW

	return &model.ServicePolicy{
		Version: version,
		Statement: []model.ServiceStatement{
			{
				Action: actions,
				Effect: effect,
			},
		},
	}
}

func getLoginUrl(service string, lang string) string {

	client := initClient()
	var durationSeconds int32 = 3600

	identityAuth := &model.TokenAuthIdentity{
		Methods: []model.TokenAuthIdentityMethods{
			model.GetTokenAuthIdentityMethodsEnum().TOKEN,
		},
		Policy: getPolice(),
		Token:  &model.IdentityToken{DurationSeconds: &durationSeconds},
	}
	request := &model.CreateTemporaryAccessKeyByTokenRequest{
		Body: &model.CreateTemporaryAccessKeyByTokenRequestBody{
			Auth: &model.TokenAuth{
				Identity: identityAuth,
			},
		},
	}

	tokenResp, err := client.CreateTemporaryAccessKeyByToken(request)
	if err == nil {
		fmt.Println(tokenResp)
	} else {
		fmt.Println(err)
	}
	// 6. 获取登录Token(有效期30分钟)
	loginTokenReq := model.CreateLoginTokenRequest{}
	loginTokenReq.Body = &model.CreateLoginTokenRequestBody{
		Auth: &model.LoginTokenAuth{
			Securitytoken: &model.LoginTokenSecurityToken{
				Access:          tokenResp.Credential.Access,
				Secret:          tokenResp.Credential.Secret,
				Id:              tokenResp.Credential.Securitytoken,
				DurationSeconds: &durationSeconds,
			},
		},
	}

	loginTokenResp, err := client.CreateLoginToken(&loginTokenReq)
	if err != nil {
		panic(fmt.Sprintf("获取登录Token失败: %v", err))
	}

	// 7. 构造联合代理登录URL
	baseURL := "https://auth.huaweicloud.com/authui/federation/login"
	params := url.Values{}
	params.Add("idp_login_url", "https://example.com/")                                                  // 企业系统登录地址
	params.Add("service", "https://console.huaweicloud.com/"+service+"/?region=cn-north-4&locale="+lang) // 目标控制台地址
	params.Add("logintoken", *loginTokenResp.XSubjectLoginToken)                                         // 登录Token

	federationURL := fmt.Sprintf("%s?%s", baseURL, params.Encode())
	fmt.Println("生成的联合代理登录URL:", federationURL)
	return federationURL
}
