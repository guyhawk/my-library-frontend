<script setup lang="ts">
  import {computed, ref} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'

  import {MainNavigation} from '@/features/main-navigation'
  import {NavigationFooter} from '@/features/navigation-footer'
  import messages from '@/shared/lib/messages'

  const isExpanded = ref(localStorage.getItem('sidebar') === "true")
  
  const toggleSidebar = () => {
    isExpanded.value = !isExpanded.value
      let isExpandedString: string = 'false'
      if (isExpanded.value ) {
        isExpandedString = "true"
      }
      localStorage.setItem('sidebar', isExpandedString)
  }

</script>

<template>
  <aside class="sidebar" :class="`${isExpanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <!-- <img src="../../assets/logo-lib.png" alt="Vue" class="mb-1"> -->
      <div class="app-name text-2xl ">{{ messages.appTitle }}</div>
    </div>
    <div class="menu-toggle-wrap">
      <button @click.prevent="toggleSidebar" class="button-sidebar" ><span class="button-sidebar-icon pi pi-angle-double-left"></span></button>
    </div>
    <MainNavigation/>
    <div class="flex"></div>
    <NavigationFooter/>

  </aside>
</template>

<style scoped lag="scss">
  .sidebar {
    position: fixed;
    width: 300px;
    height: 100vh;
    background: var(--gray-700);
    display:  flex;
    flex-direction: column;    
  }
</style>
