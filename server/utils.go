package main

import (
	"fmt"
	"log"

	coreGlobal "github.com/huaweicloud/huaweicloud-sdk-go-v3/core/auth/global"
	coreConfig "github.com/huaweicloud/huaweicloud-sdk-go-v3/core/config"
	iam "github.com/huaweicloud/huaweicloud-sdk-go-v3/services/iam/v3"
	model "github.com/huaweicloud/huaweicloud-sdk-go-v3/services/iam/v3/model"
	"github.com/huaweicloud/huaweicloud-sdk-go-v3/services/iam/v3/region"
)

// func main() {
// 	client := initClient()

// 	// Obtain a temporary access key and security token through a token.
// 	createTemporaryAccessKeyByToken(client)

// }

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

func createTemporaryAccessKeyByToken(client *iam.IamClient) {
	// (Optional) Validity period of the AK, SK, and security token, in seconds. Value range: [900,86400]. The default value is 900.
	var durationSeconds int32 = 900

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

	response, err := client.CreateTemporaryAccessKeyByToken(request)
	if err == nil {
		fmt.Print(response)
		fmt.Printf("%+v\n", response)
	} else {
		fmt.Println(err)
	}
}
