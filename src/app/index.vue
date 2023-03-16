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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
