<template><div><h1 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span>快速入门</span></a></h1>
<p>这是一个普通页面，包含了 VuePress 的基础知识。</p>
<h2 id="页面" tabindex="-1"><a class="header-anchor" href="#页面"><span>页面</span></a></h2>
<p>您可以在 vuepress 目录中添加 Markdown 文件，每个 Markdown 文件都将转换为您站点中的一个页面。</p>
<p>更多详情请参阅<a href="#">路由配置</a>。</p>
<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h2>
<p>每个 Markdown 文件会被渲染为 HTML，然后转换为 Vue 单文件组件。</p>
<p>VuePress 支持基本的 Markdown 语法和一些扩展语法，您还可以在 Markdown 中使用 Vue 特性。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>VuePress 使用 <code v-pre>.vuepress/config.js</code>（或 .ts）文件作为站点配置，您可以用它来配置您的站点。</p>
<p>对于客户端配置，您可以创建 <code v-pre>.vuepress/client.js</code>（或 .ts）。</p>
<p>同时，您也可以通过 frontmatter 为每个页面单独添加配置。</p>
<h2 id="布局与自定义" tabindex="-1"><a class="header-anchor" href="#布局与自定义"><span>布局与自定义</span></a></h2>
<p>以下是控制 <code v-pre>@vuepress/theme-default</code> 主题布局的常见配置项：</p>
<ul>
<li>导航栏</li>
<li>侧边栏</li>
</ul>
<p>完整参考请查看默认主题文档。</p>
<p>您可以通过 <code v-pre>.vuepress/styles/index.scss</code> 文件添加额外样式。</p>
<h2 id="链接参考" tabindex="-1"><a class="header-anchor" href="#链接参考"><span>链接参考</span></a></h2>
<ul>
<li><a href="https://vuejs.press/guide/page.html#routing" target="_blank" rel="noopener noreferrer">路由配置</a></li>
<li><a href="https://vuejs.press/guide/page.html#content" target="_blank" rel="noopener noreferrer">内容处理</a></li>
<li><a href="https://vuejs.press/guide/markdown.html#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展</a></li>
<li><a href="https://vuejs.press/guide/markdown.html#using-vue-in-markdown" target="_blank" rel="noopener noreferrer">Vue 特性</a></li>
<li><a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">站点配置</a></li>
<li><a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">客户端配置</a></li>
<li><a href="https://vuejs.press/guide/page.html#frontmatter" target="_blank" rel="noopener noreferrer">Frontmatter</a></li>
<li><a href="https://vuejs.press/reference/default-theme/config.html#navbar" target="_blank" rel="noopener noreferrer">导航栏配置</a></li>
<li><a href="https://vuejs.press/reference/default-theme/config.html#sidebar" target="_blank" rel="noopener noreferrer">侧边栏配置</a></li>
<li><a href="https://vuejs.press/reference/default-theme/" target="_blank" rel="noopener noreferrer">默认主题</a></li>
<li><a href="https://vuejs.press/reference/default-theme/styles.html#style-file" target="_blank" rel="noopener noreferrer">样式文件</a></li>
</ul>
</div></template>


