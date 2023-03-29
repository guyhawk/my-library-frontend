<script setup lang="ts">
  import { BooksList } from '@/widgets/books-list'
  import messages from '@/shared/lib/messages'
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  const route = useRoute()
  const title = ref(route.name)
</script>

<template>
  <PageTitle>{{messages.pageTitles[title]}}</PageTitle>
  text
</template>
