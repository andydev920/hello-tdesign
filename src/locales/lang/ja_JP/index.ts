import merge from 'lodash/merge';
import componentsLocale from 'tdesign-vue-next/es/locale/ja_JP';

import components from './components';
import layout from './layout';
import pages from './pages';

export default {
  lang: '日本語',
  layout,
  pages,
  components,
  constants: {
    contract: {
      name: '契約名',
      status: '契約ステータス',
      num: '契約番号',
      type: '契約タイプ',
      typePlaceholder: 'タイプを入力してください',
      payType: '契約支払いタイプ',
      amount: '契約金額',
      amountPlaceholder: '金額を入力してください',
      signDate: '契約締結日',
      effectiveDate: '契約発効日',
      endDate: '契約終了日',
      createDate: '契約作成日',
      attachment: '添付ファイル',
      company: '甲方',
      employee: '乙方',
      pay: '支払い',
      receive: '受取り',
      remark: '備考',
      statusOptions: {
        fail: '審査失敗',
        auditPending: '審査待ち',
        execPending: '履行待ち',
        executing: '審査成功',
        finish: '完了',
      },
      typeOptions: {
        main: '主契約',
        sub: 'サブ契約',
        supplement: '補足契約',
      },
    },
  },
  componentsLocale: merge({}, componentsLocale, {
    // TDesign コンポーネントの日本語設定
    // https://tdesign.tencent.com/vue-next/config?tab=api
  }),
};
