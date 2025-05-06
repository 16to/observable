export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/bests/", { loader: () => import(/* webpackChunkName: "bests_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/bests/index.html.js"), meta: {"title":""} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home"} }],
  ["/news/", { loader: () => import(/* webpackChunkName: "news_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/news/index.html.js"), meta: {"title":""} }],
  ["/playground/", { loader: () => import(/* webpackChunkName: "playground_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/playground/index.html.js"), meta: {"title":"演示Demo"} }],
  ["/links/", { loader: () => import(/* webpackChunkName: "links_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/links/index.html.js"), meta: {"title":""} }],
  ["/en/bests/", { loader: () => import(/* webpackChunkName: "en_bests_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/bests/index.html.js"), meta: {"title":""} }],
  ["/en/links/", { loader: () => import(/* webpackChunkName: "en_links_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/links/index.html.js"), meta: {"title":""} }],
  ["/en/news/", { loader: () => import(/* webpackChunkName: "en_news_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/news/index.html.js"), meta: {"title":""} }],
  ["/en/playground/", { loader: () => import(/* webpackChunkName: "en_playground_index.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/en/playground/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangjie/Desktop/observable-doc/observable/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
