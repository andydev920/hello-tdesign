import { useLocalStorage } from '@vueuse/core';
import type { GlobalConfigProvider } from 'tdesign-vue-next';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { i18n, langCode, localeConfigKey } from '@/locales/index';

export function useLocale() {
  const { locale } = useI18n({ useScope: 'global' });

  // 应用语言对应的字体
  function applyLanguageFont(lang: string) {
    const body = document.body;
    // 移除所有语言类
    body.classList.remove('lang-zh_CN', 'lang-ja_JP', 'lang-en_US');
    // 添加当前语言类
    body.classList.add(`lang-${lang}`);
  }

  function changeLocale(lang: string) {
    // 如果切换的语言不在对应语言文件里则默认为简体中文
    if (!langCode.includes(lang)) {
      lang = 'zh_CN';
    }

    locale.value = lang;
    useLocalStorage(localeConfigKey, 'zh_CN').value = lang;

    // 应用对应的字体
    applyLanguageFont(lang);
  }

  // 初始化时应用字体
  const initializeFont = () => {
    const currentLang = useLocalStorage(localeConfigKey, 'zh_CN').value;
    applyLanguageFont(currentLang);
  };

  const getComponentsLocale = computed(() => {
    return i18n.global.getLocaleMessage(locale.value).componentsLocale as GlobalConfigProvider;
  });

  return {
    changeLocale,
    getComponentsLocale,
    locale,
    initializeFont,
  };
}
