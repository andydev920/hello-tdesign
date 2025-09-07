import { useLocalStorage } from '@vueuse/core';
import type { GlobalConfigProvider } from 'tdesign-vue-next';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { i18n, langCode, localeConfigKey } from '@/locales/index';

// 系统语言检测函数
function detectSystemLanguage(): string {
  // 获取浏览器语言
  const browserLang = navigator.language || (navigator as any).userLanguage;

  // 语言映射表
  const languageMap: Record<string, string> = {
    zh: 'zh_CN',
    'zh-CN': 'zh_CN',
    'zh-TW': 'zh_CN', // 繁体中文也映射到简体中文
    'zh-HK': 'zh_CN',
    ja: 'ja_JP',
    'ja-JP': 'ja_JP',
    en: 'en_US',
    'en-US': 'en_US',
    'en-GB': 'en_US',
    'en-AU': 'en_US',
    'en-CA': 'en_US',
  };

  // 尝试完全匹配
  if (languageMap[browserLang]) {
    return languageMap[browserLang];
  }

  // 尝试语言代码匹配（如 zh-CN -> zh）
  const langCode = browserLang.split('-')[0];
  if (languageMap[langCode]) {
    return languageMap[langCode];
  }

  // 默认返回中文
  return 'zh_CN';
}

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

  // 初始化语言设置
  const initializeLanguage = () => {
    const storedLang = useLocalStorage(localeConfigKey, null).value;
    const browserLang = navigator.language || (navigator as any).userLanguage;

    console.log(`🌍 浏览器语言: ${browserLang}`);
    console.log(`🌍 存储的语言: ${storedLang}`);

    // 如果没有存储的语言设置，则使用系统语言
    if (!storedLang) {
      const systemLang = detectSystemLanguage();
      changeLocale(systemLang);
      console.log(`🌍 检测到系统语言: ${browserLang} -> 设置为: ${systemLang}`);
    } else {
      // 如果有存储的语言设置，直接使用
      locale.value = storedLang;
      applyLanguageFont(storedLang);
      console.log(`🌍 使用存储的语言设置: ${storedLang}`);
    }
  };

  // 强制使用系统语言（清除存储的设置）
  const forceSystemLanguage = () => {
    const systemLang = detectSystemLanguage();
    const browserLang = navigator.language || (navigator as any).userLanguage;

    console.log(`🌍 强制使用系统语言: ${browserLang} -> 设置为: ${systemLang}`);
    changeLocale(systemLang);
  };

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
    initializeLanguage,
    forceSystemLanguage,
    detectSystemLanguage,
  };
}
