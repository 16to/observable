export const SEARCH_INDEX = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/bests/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/en/",
    "pathLocale": "/en/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/links/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Demo演示",
    "headers": [],
    "path": "/playground/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/news/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/en/bests/",
    "pathLocale": "/en/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/en/links/",
    "pathLocale": "/en/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/en/news/",
    "pathLocale": "/en/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/en/playground/",
    "pathLocale": "/en/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
