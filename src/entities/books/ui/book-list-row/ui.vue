<script setup lang="ts">
  import {toRefs} from 'vue';
  import {Book} from '@/shared/api';


  interface BookRowProps {
    book: Book;
  }
  const props = defineProps<BookRowProps>()
  const {book} = toRefs(props)

</script>

<template>
  <div class="book-list-row">
    <div>
      {{ book.serial }}
    </div>
    <div>
      {{ book.author }}
    </div>
    <div>
      {{ book.title }}
    </div>
  </div>
</template>

<style scoped>
.book-list-row {
  display: flex;
  justify-content: space-between;
}
</style>
