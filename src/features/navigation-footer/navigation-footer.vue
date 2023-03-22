<script setup lang="ts">

  import messages from '@/shared/lib/messages'

</script>


<template>
  <div class="menu">
    <router-link  to="/settings" class="button">
      <span class="button-icon pi pi-cog" ></span><span class="text">{{ messages.settingPromt }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .button {
    color: var(--white);
    font-size: 1rem;
    display: flex;
    height: 50px;
    align-items: center;
    padding-left: 24px;
    transition: all 0.3s ease-in-out;
    &:hover {
      border-right: 5px solid var(--primary-color);
      background-color: var(--dark-color-hover);
      color: var(--primary-color);

    }
    .button-icon {
      margin-right: 16px;
    }

  }
</style>
