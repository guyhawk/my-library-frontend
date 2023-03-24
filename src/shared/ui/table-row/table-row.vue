<script lang="ts" setup>
  const props = defineProps({
    colunmTemplate :{
      type: String
    }
  })
</script>

<template>
  <div class="table-row" :style="{'grid-template-columns': colunmTemplate}">
    <slot></slot>
  </div>

</template>

<style lang="scss" scoped>
  .table-row {
    display: grid;
    padding: 16px 0;

    &:hover {
      background-color: var(--gray-light);
      cursor: pointer;
    }

  }

</style>
