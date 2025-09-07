<template>
  <div class="filter-list-container">
    <common-table />
  </div>
</template>
<script setup lang="ts">
import CommonTable from '@/components/common-table/index.vue';

defineOptions({
  name: 'ListFilter',
});
</script>
<style scoped lang="less">
.filter-list-container {
  padding: 0px;
  width: 100%;
  box-sizing: border-box;
}
</style>
