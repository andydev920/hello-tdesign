<template>
  <div class="finance-container">
    <!-- 主要内容区域 -->
    <t-row :gutter="24" class="finance-main-row">
      <!-- 左侧卡片区域 -->
      <t-col :xl="3" :lg="4" :md="5" :sm="24" :xs="24">
        <div class="left-cards">
          <!-- 银行口座卡片 -->
          <t-card :bordered="false" class="finance-card mb-24">
            <template #header>
              <div class="finance-card-header">
                <span class="card-title">{{ t('pages.finance.bankAccount') }}</span>
                <t-button theme="default" variant="text" size="small" @click="addBankAccount">
                  <t-icon name="add" />
                </t-button>
              </div>
            </template>
            <div class="account-balance">
              <span class="amount">0 円</span>
            </div>
            <t-button theme="primary" variant="outline" block class="mt-16" @click="registerBankAccount">
              {{ t('pages.finance.registerBank') }}
            </t-button>
          </t-card>

          <!-- 信用卡卡片 -->
          <t-card :bordered="false" class="finance-card mb-24">
            <template #header>
              <div class="finance-card-header">
                <span class="card-title">{{ t('pages.finance.creditCard') }}</span>
                <t-button theme="default" variant="text" size="small" @click="addCreditCard">
                  <t-icon name="add" />
                </t-button>
              </div>
            </template>
            <div class="account-balance">
              <span class="amount">0 円</span>
            </div>

            <!-- freee会员优惠 -->
            <div class="promotion-banner mt-16">
              <t-alert theme="info" :close-btn="true">
                <template #icon><t-icon name="discount" /></template>
                <div class="promotion-content">
                  <div class="promotion-title">{{ t('pages.finance.promotionTitle') }}</div>
                  <div class="promotion-subtitle">{{ t('pages.finance.promotionSubtitle') }}</div>
                  <t-link theme="primary" @click="viewDetails">{{ t('pages.finance.viewDetails') }}</t-link>
                </div>
              </t-alert>
            </div>

            <t-button theme="primary" variant="outline" block class="mt-16" @click="registerCreditCard">
              {{ t('pages.finance.registerCard') }}
            </t-button>
          </t-card>

          <!-- 决済服务卡片 -->
          <t-card :bordered="false" class="finance-card mb-24">
            <template #header>
              <div class="finance-card-header">
                <span class="card-title">{{ t('pages.finance.paymentService') }}</span>
                <t-button theme="default" variant="text" size="small" @click="addPaymentService">
                  <t-icon name="add" />
                </t-button>
              </div>
            </template>
            <div class="account-balance">
              <span class="amount">0 円</span>
            </div>
            <t-button theme="primary" variant="outline" block class="mt-16" @click="registerPaymentService">
              {{ t('pages.finance.registerPayment') }}
            </t-button>
          </t-card>

          <!-- 现金卡片 -->
          <t-card :bordered="false" class="finance-card">
            <template #header>
              <div class="finance-card-header">
                <span class="card-title">{{ t('pages.finance.cash') }}</span>
              </div>
            </template>
            <div class="account-balance">
              <span class="amount">3,299,636 円</span>
            </div>
            <div class="cash-detail mt-8">
              <t-link theme="primary" @click="viewCashDetail">
                {{ t('pages.finance.cashDetail') }} 3,299,636 円
              </t-link>
            </div>
          </t-card>
        </div>
      </t-col>

      <!-- 右侧主要工作区域 -->
      <t-col :xl="21" :lg="20" :md="19" :sm="24" :xs="24">
        <div class="main-content">
          <!-- 确定申报准备横幅 -->
          <t-card :bordered="false" class="preparation-banner main-card mb-24">
            <div class="banner-content">
              <div class="banner-icon">
                <t-icon name="notification" size="24px" />
              </div>
              <div class="banner-text">
                <h3>{{ t('pages.finance.taxPreparation') }}</h3>
              </div>
              <t-button theme="default" variant="text" @click="closeBanner">
                <t-icon name="close" />
              </t-button>
            </div>
          </t-card>

          <!-- 会计初心者指导 -->
          <t-card :bordered="false" class="guidance-card main-card mb-24">
            <div class="guidance-content">
              <div class="guidance-left">
                <div class="guidance-icon">
                  <t-icon name="user" size="48px" />
                </div>
                <div class="guidance-text">
                  <h4>{{ t('pages.finance.beginnerGuide') }}</h4>
                  <div class="guidance-items">
                    <t-tag>{{ t('pages.finance.taxBasics') }}</t-tag>
                    <t-tag>{{ t('pages.finance.freeeUsage') }}</t-tag>
                  </div>
                </div>
              </div>
              <div class="guidance-right">
                <div class="guidance-links">
                  <t-link theme="primary" @click="openGuide">
                    {{ t('pages.finance.beginnerGuideLink') }}
                    <t-icon name="jump" />
                  </t-link>
                  <t-link @click="skipGuide">{{ t('pages.finance.skipNow') }}</t-link>
                </div>
              </div>
            </div>
          </t-card>

          <!-- 年度统计 -->
          <t-card :bordered="false" class="yearly-summary main-card mb-24">
            <template #header>
              <div class="section-header">
                <span class="step-number">1</span>
                <h3>{{ t('pages.finance.yearlyClosing') }}</h3>
              </div>
            </template>
            <div class="yearly-content">
              <div class="yearly-description">
                {{ t('pages.finance.yearlyDescription') }}
                <t-link theme="primary" @click="learnMore">{{ t('pages.finance.learnMore') }}</t-link>
              </div>
              <t-button theme="primary" class="yearly-btn" @click="startYearlyClosing">
                <t-icon name="check-circle" />
                {{ t('pages.finance.yearlyClosing') }}
                <t-icon name="chevron-right" />
              </t-button>
            </div>
          </t-card>

          <!-- 收支登录 -->
          <t-card :bordered="false" class="income-expense main-card mb-24">
            <template #header>
              <div class="section-header">
                <span class="step-number">2</span>
                <h3>{{ t('pages.finance.incomeExpenseEntry') }}</h3>
              </div>
            </template>
            <t-row :gutter="16">
              <t-col :span="12">
                <div class="entry-card income-card" @click="registerIncome">
                  <div class="entry-icon">
                    <t-icon name="money-circle" size="32px" />
                  </div>
                  <div class="entry-text">{{ t('pages.finance.registerIncome') }}</div>
                  <t-icon name="chevron-right" />
                </div>
              </t-col>
              <t-col :span="12">
                <div class="entry-card expense-card" @click="registerExpense">
                  <div class="entry-icon">
                    <t-icon name="file-paste" size="32px" />
                  </div>
                  <div class="entry-text">{{ t('pages.finance.registerExpense') }}</div>
                  <t-icon name="chevron-right" />
                </div>
              </t-col>
            </t-row>
          </t-card>

          <!-- 应用推广 -->
          <t-card :bordered="false" class="app-promotion main-card">
            <div class="promotion-row">
              <div class="promotion-left">
                <div class="promotion-icon">
                  <t-icon name="mobile" size="48px" />
                </div>
                <div class="promotion-content">
                  <h4>{{ t('pages.finance.appPromotion') }}</h4>
                  <p>{{ t('pages.finance.appDescription') }}</p>
                  <t-link theme="primary" @click="downloadApp">{{ t('pages.finance.downloadApp') }}</t-link>
                </div>
              </div>
              <div class="promotion-right">
                <div class="qr-code">
                  <div class="qr-placeholder">QR</div>
                </div>
                <t-button theme="default" variant="text" size="small" @click="closePromotion">
                  <t-icon name="close" />
                </t-button>
              </div>
            </div>
          </t-card>

          <!-- 快捷方式 -->
          <t-card :bordered="false" class="shortcuts main-card mt-24">
            <template #header>
              <div class="shortcuts-header">
                <t-icon name="bookmark" />
                <span>{{ t('pages.finance.shortcuts') }}</span>
                <t-button theme="default" variant="text" size="small" @click="editShortcuts">
                  {{ t('pages.finance.edit') }}
                </t-button>
              </div>
            </template>
            <t-row :gutter="16">
              <t-col :span="6">
                <div class="shortcut-item" @click="incomeEntry">
                  <t-icon name="add" />
                  <span>{{ t('pages.finance.incomeEntry') }}</span>
                </div>
              </t-col>
              <t-col :span="6">
                <div class="shortcut-item" @click="expenseEntry">
                  <t-icon name="remove" />
                  <span>{{ t('pages.finance.expenseEntry') }}</span>
                </div>
              </t-col>
              <t-col :span="6">
                <div class="shortcut-item" @click="estimateCreation">
                  <t-icon name="file-add" />
                  <span>{{ t('pages.finance.estimateCreation') }}</span>
                </div>
              </t-col>
              <t-col :span="6">
                <div class="shortcut-item" @click="requestCreation">
                  <t-icon name="file-copy" />
                  <span>{{ t('pages.finance.requestCreation') }}</span>
                </div>
              </t-col>
            </t-row>
          </t-card>
        </div>
      </t-col>
    </t-row>
  </div>
</template>
<script setup lang="tsx">
import { MessagePlugin } from 'tdesign-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// 各种操作方法
const addBankAccount = () => {
  MessagePlugin.info('添加银行账户功能');
};

const registerBankAccount = () => {
  MessagePlugin.info('注册银行账户功能');
};

const addCreditCard = () => {
  MessagePlugin.info('添加信用卡功能');
};

const viewDetails = () => {
  MessagePlugin.info('查看详情功能');
};

const registerCreditCard = () => {
  MessagePlugin.info('注册信用卡功能');
};

const addPaymentService = () => {
  MessagePlugin.info('添加支付服务功能');
};

const registerPaymentService = () => {
  MessagePlugin.info('注册支付服务功能');
};

const viewCashDetail = () => {
  MessagePlugin.info('查看现金详情功能');
};

const closeBanner = () => {
  MessagePlugin.info('关闭横幅');
};

const openGuide = () => {
  MessagePlugin.info('打开初心者指导');
};

const skipGuide = () => {
  MessagePlugin.info('暂时跳过指导');
};

const learnMore = () => {
  MessagePlugin.info('了解更多年度统计');
};

const startYearlyClosing = () => {
  MessagePlugin.info('开始年度统计');
};

const registerIncome = () => {
  MessagePlugin.info('注册收入');
};

const registerExpense = () => {
  MessagePlugin.info('注册支出');
};

const downloadApp = () => {
  MessagePlugin.info('下载应用');
};

const closePromotion = () => {
  MessagePlugin.info('关闭推广');
};

const editShortcuts = () => {
  MessagePlugin.info('编辑快捷方式');
};

const incomeEntry = () => {
  MessagePlugin.info('收入录入');
};

const expenseEntry = () => {
  MessagePlugin.info('支出录入');
};

const estimateCreation = () => {
  MessagePlugin.info('估算书作成');
};

const requestCreation = () => {
  MessagePlugin.info('请求书作成');
};
</script>
<style scoped lang="less">
@import './index.less';
</style>
