import { defineClientConfig } from '@vuepress/client'
import PlaygroundComponent from './components/PlaygroundComponent.vue'
import './styles/index.css'  // 手动导入全局 CSS

export default defineClientConfig({
  enhance({ app }) {
    // 全局注册组件
    app.component('PlaygroundComponent', PlaygroundComponent)
  },
})