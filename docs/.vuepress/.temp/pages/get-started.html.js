import comp from "/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"开始\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"开始\"},\"headers\":[{\"level\":2,\"title\":\"页面\",\"slug\":\"页面\",\"link\":\"#页面\",\"children\":[]},{\"level\":2,\"title\":\"内容\",\"slug\":\"内容\",\"link\":\"#内容\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":2,\"title\":\"布局与自定义\",\"slug\":\"布局与自定义\",\"link\":\"#布局与自定义\",\"children\":[]},{\"level\":2,\"title\":\"链接参考\",\"slug\":\"链接参考\",\"link\":\"#链接参考\",\"children\":[]}],\"git\":{\"updatedTime\":1743589302000,\"contributors\":[{\"name\":\"16to\",\"username\":\"16to\",\"email\":\"zj@16to.com\",\"commits\":2,\"url\":\"https://github.com/16to\"}],\"changelog\":[{\"hash\":\"d5c0b1873a76cab1fae3ba2de2c7dec70d4a2ee7\",\"time\":1743589302000,\"email\":\"zj@16to.com\",\"author\":\"16to\",\"message\":\"base\"},{\"hash\":\"ea1e175db6e3a24eb8f219b25c13ef697f6d7fd8\",\"time\":1743578246000,\"email\":\"zj@16to.com\",\"author\":\"16to\",\"message\":\"start\"}]},\"filePathRelative\":\"get-started.md\"}")
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
