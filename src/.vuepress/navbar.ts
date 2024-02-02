import { navbar } from "vuepress-theme-hope";

// navbar组件，用于配置顶部导航栏
export default navbar([
  "/",
  "/frontend/",
  "/gis/",
  "/computer/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "布局与功能禁用",
        link: "disable"
      },
      {
        text: "密码加密的文章",
        link: "encrypt"
      },
      {
        text: "布局",
        link: "layout"
      },
      {
        text: "Markdown展示",
        link: "markdown"
      },
      {
        text: "页面配置",
        link: "page"
      }
    ],
    // children: [
    //   {
    //     text: "Bar",
    //     icon: "lightbulb",
    //     prefix: "bar/",
    //     children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
    //   },
    //   {
    //     text: "Foo",
    //     icon: "lightbulb",
    //     prefix: "foo/",
    //     children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
    //   },
    // ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
