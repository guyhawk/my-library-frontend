<script setup lang="ts">  
  import {SideBar} from '@/widgets/sidebar'
  import messages from '@/shared/lib/messages'
</script>

<template>
  <div class="layout">
    <SideBar/>
    <article>
      {{ messages.appTitle }}
    </article>
  </div>
</template>

<style>
.layout article {
  margin-left: 324px;
}
</style>
