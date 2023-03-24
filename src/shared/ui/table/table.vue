<script lang="ts" setup>
  const props = defineProps({
    head: {
        type: Array,
        default: ''
    },
  colunmTemplate :{
    type: String
  }
})
</script>

<template>
 <div class="table-wrapper">
  <div class="table">
    <div class="table-head" :style="{'grid-template-columns': colunmTemplate}">
      <div v-for="(element, i) in head" :key="i" class="table-head__name">
        {{element}}
      </div>
    </div>
    <slot></slot>
  </div>

 </div>
  
</template>


<style lang="scss" scoped>
.table {
  display: grid;
  .table-head {
    display: grid;
    background-color: var(--gray-light);
    padding-top: 8px;
    padding-bottom: 8px;

    &__name {
      padding-left: 8px;
    }
  }
}
</style>

