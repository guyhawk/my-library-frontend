<script setup lang="ts">

import {LoginForm} from '@/features/login-form';

</script>

<template>

  <div class="empty-layout">
    <slot></slot>
  </div>

</template>

<style lang="scss" scoped>

.empty-layout {
  width: 100vw;
  height: 100vh;
  // background: rgba($color: var(--dark), $alpha: 0.4);
  background-color: var(--dark-color);
  
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
