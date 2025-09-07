<template>
  <div class="form-body without-side">
    <div class="iofrm-layout">
      <div class="img-holder">
        <div class="bg"></div>
        <div class="info-holder">
          <img src="../../assets/login/graphic9.svg" alt="" />
        </div>
      </div>
      <div class="form-holder">
        <div class="form-content">
          <div class="form-items">
            <div class="website-logo-inside logo-normal">
              <a href="https://brandio.io/envato/iofrm/html/index.html">
                <div class="logo">
                  <img class="logo-size" src="../../assets/login/logo-black.svg" alt="" />
                </div>
              </a>
            </div>
            <h3 class="font-md">{{ t('pages.login.title') }}</h3>
            <p>{{ t('pages.login.subtitle') }}</p>
            <form @submit.prevent="onSubmit">
              <input
                v-model="formData.account"
                class="form-control"
                type="text"
                name="account"
                :placeholder="`${t('pages.login.input.account')}：admin`"
                required
              />
              <input
                v-model="formData.password"
                class="form-control"
                :type="showPsw ? 'text' : 'password'"
                name="password"
                :placeholder="`${t('pages.login.input.password')}：admin`"
                required
              />

              <div class="form-button d-flex align-items-center">
                <div class="submit-container mr-auto text-start">
                  <button id="submit" type="submit" class="ibtn">{{ t('pages.login.signIn') }}</button>
                </div>
                <div class="text-end">
                  <a href="https://brandio.io/envato/iofrm/html/forget26.html">{{ t('pages.login.forget') }}</a>
                </div>
              </div>
            </form>
            <div class="other-links social-with-title">
              <div class="text">{{ t('pages.login.orLoginWith') }}</div>
              <div class="social-buttons">
                <t-button
                  variant="outline"
                  size="small"
                  href="https://www.facebook.com/login"
                  target="_blank"
                  class="social-btn"
                >
                  <template #icon><t-icon name="logo-facebook" /></template>
                  Facebook
                </t-button>
                <t-button
                  variant="outline"
                  size="small"
                  href="https://github.com/login"
                  target="_blank"
                  class="social-btn"
                >
                  <template #icon><t-icon name="logo-github" /></template>
                  GitHub
                </t-button>
                <t-button
                  variant="outline"
                  size="small"
                  href="https://accounts.google.com/signin"
                  target="_blank"
                  class="social-btn"
                >
                  <template #icon><t-icon name="logo-chrome" /></template>
                  Chrome
                </t-button>
              </div>
            </div>
            <div class="page-links">
              <a href="https://brandio.io/envato/iofrm/html/register26.html">{{ t('pages.login.register') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { t } from '@/locales';
import { useUserStore } from '@/store';

defineOptions({
  name: 'LoginIndex',
});

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

// 表单数据
const formData = ref({
  account: 'admin',
  password: 'admin',
  checked: false,
});

// 密码显示状态
const showPsw = ref(false);

// 登录提交
const onSubmit = async () => {
  try {
    await userStore.login(formData.value);
    MessagePlugin.success(t('pages.login.success'));
    const redirect = route.query.redirect as string;
    const redirectUrl = redirect ? decodeURIComponent(redirect) : '/dashboard';
    router.push(redirectUrl);
  } catch (e: any) {
    console.log(e);
    MessagePlugin.error(e.message || t('pages.login.error'));
  }
};

onMounted(() => {
  document.body.classList.add('login-page');
  const app = document.getElementById('app');
  if (app) {
    app.classList.add('login-page');
  }
});

onUnmounted(() => {
  document.body.classList.remove('login-page');
  const app = document.getElementById('app');
  if (app) {
    app.classList.remove('login-page');
  }
});
</script>
<style lang="less" scoped>
@import './index.less';
</style>
