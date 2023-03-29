<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { computed } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const layout = computed(() => {
    return (route.meta.layout || 'empty')
  })
</script>

<template>
  <component :is="layout">
      <RouterView />
  </component>
</template>

