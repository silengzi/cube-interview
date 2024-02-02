import { sidebar } from "vuepress-theme-hope";

/* 
 * 跳转连接 link 用的是绝对路径
 */
export default sidebar({
  // "/": [
  //   "", // 首页
  //   {
  //     text: "基础",
  //     icon: "laptop-code",
  //     prefix: "frontend/",
  //     link: "frontend/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     icon: "book",
  //     prefix: "guide/",
  //     children: "structure",
  //   },
  //   {
  //     text: "幻灯片",
  //     icon: "person-chalkboard",
  //     link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
  //   },
  // ],
  "/frontend/": [
    "/",
    {
      text: "目录",
      icon: "laptop-code",
      link: "/frontend",
    },
    {
      text: "前端基础",
      icon: "laptop-code",
      prefix: "基础/",
      link: "/frontend/基础",
      children: "structure",
    },
    {
      text: "进阶前端",
      icon: "laptop-code",
      prefix: "进阶/",
      link: "/frontend/进阶",
      children: "structure",
    },
    {
      text: "高级前端",
      icon: "laptop-code",
      prefix: "高级/",
      link: "/frontend/高级",
      children: "structure",
    }
  ],
  "/gis/": [
    "/",
    {
      text: "目录",
      icon: "laptop-code",
      link: "/gis",
    },
    {
      text: "GIS基础知识",
      icon: "laptop-code",
      prefix: "基础知识/",
      link: "/gis/基础知识",
      children: "structure",
    }
  ],
  "/computer/": [
    "/",
    {
      text: "目录",
      icon: "laptop-code",
      link: "/computer",
    },
    {
      text: "数据结构",
      icon: "laptop-code",
      prefix: "数据结构/",
      link: "/computer/数据结构",
      children: "structure",
    },
    {
      text: "算法",
      icon: "laptop-code",
      prefix: "算法/",
      link: "/computer/算法",
      children: "structure",
    },
    {
      text: "操作系统",
      icon: "laptop-code",
      prefix: "操作系统/",
      link: "/computer/操作系统",
      children: "structure",
    },
    {
      text: "计算机网络",
      icon: "laptop-code",
      prefix: "计算机网络/",
      link: "/computer/计算机网络",
      children: "structure",
    },
  ],
});
