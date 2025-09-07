<template>
  <div class="page-header">
    <!-- 面包屑导航 -->
    <div class="breadcrumb-container">
      <t-breadcrumb>
        <t-breadcrumb-item
          v-for="(item, index) in breadcrumbItems"
          :key="index"
          :disabled="index === breadcrumbItems.length - 1"
          @click="handleBreadcrumbClick(item, index)"
        >
          {{ item.title }}
        </t-breadcrumb-item>
      </t-breadcrumb>
    </div>

    <!-- 页面标题 -->
    <div class="title-container">
      <h1 class="page-title">{{ pageTitle }}</h1>
      <p v-if="pageSubtitle" class="page-subtitle">{{ pageSubtitle }}</p>
    </div>

    <!-- 分割线 -->
    <div class="divider"></div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

interface BreadcrumbItem {
  title: string;
  path?: string;
  name?: string;
}

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();

// 获取页面标题
const pageTitle = computed(() => {
  const meta = route.meta;
  if (meta?.title) {
    if (typeof meta.title === 'string') {
      return meta.title;
    } else if (typeof meta.title === 'object') {
      const titleObj = meta.title as Record<string, string>;
      return titleObj[locale.value] || titleObj.zh_CN || titleObj.en_US || '';
    }
  }
  return (route.name as string) || '';
});

// 获取页面副标题
const pageSubtitle = computed(() => {
  const meta = route.meta;
  if (meta?.subtitle) {
    if (typeof meta.subtitle === 'string') {
      return meta.subtitle;
    } else if (typeof meta.subtitle === 'object') {
      const subtitleObj = meta.subtitle as Record<string, string>;
      return subtitleObj[locale.value] || subtitleObj.zh_CN || subtitleObj.en_US || '';
    }
  }
  return '';
});

// 生成面包屑导航
const breadcrumbItems = computed(() => {
  const items: BreadcrumbItem[] = [];
  const matched = route.matched;

  matched.forEach((match) => {
    if (match.meta?.title) {
      let title = '';
      if (typeof match.meta.title === 'string') {
        title = match.meta.title;
      } else if (typeof match.meta.title === 'object') {
        const titleObj = match.meta.title as Record<string, string>;
        title = titleObj[locale.value] || titleObj.zh_CN || titleObj.en_US || '';
      }

      if (title) {
        items.push({
          title,
          path: match.path,
          name: match.name as string,
        });
      }
    }
  });

  return items;
});

// 处理面包屑点击
const handleBreadcrumbClick = (item: BreadcrumbItem, index: number) => {
  // 如果是最后一个项目（当前页面），不进行跳转
  if (index === breadcrumbItems.value.length - 1) {
    return;
  }

  if (item.path && item.path !== route.path) {
    router.push(item.path);
  }
};
</script>
<style scoped lang="less">
.page-header {
  margin-bottom: 48px;
}

.breadcrumb-container {
  margin-bottom: 16px;

  :deep(.t-breadcrumb) {
    .t-breadcrumb-item {
      color: #666;
      font-size: 14px;

      &:not(.t-breadcrumb-item--disabled) {
        cursor: pointer;

        &:hover {
          color: var(--td-brand-color);
        }
      }

      &.t-breadcrumb-item--disabled {
        color: #252933;
        font-weight: 500;
      }
    }
  }
}

.title-container {
  .page-title {
    font-size: 24px;
    font-weight: 600;
    color: #252933;
    margin: 0 0 8px 0;
  }

  .page-subtitle {
    color: #666;
    margin: 0;
    font-size: 14px;
  }
}

.divider {
  height: 1px;
  background-color: #e7e7e7;
  margin: 24px 0 0 0;
}
</style>
