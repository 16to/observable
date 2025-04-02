export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/.vuepress/get-started.html", { loader: () => import(/* webpackChunkName: ".vuepress_get-started.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/.vuepress/get-started.html.js"), meta: {"title":"快速入门"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
