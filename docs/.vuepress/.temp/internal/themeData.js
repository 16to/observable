export const themeData = JSON.parse("{\"colorModeSwitch\":false,\"locales\":{\"/en/\":{\"selectLanguageText\":\"🌐\",\"selectLanguageName\":\"English\",\"navbar\":[{\"link\":\"/en/\"},{\"text\":\"Playground\",\"link\":\"/en/playground/\"},{\"text\":\"Practices\",\"link\":\"/en/bests/\"},{\"text\":\"News\",\"link\":\"/en/news/\"},{\"text\":\"Links\",\"link\":\"/en/links/\"}]},\"/\":{\"selectLanguageText\":\"🌐\",\"selectLanguageName\":\"简体中文\",\"navbar\":[{\"link\":\"/\"},{\"text\":\"Demo演示\",\"link\":\"/playground/\"},{\"text\":\"最佳实践\",\"link\":\"/bests/\"},{\"text\":\"最新动态\",\"link\":\"/news/\"},{\"text\":\"产品链接\",\"link\":\"/links/\"}]}},\"colorMode\":\"auto\",\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
