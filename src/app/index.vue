<script setup lang="ts">
  import {Routing} from '@/pages';
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';

  import { User } from '@/shared/api';

  const store = useStore()
  
  const getUser = () => {
    const user = localStorage.getItem('user')
    let currentUser = null
    if (user !== null) {
      if (user !== '') {
        currentUser = JSON.parse(user)
        store.commit('user/setUser', user)
      }
    }
  }

  onMounted(getUser)

</script>

<template>
  <div class="app">
    <Routing />
  </div>
</template>

<style>
  @import "./index.scss";
</style>
