export const data = JSON.parse("{\"key\":\"v-dd73d24e\",\"path\":\"/frontend/test/\",\"title\":\"目录1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"目录1\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"使用指南\"],\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"frontend/test/README.md\",\"autoDesc\":true}")

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
