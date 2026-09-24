---
title: 最近更新
layout: page
sidebar: false
---

<script setup>
import { data as posts } from './.vitepress/posts.data.js'

const formatDateToUTC = (dateStr) => {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    throw new Error(`Invalid date string: ${dateStr}`);
  }

  const pad = n => String(n).padStart(2, '0');
  const year = d.getUTCFullYear();
  const month = pad(d.getUTCMonth() + 1);
  const day = pad(d.getUTCDate());
  const hours = pad(d.getUTCHours());
  const minutes = pad(d.getUTCMinutes());
  const seconds = pad(d.getUTCSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
</script>

<!-- # 📝 最近更新 -->

<ul class="post-list">
  <li v-for="(post, index) in posts" :key="post.url">
    <a :href="post.url">{{  `${posts.length - index++}. ` + post.title }}</a>
    <div class="right-box">
      <img class="group-logo" :src="post.groupLogo"></img>
      <span class="group">{{ post.group }}</span>
      <span class="date">
      {{ post.date ? formatDateToUTC(new Date(post.date)) : '日期不详' }}
    </span>
    </div>
  </li>
</ul>

<style>
:root {
  --primary-color: rgb(0, 132, 255);
}
.post-list {
  list-style: none;
  padding: 8px;
}
.post-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.post-list li:hover {
  transform: translateY(-5px);
  box-shadow: -6px 8px 15px rgba(0, 0, 0, 0.15);
}
.post-list li:hover a {
  color: var(--primary-color);
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
}
.post-list li .right-box {
  display: flex;
  align-items: center;
}
.right-box .group-logo {
  width: 30px;
  border-radius: 10%;
}
.right-box .group {
  color: #fff;
  margin: 0 10px;
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 10px;
  background: var(--primary-color);
}
.right-box .date {
  color: #888;
  font-size: 0.9em;
}
</style>