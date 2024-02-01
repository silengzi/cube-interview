import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "", // 首页
    {
      text: "基础",
      icon: "laptop-code",
      prefix: "frontend/",
      link: "frontend/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
