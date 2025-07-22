export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{\"/en/\":{\"lang\":\"en-US\",\"title\":\"Huawei Cloud Observability\",\"description\":\"Based on comprehensive monitoring of metrics, traces, logs, and events, we provide you with end-to-end unified observability spanning from the application layer to infrastructure, significantly improving operational troubleshooting efficiency\"},\"/\":{\"lang\":\"zh-CN\",\"title\":\"华为云可观测\",\"description\":\"基于指标、链路、日志、事件全景数据监控，为您提供从应用层到基础设施的全链路、端到端的统一观测，提高运维排障效率\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
