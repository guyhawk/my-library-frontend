<script setup lang="ts">
  import {computed, ref} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'

  import {MainNavigation} from '@/features/main-navigation'
  import {NavigationFooter} from '@/features/navigation-footer'
  import messages from '@/shared/lib/messages'

  const store = useStore()
  const isExpanded = ref(localStorage.getItem('sidebar') === "true")
  store.commit('setSidebar', isExpanded)
  
  const toggleSidebar = () => {
    isExpanded.value = !isExpanded.value
      let isExpandedString: string = 'false'
      if (isExpanded.value ) {
        isExpandedString = "true"
      }
      store.commit('setSidebar', isExpanded.value)
      localStorage.setItem('sidebar', isExpandedString)
  }

</script>

<template>
  <aside class="sidebar" :class="`${isExpanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <div class="app-name" v-if="isExpanded">{{ messages.appTitle }}</div>
      <div class="app-name-small" v-else>{{ messages.appTitleSmall }}</div>
    </div>
    <div class="menu-toggle-wrap">
      <Button @click="toggleSidebar" type="circle" color="transparent" icon="pi-angle-double-left" class="button-toogle-sidebar"></Button>
    </div>
    <MainNavigation :isExpanded="isExpanded"/>
    <NavigationFooter class="flex"/>

  </aside>
</template>

<style scoped lang="scss">
  .sidebar {
    position: fixed;
    width: 50px;
    height: 100vh;
    background: var(--dark-color);
    display:  flex;
    flex-direction: column; 
    transition: width 0.3s ease-in-out; 
    .app-name {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 1.4rem;
      color: var(--white);
      text-align: center;
      opacity: 0;
      transition: 0.3s ease-in-out;
    }
    .app-name-small {
      opacity: 1;
      transition: 0.3s ease-in-out;
      color: var(--primary-color);
      font-size: 1.6rem;

      padding-top: 20px;
      padding-bottom: 20px;

      text-align: center;
    }
    .button-toogle-sidebar {
      transform: rotateY(180deg);
    }
    &.is-expanded {
      width: 300px;
      .app-name {
        opacity: 1;
      }
      transition: 0.3s ease-in-out;      .app-name-small {
        opacity: 0;
      }

      .button-toogle-sidebar {
        position: absolute;
        top:5px;
        left: 248px;
        transform: rotateY(0deg);
      }
    }
  }

  .flex {
    margin-top: auto;
  }
</style>
