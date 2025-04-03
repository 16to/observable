---
lang: zh-CN
title: 开始
---

# 快速入门

这是一个普通页面，包含了 VuePress 的基础知识。

## 页面

您可以在 vuepress 目录中添加 Markdown 文件，每个 Markdown 文件都将转换为您站点中的一个页面。

更多详情请参阅[路由配置](#)。

## 内容

每个 Markdown 文件会被渲染为 HTML，然后转换为 Vue 单文件组件。

VuePress 支持基本的 Markdown 语法和一些扩展语法，您还可以在 Markdown 中使用 Vue 特性。

## 配置

VuePress 使用 `.vuepress/config.js`（或 .ts）文件作为站点配置，您可以用它来配置您的站点。

对于客户端配置，您可以创建 `.vuepress/client.js`（或 .ts）。

同时，您也可以通过 frontmatter 为每个页面单独添加配置。

## 布局与自定义

以下是控制 `@vuepress/theme-default` 主题布局的常见配置项：

- 导航栏
- 侧边栏

完整参考请查看默认主题文档。

您可以通过 `.vuepress/styles/index.scss` 文件添加额外样式。

## 链接参考

- [路由配置](https://vuejs.press/guide/page.html#routing)
- [内容处理](https://vuejs.press/guide/page.html#content)
- [语法扩展](https://vuejs.press/guide/markdown.html#syntax-extensions)
- [Vue 特性](https://vuejs.press/guide/markdown.html#using-vue-in-markdown)
- [站点配置](https://vuejs.press/guide/configuration.html#client-config-file)
- [客户端配置](https://vuejs.press/guide/configuration.html#client-config-file)
- [Frontmatter](https://vuejs.press/guide/page.html#frontmatter)
- [导航栏配置](https://vuejs.press/reference/default-theme/config.html#navbar)
- [侧边栏配置](https://vuejs.press/reference/default-theme/config.html#sidebar)
- [默认主题](https://vuejs.press/reference/default-theme/)
- [样式文件](https://vuejs.press/reference/default-theme/styles.html#style-file)