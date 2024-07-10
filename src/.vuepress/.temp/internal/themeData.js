export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/frontend/encrypt.html\":[\"$2a$10$jSluHcgoB7qY1XCoXG9hkeTyXfAWm90.fA66rd4D9PLhCJX56sm7i\"],\"/frontend/page.html\":[\"$2a$10$PG0DL7xc3Khyik8GxEQouefXr7/cDgd73jTBlSGLedfvMsxxsasHq\"]}},\"author\":{\"name\":\"silengzi\",\"url\":\"http://123.57.246.82/#/\"},\"logo\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"repo\":\"silengzi/cube-interview\",\"docsDir\":\"src\",\"footer\":\"默认页脚\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",\"/前端/\",\"/gis/\",\"/computer/\",{\"text\":\"指南\",\"icon\":\"lightbulb\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"布局与功能禁用\",\"link\":\"disable\"},{\"text\":\"密码加密的文章\",\"link\":\"encrypt\"},{\"text\":\"布局\",\"link\":\"layout\"},{\"text\":\"Markdown展示\",\"link\":\"markdown\"},{\"text\":\"页面配置\",\"link\":\"page\"}]},{\"text\":\"V2 文档\",\"icon\":\"book\",\"link\":\"https://theme-hope.vuejs.press/zh/\"}],\"sidebar\":[\"/\",{\"text\":\"HTML+CSS\",\"icon\":\"laptop-code\",\"prefix\":\"/前端/HTMLCSS/\",\"link\":\"/前端/HTMLCSS/\",\"children\":[\"01.md\",\"02.md\",\"03.md\"]}]}}}")

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
