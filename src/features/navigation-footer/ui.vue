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
