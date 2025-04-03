import comp from "/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/en/get-started.html\",\"title\":\"快速入门\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"页面\",\"slug\":\"页面\",\"link\":\"#页面\",\"children\":[]},{\"level\":2,\"title\":\"内容\",\"slug\":\"内容\",\"link\":\"#内容\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":2,\"title\":\"布局与自定义\",\"slug\":\"布局与自定义\",\"link\":\"#布局与自定义\",\"children\":[]},{\"level\":2,\"title\":\"链接参考\",\"slug\":\"链接参考\",\"link\":\"#链接参考\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"en/get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
