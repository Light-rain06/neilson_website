---
# https://vitepress.dev/reference/default-theme-home-page

layout: home

hero:
  name: "Neilson's blog"
  text: "Neilson 的技术博客"
  tagline: Code is cheap，show me the talk! 😜
  # image: https://api.opics.org/api
  image: https://i.ibb.co/081tGLd/3-D.png
  actions:
    - theme: brand
      text: 文章列表
      link: /recent
    - theme: alt
      text: 作品集
      link: /projects/1-project-index

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit

tk:
  teekHome: false
  archivesPage: true
  features:
    # - title: 快速开发
    #   details: 提供了完整版参考代码和精简版开发代码
    #   image: https://api.opics.org/api
    #   highlights:
    #     - title: 从零安装：运行 <code>pnpm add vitepress-theme-teek vitepress</code> 以从 NPM 下载 Teek 主题。
    #     - title: 现有模板：运行 <code>git clone https://github.com/Kele-Bingtang/vitepress-theme-teek-docs-template.git</code> 以下载当前文档模板。

    - title: 当前技术栈，持续学习中······
      details: 满足大部分开发场景。
      # image: https://api.opics.org/api
      features:
        - title: 前端杂谈
          icon: https://i.ibb.co/qYM828hr/html-logo.png
          details: 前端设计思想、实现方案
          link: /docs/frontend-essays/1-frontend-routing

        - title: HTML
          icon: https://i.ibb.co/qYM828hr/html-logo.png
          details: 语义化标签、表单与多媒体、Canvas/SVG、SEO 与无障碍访问。
          link: /docs/html/html1

        - title: CSS
          icon: https://i.ibb.co/hJ1PnWrR/css-logo.png
          details: 选择器与盒模型、Flex/Grid 布局、响应式设计、动画与预处理器（Sass/Less）。
          link: /docs/css/1-aspect-ratio

        - title: JavaScript
          icon: https://i.ibb.co/NndyXvxK/js-logo.png
          details: ES6+ 语法、DOM 操作、事件循环、异步编程（Promise/Async）、闭包与原型链。

        - title: TypeScript
          icon: https://i.ibb.co/WN7JcRy6/ts-logo.png
          details: 类型注解、接口与泛型、高级类型、装饰器。

        - title: 浏览器
          icon: https://i.ibb.co/DPTV9Cnb/chrome-logo.png
          details: 渲染流程、开发者工具、存储机制（Cookie/LocalStorage）、跨域与安全（CSP/XSS）。

        - title: 网络协议
          icon: https://i.ibb.co/NBzrsJT/wangluoxieyi-logo.png
          details: HTTP/HTTPS、TCP/IP、WebSocket、RESTful API 设计、缓存策略与状态码。

        - title: 数据结构与算法
          icon: https://i.ibb.co/zWrPz34x/shujujiegouyusuanfa-logo.png
          details: 数组、链表、栈/队列、树/图、排序与搜索、动态规划、复杂度分析。

        - title: 代码规范
          icon: https://i.ibb.co/yBkdmTKV/daimaguifan-logo.png
          details: ESLint/Prettier 配置、Git Hooks（Husky）、Commitlint、Lint-staged。

        - title: 版本控制
          icon: https://i.ibb.co/Rkkg1Yn3/banbenkongzhi-logo.png
          details: Git 工作流（分支策略、rebase/merge）、GitHub/GitLab 协作、CI 触发。

        - title: 包管理
          icon: https://i.ibb.co/VppcfdWR/baoguanli-logo.png
          details: npm/yarn/pnpm 原理、依赖版本锁定、Monorepo 管理（Workspaces）。

        - title: 构建工具
          icon: https://i.ibb.co/ym52MLw3/goujiangongju-logo.png
          details: Webpack/Vite 配置、Loader/Plugin 开发、代码分割与 Tree Shaking。

        - title: Vue
          icon: https://i.ibb.co/Q7dXCfTF/vue-logo.png
          details: 响应式原理、组合式 API、Vue Router/Pinia、SSR（Nuxt）。
          link: /docs/vue/1-vue-slot

        - title: React
          icon: https://i.ibb.co/hFWz41RF/react-logo.png
          details: JSX、Hooks、Context、Redux/Zustand、Next.js 服务端渲染。

        - title: UI 库
          icon: https://i.ibb.co/j9YyRypC/Ant-Design-logo.png
          details: Element Plus/Ant Design/Vuetify 组件使用、主题定制、按需加载。

        - title: 前端性能优化
          icon: https://i.ibb.co/fzb4NBHx/xingnnegyouhua-logo.png
          details: 打包优化（代码分割/懒加载）、渲染性能（重排重绘）、首屏加载优化、性能审计（Lighthouse）。
          link: /docs/frontend-performance/1-first-screen-loading

        - title: 测试
          icon: https://i.ibb.co/gFgsBCj9/ceshi-logo.png
          details: 单元测试（Jest/Vitest）、组件测试（Testing Library）、E2E（Cypress/Playwright）。

        - title: 设计模式
          icon: https://i.ibb.co/4ZhqLB4t/shejimoshi-logo.png
          details: 单例、工厂、观察者、装饰器等常用模式，以及 MVVM、依赖注入。

        - title: 接口协作
          icon: https://i.ibb.co/C3Dk6Qxr/jiekouxiezuo-logo.png
          details: 使用 Apifox/Postman 管理接口文档、Mock 数据、自动化测试。

        - title: React Native
          icon: https://i.ibb.co/23747dY3/react-native-logo.png
          details: 原生组件、Bridge 通信、热更新、性能调优。

        - title: UniApp
          icon: https://i.ibb.co/Wp3qbDjC/uniapp-logo.png
          details: 跨端编译（H5/小程序/App）、条件编译、插件市场。

        - title: Electron
          icon: https://i.ibb.co/yBQbhHXF/electron-logo.png
          details: 主进程/渲染进程、IPC 通信、打包与更新、安全性。

        - title: Node.js
          icon: https://i.ibb.co/xSVj0818/nodejs-logo.png
          details: 事件驱动、非阻塞 I/O、npm 生态、Express/Koa 框架。

        - title: NestJS
          icon: https://i.ibb.co/1GCbcWpN/nestjs-logo.png
          details: 模块化、依赖注入、GraphQL/微服务支持、TypeORM 集成。

        - title: Golang
          icon: https://i.ibb.co/4RCCJWXr/golang-logo.png
          details: 协程并发、垃圾回收，高并发微服务与中间件开发。

        - title: MySQL
          icon: https://i.ibb.co/kLgN383/mysql-logo.png
          details: 数据库设计（范式/索引）、SQL 优化、事务隔离级别、主从复制，掌握关系型数据库核心。

        - title: MongoDB
          icon: https://i.ibb.co/Fk7QtC4N/mongodb-logo.png
          details: 文档模型、聚合框架、索引策略、分片集群，非结构化数据存储。

        - title: Redis
          icon: https://i.ibb.co/8gCZ04hN/redis-logo.png
          details: 五种数据结构、持久化（RDB/AOF）、缓存穿透/雪崩、哨兵/集群模式。

        - title: 消息队列
          icon: https://i.ibb.co/bjFKJQyq/xiaoxiduilie-logo.png
          details: RabbitMQ/Kafka 使用场景、交换机/队列设计、消息可靠性投递，实现异步解耦与流量削峰。

        - title: 运维
          icon: https://i.ibb.co/SXq60KFv/yunwei-logo.png
          details: Linux 基础操作、Shell 脚本、CI/CD 流水线（Jenkins/GitHub Actions）、Docker 容器化部署。

        - title: AI
          icon: https://i.ibb.co/ynQpbnyC/ai-logo.png
          details: 机器学习基础、LLM 应用开发、Prompt Engineering、Agent 构建（LangChain）。
          link: /docs/ai/1-llm-for-learning

        - title: Python
          icon: https://i.ibb.co/DPVH9n6h/python-logo.png
          details: 后端开发（Django/Flask）、数据处理与爬虫、自动化运维脚本、机器学习入门。

        - title: 站点搭建
          icon: https://i.ibb.co/pvHNnPhW/zhandiandajian-logo.png
          details: wordpress、vitepress。
          link: /docs/website/1-vitepress

#     - title: 布局
#       details: 多种布局、标签栏切换，布局组件显隐
#       image: https://api.opics.org/api
#       highlights:
#         - title: 六大布局
#           icon: /teek-logo-mini.svg
#           details: 内置纵向、经典、横向、分栏、混合、子系统六大布局切换

#         - title: 深色模式
#           icon: /teek-logo-mini.svg
#           details: 可以自由切换浅色模式与深色模式

#         - title: 主题色切换
#           icon: /teek-logo-mini.svg
#           details: 支持自定义主题色并允许用户在预设的主题颜色之间切换

#         - title: 布局组件
#           icon: /teek-logo-mini.svg
#           details: 支持图标、面包屑、导航栏等组件显隐，内置缓存功能，记住用户的布局配置
---

