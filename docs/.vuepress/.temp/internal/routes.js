export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"华为云可观测全景图"} }],
  ["/bests/", { loader: () => import(/* webpackChunkName: "bests_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/bests/index.html.js"), meta: {"title":""} }],
  ["/links/", { loader: () => import(/* webpackChunkName: "links_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/links/index.html.js"), meta: {"title":""} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Huawei Cloud Observability Panorama"} }],
  ["/playground/aom.html", { loader: () => import(/* webpackChunkName: "playground_aom.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/playground/aom.html.js"), meta: {"title":"统一可观测"} }],
  ["/playground/apm.html", { loader: () => import(/* webpackChunkName: "playground_apm.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/playground/apm.html.js"), meta: {"title":"统一可观测"} }],
  ["/playground/ces.html", { loader: () => import(/* webpackChunkName: "playground_ces.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/playground/ces.html.js"), meta: {"title":"统一可观测"} }],
  ["/playground/lts.html", { loader: () => import(/* webpackChunkName: "playground_lts.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/playground/lts.html.js"), meta: {"title":"统一可观测"} }],
  ["/news/", { loader: () => import(/* webpackChunkName: "news_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/news/index.html.js"), meta: {"title":""} }],
  ["/en/bests/", { loader: () => import(/* webpackChunkName: "en_bests_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/bests/index.html.js"), meta: {"title":""} }],
  ["/en/links/", { loader: () => import(/* webpackChunkName: "en_links_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/links/index.html.js"), meta: {"title":""} }],
  ["/en/news/", { loader: () => import(/* webpackChunkName: "en_news_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/news/index.html.js"), meta: {"title":""} }],
  ["/en/playground/aom.html", { loader: () => import(/* webpackChunkName: "en_playground_aom.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/playground/aom.html.js"), meta: {"title":"AOM"} }],
  ["/en/playground/apm.html", { loader: () => import(/* webpackChunkName: "en_playground_apm.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/playground/apm.html.js"), meta: {"title":"APM"} }],
  ["/en/playground/ces.html", { loader: () => import(/* webpackChunkName: "en_playground_ces.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/playground/ces.html.js"), meta: {"title":"CES"} }],
  ["/en/playground/lts.html", { loader: () => import(/* webpackChunkName: "en_playground_lts.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/playground/lts.html.js"), meta: {"title":"LTS"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
