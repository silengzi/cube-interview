export const data = JSON.parse("{\"key\":\"v-63a9e16e\",\"path\":\"/guidecopy%20copy/bar/baz.html\",\"title\":\"Baz\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Baz\",\"icon\":\"circle-info\",\"description\":\"功能详情...\"},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"guidecopy copy/bar/baz.md\",\"autoDesc\":true}")

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
