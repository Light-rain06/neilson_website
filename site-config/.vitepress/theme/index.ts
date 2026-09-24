// // https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
// import type { Theme } from 'vitepress'
// import DefaultTheme from 'vitepress/theme'
// import './style.css'

// export default {
//   extends: DefaultTheme,
//   Layout: () => {
//     return h(DefaultTheme.Layout, null, {
//       // https://vitepress.dev/guide/extending-default-theme#layout-slots
//     })
//   },
//   enhanceApp({ app, router, siteData }) {
//     // ...
//   }
// } satisfies Theme


// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import './style.css'

export default {
  extends: Teek,
};
