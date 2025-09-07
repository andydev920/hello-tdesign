<template>
  <t-dialog
    :visible="visible"
    :header="t('components.commonTable.selectDepartment')"
    width="800px"
    :footer="false"
    header-align="center"
    @close="handleCancel"
    @update:visible="(value) => emits('update:visible', value)"
  >
    <div class="department-selector-content">
      <!-- 查询条件 -->
      <t-form :data="searchForm" :label-width="80" label-align="left" colon @submit="handleSearch" @reset="handleReset">
        <t-form-item :label="t('components.commonTable.departmentName')" name="name">
          <t-input
            v-model="searchForm.name"
            :placeholder="t('components.commonTable.departmentNameSearchPlaceholder')"
            clearable
            style="width: 300px"
          />
        </t-form-item>
      </t-form>

      <!-- 操作按钮 -->
      <div class="search-operations">
        <t-button theme="primary" @click="handleSearch">
          {{ t('components.commonTable.query') }}
        </t-button>
        <t-button variant="base" theme="default" @click="handleReset">
          {{ t('components.commonTable.reset') }}
        </t-button>
      </div>

      <!-- 表格 -->
      <div class="department-table-container">
        <t-table
          :data="currentPageData"
          :columns="departmentColumns"
          row-key="code"
          :pagination="null"
          max-height="400px"
        >
          <template #selected="{ row }">
            <t-checkbox :checked="isSelected(row.code)" @change="() => toggleSelection(row)" />
          </template>
        </t-table>
      </div>

      <!-- 分页 -->
      <div class="department-pagination">
        <t-pagination
          :current="pagination.current"
          :page-size="pagination.pageSize"
          :total="pagination.total"
          :show-sizer="true"
          :page-size-options="[10, 20, 50, 100]"
          @change="handlePageChange"
          @current-change="(current) => (pagination.current = current)"
          @page-size-change="(pageSize) => (pagination.pageSize = pageSize)"
        />
      </div>

      <!-- 操作按钮 -->
      <div class="department-dialog-footer">
        <div class="selected-info">
          {{ t('components.commonTable.selectedCount', { count: selectedItems.length }) }}
        </div>
        <div class="action-buttons">
          <t-button theme="default" @click="handleCancel">
            {{ t('components.commonTable.cancel') }}
          </t-button>
          <t-button theme="primary" @click="handleConfirm">
            {{ t('components.commonTable.confirm') }}
          </t-button>
        </div>
      </div>
    </div>
  </t-dialog>
</template>
<script setup lang="ts">
import type { PrimaryTableCol } from 'tdesign-vue-next';
import { computed, ref, watch } from 'vue';

import { t } from '@/locales';

interface DepartmentItem {
  code: string;
  name: string;
}

interface Props {
  visible: boolean;
  selectedDepartments?: string[];
}

interface Emits {
  (e: 'update:visible', value: boolean): void;
  (e: 'confirm', selectedItems: DepartmentItem[]): void;
  (e: 'cancel'): void;
}

const props = withDefaults(defineProps<Props>(), {
  selectedDepartments: () => [],
});

const emits = defineEmits<Emits>();

// 全部部门数据（模拟数据，实际应从API获取）
const allDepartments = ref<DepartmentItem[]>([
  { code: 'DEP001', name: '人事部' },
  { code: 'DEP002', name: '财务部' },
  { code: 'DEP003', name: '技术部' },
  { code: 'DEP004', name: '市场部' },
  { code: 'DEP005', name: '销售部' },
  { code: 'DEP006', name: '运营部' },
  { code: 'DEP007', name: '法务部' },
  { code: 'DEP008', name: '采购部' },
  { code: 'DEP009', name: '行政部' },
  { code: 'DEP010', name: '客服部' },
  { code: 'DEP011', name: '研发部' },
  { code: 'DEP012', name: '品质部' },
  { code: 'DEP013', name: '生产部' },
  { code: 'DEP014', name: '物流部' },
  { code: 'DEP015', name: '培训部' },
]);

// 查询表单
const searchForm = ref({
  name: '',
});

// 分页配置
const pagination = ref({
  current: 1,
  pageSize: 10,
  total: 0,
});

// 选中的项目（跨页选择）
const selectedItems = ref<DepartmentItem[]>([]);

// 过滤后的数据
const filteredData = computed(() => {
  if (!searchForm.value.name) {
    return allDepartments.value;
  }
  return allDepartments.value.filter(
    (dept) => dept.name.includes(searchForm.value.name) || dept.code.includes(searchForm.value.name),
  );
});

// 当前页数据
const currentPageData = computed(() => {
  const start = (pagination.value.current - 1) * pagination.value.pageSize;
  const end = start + pagination.value.pageSize;
  return filteredData.value.slice(start, end);
});

// 更新分页总数
watch(
  filteredData,
  (newData) => {
    pagination.value.total = newData.length;
    if (pagination.value.current > Math.ceil(newData.length / pagination.value.pageSize)) {
      pagination.value.current = 1;
    }
  },
  { immediate: true },
);

// 表格列定义
const departmentColumns: PrimaryTableCol[] = [
  {
    title: '',
    colKey: 'selected',
    width: 50,
    align: 'center',
  },
  {
    title: t('components.commonTable.departmentCode'),
    colKey: 'code',
    width: 120,
    align: 'left',
  },
  {
    title: t('components.commonTable.departmentName'),
    colKey: 'name',
    align: 'left',
  },
];

// 检查是否已选中
const isSelected = (code: string) => {
  return selectedItems.value.some((item) => item.code === code);
};

// 切换选择状态
const toggleSelection = (row: DepartmentItem) => {
  const index = selectedItems.value.findIndex((item) => item.code === row.code);
  if (index > -1) {
    // 取消选择
    selectedItems.value.splice(index, 1);
  } else {
    // 添加选择
    selectedItems.value.push({ ...row });
  }
};

// 搜索
const handleSearch = () => {
  pagination.value.current = 1;
};

// 重置
const handleReset = () => {
  searchForm.value.name = '';
  pagination.value.current = 1;
};

// 分页变化
const handlePageChange = () => {
  // 分页变化时不需要额外处理，computed会自动更新数据
};

// 确认选择
const handleConfirm = () => {
  emits('confirm', [...selectedItems.value]);
  emits('update:visible', false);
};

// 取消选择
const handleCancel = () => {
  emits('cancel');
  emits('update:visible', false);
};

// 监听visible变化，初始化选中状态
watch(
  () => props.visible,
  (newVisible) => {
    if (newVisible) {
      // 根据传入的selectedDepartments初始化selectedItems
      selectedItems.value = allDepartments.value.filter((dept) => props.selectedDepartments.includes(dept.name));
      // 重置搜索和分页
      searchForm.value.name = '';
      pagination.value.current = 1;
    }
  },
  { immediate: true },
);
</script>
<style scoped lang="less">
.department-selector-content {
  .search-operations {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-start;
    margin-top: 16px;
    margin-bottom: 24px;
  }

  .department-table-container {
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;

    // 参考父页面表格样式
    :deep(.t-table) {
      // 表格头部背景色
      .t-table__header {
        background-color: #f5f5f5 !important;
      }

      .t-table__header-row {
        background-color: #f5f5f5 !important;
      }

      // 确保所有单元格统一样式
      .t-table__cell {
        padding: 12px 16px !important;
        vertical-align: middle !important;
        line-height: 1.5 !important;
      }

      // 表格头部特殊样式
      .t-table__header .t-table__cell,
      .t-table__header-row .t-table__cell,
      thead .t-table__cell,
      thead th {
        background-color: #f5f5f5 !important;
        border-bottom: 1px solid #e0e0e0 !important;
        font-weight: 500 !important;
        text-align: left !important;
      }

      // 表格内容样式
      .t-table__body .t-table__cell {
        text-align: left !important;
      }

      // 选择框列居中对齐
      .t-table__header .t-table__cell:first-child,
      .t-table__body .t-table__cell:first-child {
        text-align: center !important;
      }

      // 表格行样式优化
      .t-table__body .t-table__row:nth-child(even) {
        background-color: #fafbfc;
      }

      .t-table__body .t-table__row:hover {
        background-color: #f1f3f5 !important;
      }
    }
  }

  .department-pagination {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .department-dialog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid #e7e7e7;

    .selected-info {
      color: #666;
      font-size: 14px;
    }

    .action-buttons {
      display: flex;
      gap: 8px;
    }
  }
}
</style>
