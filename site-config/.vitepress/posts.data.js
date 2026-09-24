// .vitepress/posts.data.js
import { createContentLoader } from 'vitepress';
import config from './config.mts';

export default createContentLoader('**/*.md', {
  transform(rawData) {
    return rawData
      .map(({ url, frontmatter }) => {
        // 1. 提取标题
        const title = frontmatter.title || '无标题'
        
        // 2. 安全转换日期
        let date = frontmatter.date ? new Date(frontmatter.date) : null
        // 如果日期无效，设为 null
        if (date && isNaN(date.getTime())) {
          date = null
        }

        let group = frontmatter.group || '未分组';
        let groupLogo = frontmatter.groupLogo || '';
        
        return {
          title,
          date, // 可能是 Date 对象或 null
          url: config.base.substring(0, config.base.length - 1) + url,
          group,
          groupLogo,
          excerpt: frontmatter.description || '',
        }
      })
      // 3. 过滤掉没有有效日期的文章（可选，如果希望只显示有日期的文章）
      .filter(post => post.date !== null)
      // 4. 按日期从新到旧排序（注意：此时 date 都是有效的 Date 对象）
      .sort((a, b) => b.date - a.date)
  }
})