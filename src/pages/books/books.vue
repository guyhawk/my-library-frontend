<script setup lang="ts">

  import {useStore} from 'vuex';
  import {useRoute} from 'vue-router'
  import {computed, ref} from 'vue'
  import {SideBar} from '@/widgets/sidebar'
  import {BooksList} from '@/widgets/books-list'
  import messages from '@/shared/lib/messages';

  const store = useStore()
  const route = useRoute()

  const title = ref(route.name)

  const fullPage = computed(() => !store.getters.getSidebar)
  
</script>

<template>
  <div class="layout" :class="`${fullPage ? 'full' : ''}`">

    <SideBar/>
    <article>
      <PageTitle>{{messages.pageTitles[title]}}</PageTitle>
      <BooksList class="books"/>
    </article>    
  </div>
</template>

<style lang="scss" scoped>

.layout {
  &.full {
    article {
      margin-left: 74px;
    }
  }

  article {
    transition: all 0.3s ease-in-out;
    margin-left: 324px;
    padding-top: 24px;
    padding-right: 24px;
    .books {
      margin-top: 24px;
    }
  }
}
</style>
