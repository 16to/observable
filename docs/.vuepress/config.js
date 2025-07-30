import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  dest: './static',
  lang: 'zh-CN',
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Huawei Cloud Observability',
      description: 'Based on comprehensive monitoring of metrics, traces, logs, and events, we provide you with end-to-end unified observability spanning from the application layer to infrastructure, significantly improving operational troubleshooting efficiency'
    },
    '/': {
      lang: 'zh-CN',
      title: '华为云可观测',
      description: '基于指标、链路、日志、事件全景数据监控，为您提供从应用层到基础设施的全链路、端到端的统一观测，提高运维排障效率'
    }
  },

  theme: defaultTheme({
    colorModeSwitch: false, // 隐藏切换按钮
    locales: {
      '/en/': {
        selectLanguageText: '🌐',
        selectLanguageName: 'English',
        navbar: [
          {
            link: '/en/'
          },
          {
            text: 'Demo Showcase',
            link: '/playground/',
            children: [
              {
                text: 'AOM playground',
                target: '_blank',
                link: '/playground/aom',
              },
              {
                text: 'LTS playground',
                target: '_blank',
                link: '/playground/lts',
              },
              {
                text: 'APM playground',
                target: '_blank',
                link: '/playground/apm',
              },
              {
                text: 'CES playground',
                target: '_blank',
                link: '/playground/ces',
              }
            ]
          },
          {
            text: 'Best Practices',
            link: '/bests/',
            children: [
              {
                text: 'Best Practices Summary',
                link: '/bests/all',
              },
              {
                text: 'Third-party Cloud Providers or IDC Integration',
                link: '/bests/third-party',
              },
              {
                text: 'Embedding into User-built Systems',
                link: '/bests/embedded',
              },
              {
                text: 'Multi-account Unified Monitoring',
                link: '/bests/multi-account',
              },
              {
                text: 'Log Processing Cases',
                link: '/bests/log-processing',
              },
              {
                text: 'Log SQL Query',
                link: '/bests/log-processing',
              },
              {
                text: 'AIOps Practices',
                link: '/bests/ai-ops',
              },
              {
                text: 'Alert Rule Recommendations',
                link: '/bests/alert-rules',
              },
              {
                text: 'Performance Analysis Cases',
                link: '/bests/performance-analysis',
              },
              {
                text: 'User Experience Monitoring',
                link: '/bests/user-experience',
              },
              {
                text: 'Self-built Middleware Monitoring',
                link: '/bests/self-built-middleware',
              },
              {
                text: 'ELK Log Migration to Cloud',
                link: '/bests/elk-migration',
              },
              {
                text: 'Skywalking Migration to Cloud',
                link: '/bests/skywalking-migration',
              },
              {
                text: 'Pre-aggregated Metrics',
                link: '/bests/pre-aggregation',
              },
              {
                text: 'Billing Statistics and Estimation',
                link: '/bests/billing-estimation',
              },
              {
                text: 'Cost Optimization Recommendations',
                link: '/bests/price',
              }
            ]
          },
          {
            text: 'Product Links',
            children: [
              {
                text: 'Console',
                children: [
                  {
                    text: 'Unified Observability',
                    link: 'https://console.huaweicloud.com/aom2/',
                  },
                  {
                    text: 'Log Service',
                    link: 'https://console.huaweicloud.com/lts/',
                  },
                  {
                    text: 'Application Performance',
                    link: 'https://console.huaweicloud.com/apm2/',
                  },
                  {
                    text: 'Cloud Monitoring',
                    link: 'https://console.huaweicloud.com/ces/',
                  }
                ]
              },
              {
                text: 'Documentation Links',
                children: [
                  {
                    text: 'Unified Observability',
                    link: 'https://support.huaweicloud.com/aom/index.html',
                  },
                  {
                    text: 'Log Service',
                    link: 'https://support.huaweicloud.com/lts/index.html',
                  },
                  {
                    text: 'Application Performance',
                    link: 'https://support.huaweicloud.com/apm/index.html',
                  },
                  {
                    text: 'Cloud Monitoring',
                    link: 'https://support.huaweicloud.com/ces/index.html',
                  }
                ]
              }
            ],
          },
          {
            text: 'Latest News',
            target: '_blank',
            link: 'https://support.huaweicloud.com/wtsnew-aom/index.html'
          }
        ],
      },
      '/': {
        selectLanguageText: '🌐',
        selectLanguageName: '简体中文',
        navbar: [{
          link: '/'
        }, {
          text: '演示Demo',
          link: '/playground/',
          children: [{
            text: 'AOM 统一可观测',
            target: '_blank',
            link: '/playground/aom',
          }, {
            text: 'LTS 云日志',
            target: '_blank',
            link: '/playground/lts',
          },
          {
            text: 'APM 应用性能',
            target: '_blank',
            link: '/playground/apm',
          },
          {
            text: 'CES 云监控',
            target: '_blank',
            link: '/playground/ces',
          }
          ]
        }, {
          text: '最佳实践',
          link: '/bests/',
          children: [
            {
              text: '最佳实践汇总',
              link: '/bests/all',
            }, {
              text: '第三方云厂商或IDC机房接入',
              link: '/bests/third-party',
            },
            {
              text: '内嵌到用户自建系统',
              link: '/bests/embedded',
            },
            {
              text: '多账号聚合统一监控',
              link: '/bests/multi-account',
            },
            {
              text: '日志加工案例',
              link: '/bests/log-processing',
            },
            {
              text: '日志SQL查询',
              link: '/bests/log-processing',
            },
            {
              text: '智能运维实践',
              link: '/bests/ai-ops',
            },
            {
              text: '告警规则建议',
              link: '/bests/alert-rules',
            },
            {
              text: '性能剖析案例',
              link: '/bests/performance-analysis',
            },
            {
              text: '用户体验监控',
              link: '/bests/user-experience',
            }, {
              text: '自建中间件监控',
              link: '/bests/self-built-middleware',
            }, {
              text: 'ELK日志搬迁上云',
              link: '/bests/elk-migration',
            }, {
              text: 'Skywalking搬迁上云',
              link: '/bests/skywalking-migration',
            }, {
              text: '预聚合指标',
              link: '/bests/pre-aggregation',
            }, {
              text: '计费统计和估算',
              link: '/bests/billing-estimation',
            }, {
              text: '费用优化推荐',
              link: '/bests/price',
            }]
        }, {
          text: '产品链接',
          children: [
            {
              text: '控制台',
              children: [
                {
                  text: '统一可观测',
                  link: 'https://console.huaweicloud.com/aom2/',
                }, {
                  text: '日志服务',
                  link: 'https://console.huaweicloud.com/lts/',
                }, {
                  text: '应用性能',
                  link: 'https://console.huaweicloud.com/apm2/',
                }, {
                  text: '云监控',
                  link: 'https://console.huaweicloud.com/ces/',
                }]
            },
            {
              text: '文档链接',
              children: [
                {
                  text: '统一可观测',
                  link: 'https://support.huaweicloud.com/aom/index.html',
                }, {
                  text: '日志服务',
                  link: 'https://support.huaweicloud.com/lts/index.html',
                }, {
                  text: '应用性能',
                  link: 'https://support.huaweicloud.com/apm/index.html',
                }, {
                  text: '云监控',
                  link: 'https://support.huaweicloud.com/ces/index.html',
                }]
            }
          ],
        }, {
          text: '最新动态',
          target: '_blank',
          link: 'https://support.huaweicloud.com/wtsnew-aom/index.html'
        }],
      },
    },

  }),

  // 插件配置
  plugins: [
    searchPlugin({
      locales: {
        '/en/': {
          placeholder: 'Search',
        },
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],


  bundler: webpackBundler(),
})
