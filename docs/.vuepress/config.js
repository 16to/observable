import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  dest:'./static',
  lang: 'zh-CN',
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Huawei Cloud Observability',
      description: 'Huawei Cloud Observability'
    },
    '/': {
      lang: 'zh-CN',
      title: '华为云可观测',
      description: '华为云可观测'
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
            link: '/en/playground/',
          }, {
            text: 'APM Demo',
            target: '_blank',
            link: '/en/playground/apm/',
          }, {
            text: 'LTS Demo',
            target: '_blank',
            link: '/en/playground/lts/',
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
            text: '可观测演示',
            target: '_blank',
            link: '/playground/',
          }, {
            text: 'APM演示',
            target: '_blank',
            link: '/playground/apm/',
          }, {
            text: 'LTS演示',
            target: '_blank',
            link: '/playground/lts/',
          }
          ]
        }, {
          text: '最佳实践',
          link: '/bests/'
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
