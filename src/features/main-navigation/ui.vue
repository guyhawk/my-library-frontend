<script setup lang="ts">
  import messages from '@/shared/lib/messages'

  const items =  [
    {label: 'Моя библиотека', icon: 'pi pi-fw pi-microsoft', to: '/', key: 0},
    {label: 'Книги', icon: 'pi pi-fw pi-book', to: '/books', key: 1},
    {label: 'Разделы', icon: 'pi pi-fw pi-list', to: '/categories', key: 2},
    {label: 'Читатели', icon: 'pi pi-fw pi-users', to: '/readers', key: 3},
  ]

</script>

<template>
  <h3>{{ messages.menuPromt }}</h3>
  <div class="menu">
    <router-link v-for="item in items" :key="item.key" :to="item.to" class="button">
      <span class="button-icon" :class="item.icon"></span><span class="text">{{ item.label }}</span>
    </router-link>
  </div>
</template>

<style scoped lag="scss">
  .menu {
    display:  flex;
    flex-direction: column;
  }
</style>
