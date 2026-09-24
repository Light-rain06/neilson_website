<!-- .vitepress/theme/components/WorkCard.vue -->
<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  /** 作品标题 */
  title: { type: String, required: true },
  /** 描述文字（也可用默认插槽代替） */
  description: { type: String, default: '' },
  /** 封面图：public 下的绝对路径，或 import 进来的变量 */
  image: { type: String, required: true },
  // 文章链接
  articleLink: { type: String, default: '' },
  /** 部署地址 */
  link: { type: String, default: '' },
  /** 按钮文案 */
  linkText: { type: String, default: '访问项目' },
  /** 技术栈标签 */
  tags: { type: Array, default: () => [] },
  /** 图片放右侧 */
  reverse: { type: Boolean, default: false }
})

// 以 / 开头的路径交给 withBase 处理，兼容 base 配置
const imgSrc = computed(() =>
  props.image.startsWith('/') ? withBase(props.image) : props.image
)
</script>

<template>
  <div class="work-card" :class="{ 'is-reverse': reverse }">
    <!-- 左：封面 -->
    <a
      class="work-card__media"
      :href="articleLink || undefined"
      :target="articleLink ? '_blank' : undefined"
      :rel="articleLink ? 'noopener noreferrer' : undefined"
    >
      <img :src="imgSrc" :alt="title" loading="lazy" />
    </a>

    <!-- 右：信息 -->
    <div class="work-card__body">
      <h3 class="work-card__title">{{ title }}</h3>

      <div class="work-card__desc">
        <slot>{{ description }}</slot>
      </div>

      <ul v-if="tags.length" class="work-card__tags">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>

      <a
        v-if="link"
        class="work-card__btn"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ linkText }}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.work-card {
  display: flex;
  align-items: stretch;
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
}

.work-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.work-card.is-reverse {
  flex-direction: row-reverse;
}

/* ---------- 图片区 ---------- */
.work-card__media {
  flex: 0 0 42%;
  max-width: 42%;
  display: block;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.work-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: contain;
  transition: transform 0.45s ease;
  pointer-events: none;
}

.work-card:hover .work-card__media img {
  transform: scale(1.3);
}

/* ---------- 文字区 ---------- */
.work-card__body {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 24px;
}

.work-card__title {
  margin: 0;
  padding: 0;
  border-top: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.work-card__desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.work-card__desc :deep(p) {
  margin: 0;
}

/* ---------- 标签 ---------- */
.work-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.work-card__tags li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
  /* line-height: 20px; */
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

/* ---------- 按钮 ---------- */
.work-card__btn {
  align-self: flex-start;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #fff !important;
  background: var(--vp-c-brand-1);
  text-decoration: none !important;
  transition: background 0.25s, transform 0.25s;
}

.work-card__btn:hover {
  background: var(--vp-c-brand-2);
}

.work-card__btn:active {
  transform: scale(0.97);
}

/* ---------- 移动端 ---------- */
@media (max-width: 640px) {
  .work-card,
  .work-card.is-reverse {
    flex-direction: column;
  }

  .work-card__media {
    flex: none;
    max-width: 100%;
  }

  .work-card__media img {
    height: 180px;
    min-height: 0;
  }

  .work-card__body {
    padding: 16px 18px;
  }
}
</style>