<script setup lang="ts">
  import {toRefs} from 'vue';
  import {Book} from '@/shared/api';
  import {BookListRow} from '@/entities/books';


  interface BooksRowProps {
    books: Book[];
  }
  const props = defineProps<BooksRowProps>()
  const {books} = toRefs(props)

</script>

<template>
  <BookListRow v-for="book in books" :book="book" :key="book._id" />
</template>
