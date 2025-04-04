import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', //语言，可选 en-US
  title: "VitePress", //站点名
  description: "我的vitpress文档教程",  //站点描述
  titleTemplate: '另起标题会覆盖title',
  cleanUrls: true,
  appearance: 'dark',


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },

      { text: '首页', link: '/' },
      {
        text: '指南',
        items: [
          { text: '前言', link: '/preface' },
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/configuration' }
        ]
      },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ],
    //社交链接 //
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/' },
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  }
})
