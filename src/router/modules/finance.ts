import { shallowRef } from 'vue';

import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/index',
    name: 'Finance',
    meta: {
      title: {
        zh_CN: '财务管理',
        en_US: 'Finance Management',
        ja_JP: '財務管理',
      },
      icon: 'money',
      orderNo: 2,
    },
    children: [
      {
        path: 'index',
        name: 'FinanceIndex',
        component: () => import('@/pages/finance/index.vue'),
        meta: {
          title: {
            zh_CN: '财务概览',
            en_US: 'Finance Overview',
            ja_JP: '財務概要',
          },
        },
      },
    ],
  },
];
