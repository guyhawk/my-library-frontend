<script setup lang="ts">

import {LoginForm} from '@/features/login-form';

</script>

<template>

  <div class="login-layout">
    <LoginForm />  
  </div>

</template>

<style lang="scss" scoped>

.login-layout {
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.4);
  
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
