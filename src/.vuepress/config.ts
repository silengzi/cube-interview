import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // base: "/",
  base: "/cube-interview/",

  lang: "zh-CN",
  title: "面试宝典",
  description: "面试题积累，仅供学习",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
