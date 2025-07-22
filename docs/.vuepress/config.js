import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  dest:'./static',
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
        navbar: [{
          link: '/en/'
        }, {
          text: 'Playground',
          link: '/en/playground/',
          children: [{
            text: 'AOM Demo',
            target: '_blank',
            link: '/en/playground/aom',
          }, 
          {
            text: 'LTS Demo',
            target: '_blank',
            link: '/en/playground/lts',
          },
          {
            text: 'CES Demo',
            target: '_blank',
            link: '/en/playground/ces',
          },
          {
            text: 'APM Demo',
            target: '_blank',
            link: '/en/playground/apm',
          }
          ]
        }, {
          text: 'Practices',
          link: '/en/bests/'
        }, {
          text: 'News',
          link: '/en/news/'
        }, {
          text: 'Links',
          link: '/en/links/'
        }],
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
          },{
            text: 'LTS 云日志',
            target: '_blank',
            link: '/playground/lts',
          },
          {
            text: 'CES 云监控',
            target: '_blank',
            link: '/playground/ces',
          },          
          {
            text: 'APM 应用性能',
            target: '_blank',
            link: '/playground/apm',
          }
          ]
        }, {
          text: '最佳实践',
          link: '/bests/',
          children: [
          {
            text: '最佳实践汇总',
            link: '/bests/all',
          },{
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
          },{
            text: '自建中间件监控',
            link: '/bests/self-built-middleware',
          },{
            text: 'ELK日志搬迁上云',
            link: '/bests/elk-migration',
          },{
            text: 'Skywalking搬迁上云',
            link: '/bests/skywalking-migration',
          },{
            text: '预聚合指标',
            link: '/bests/pre-aggregation',
          },{
            text: '计费统计和估算',
            link: '/bests/billing-estimation',
          },{
            text: '费用优化推荐',
            link: '/bests/price',
          }]
        }, {
          text: '最新动态',
          link: '/news/'
        }, {
          text: '产品链接',
          link: '/links/'
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
