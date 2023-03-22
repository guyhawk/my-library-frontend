<script setup lang="ts">
  import messages from '@/shared/lib/messages'

  const items =  [
    {label: 'Моя библиотека', icon: 'pi pi-fw pi-microsoft', to: '/', key: 0},
    {label: 'Книги', icon: 'pi pi-fw pi-book', to: '/books', key: 1},
    {label: 'Разделы', icon: 'pi pi-fw pi-list', to: '/categories', key: 2},
    {label: 'Читатели', icon: 'pi pi-fw pi-users', to: '/readers', key: 3},
  ]

  const props = defineProps({
    isExpanded: {
          type: Boolean,
          default: 'true'
      },

  })

</script>

<template>
  <h3>{{ messages.menuPromt }}</h3>
  <div class="menu">
    <router-link v-for="item in items" :key="item.key" :to="item.to" class="button">
      <span class="button-icon" :class="item.icon"></span><span class="text">{{ item.label }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  h3 {
    text-transform: uppercase;
    color: var(--gray);
    font-size: 0.75rem;
    width: 100%;
    text-align: center;
    
  }
  .menu {
    display:  flex;
    flex-direction: column;
  }
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
