import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
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
          link: '/en/playground/'
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
          text: 'Demo演示',
          link: '/playground/'
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
