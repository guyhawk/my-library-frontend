<script setup lang="ts">  
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';
  import { ref, computed } from 'vue';
  import {SideBar} from '@/widgets/sidebar'

  const route = useRoute()
  const store = useStore()

  const fullPage = computed(() => !store.getters.getSidebar)

</script>

<template>
  <div class="layout" :class="`${fullPage ? 'full' : ''}`">

    <SideBar/>
    <article>
      <slot></slot>
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

