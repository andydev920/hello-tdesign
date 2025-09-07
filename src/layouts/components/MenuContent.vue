<template>
  <div>
    <template v-for="item in list" :key="item.path">
      <template v-if="!item.children || !item.children.length || item.meta?.single">
        <t-menu-item v-if="getHref(item)" :name="item.path" :value="getPath(item)" @click="openHref(getHref(item)[0])">
          <template #icon>
            <component :is="menuIcon(item)" class="t-icon"></component>
          </template>
          {{ renderMenuTitle(item.title) }}
          <span class="external-link-icon">{{ getExternalIcon(item) }}</span>
        </t-menu-item>
        <t-menu-item v-else :name="item.path" :value="getPath(item)" :to="item.path">
          <template #icon>
            <component :is="menuIcon(item)" class="t-icon"></component>
          </template>
          {{ renderMenuTitle(item.title) }}
          <span v-if="item.meta?.frameSrc" class="external-link-icon">{{ getExternalIcon(item) }}</span>
        </t-menu-item>
      </template>
      <t-submenu v-else :name="item.path" :value="item.path" :title="renderMenuTitle(item.title)">
        <template #icon>
          <component :is="menuIcon(item)" class="t-icon"></component>
        </template>
        <menu-content v-if="item.children" :nav-data="item.children" />
      </t-submenu>
    </template>
  </div>
</template>
<script setup lang="tsx">
import type { PropType } from 'vue';
import { computed } from 'vue';

import { useLocale } from '@/locales/useLocale';
import { getActive } from '@/router';
import type { MenuRoute } from '@/types/interface';

type ListItemType = MenuRoute & { icon?: string };

const { navData } = defineProps({
  navData: {
    type: Array as PropType<MenuRoute[]>,
    default: () => [],
  },
});

const active = computed(() => getActive());

const { locale } = useLocale();
const list = computed(() => {
  return getMenuList(navData);
});

const menuIcon = (item: ListItemType) => {
  if (typeof item.icon === 'string') return <t-icon name={item.icon} />;
  const RenderIcon = item.icon;
  return RenderIcon;
};

const renderMenuTitle = (title: string | Record<string, string>) => {
  if (typeof title === 'string') return title;
  if (!title || typeof title !== 'object') return '';
  // 优先返回当前语言，如果不存在则返回中文，再不存在返回英文
  return title[locale.value] || title.zh_CN || title.en_US || '';
};

const getMenuList = (list: MenuRoute[], basePath?: string): ListItemType[] => {
  if (!list || list.length === 0) {
    return [];
  }
  // 如果meta中有orderNo则按照从小到大排序
  list.sort((a, b) => {
    return (a.meta?.orderNo || 0) - (b.meta?.orderNo || 0);
  });
  return list
    .map((item) => {
      const path = basePath && !item.path.includes(basePath) ? `${basePath}/${item.path}` : item.path;

      return {
        path,
        title: item.meta?.title,
        icon: item.meta?.icon,
        children: getMenuList(item.children, path),
        meta: item.meta,
        redirect: item.redirect,
      };
    })
    .filter((item) => item.meta && item.meta.hidden !== true);
};

const getHref = (item: MenuRoute) => {
  const { frameSrc, frameBlank } = item.meta;
  if (frameSrc && frameBlank) {
    return frameSrc.match(/(https?):\/\/([\w.]+)(?:\/\S*)?/);
  }
  return null;
};

const getPath = (item: ListItemType) => {
  const activeLevel = active.value.split('/').length;
  const pathLevel = item.path.split('/').length;
  if (activeLevel > pathLevel && active.value.startsWith(item.path)) {
    return active.value;
  }

  if (active.value === item.path) {
    return active.value;
  }

  return item.meta?.single ? item.redirect : item.path;
};

const openHref = (url: string) => {
  window.open(url);
};

const getExternalIcon = (item: ListItemType) => {
  // 根据路径或名称来分配不同的外部链接图标
  if (item.path.includes('doc') || item.name === 'Doc') {
    return '📄'; // 文档图标
  } else if (item.path.includes('TDesign2') || item.name === 'TDesign2') {
    return '🔗'; // 链接图标
  } else if (item.path.includes('TDesign') || item.name === 'TDesign') {
    return '🌐'; // 网页图标
  }
  return '↗'; // 默认外部链接图标
};
</script>
<style scoped>
.external-link-icon {
  float: right;
  font-size: 12px;
  opacity: 0.7;
  color: #666;
  margin-left: 8px;
}
</style>
