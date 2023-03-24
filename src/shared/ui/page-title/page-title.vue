<template>
  <dic class="page-title">
    <slot></slot>
  </dic>
</template>

<style lang="scss" scoped>
  .page-title {
    font-size: 2rem;
    border-left: 5px solid var(--primary-color);
    padding-left: 24px;
  }
</style>
