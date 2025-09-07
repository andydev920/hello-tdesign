<template>
  <t-config-provider :global-config="getComponentsLocale">
    <router-view :key="locale" :class="[mode]" />
  </t-config-provider>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';

import { useLocale } from '@/locales/useLocale';
import { useSettingStore } from '@/store';

const store = useSettingStore();

const mode = computed(() => {
  return store.displayMode;
});

const { getComponentsLocale, locale, initializeFont, initializeLanguage, forceSystemLanguage } = useLocale();

// 初始化语言和字体
onMounted(() => {
  // 临时使用强制系统语言检测来测试
  forceSystemLanguage(); // 强制使用系统语言
  initializeFont(); // 然后初始化字体
});
</script>
<style lang="less" scoped>
#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
