<script setup lang="ts">

  import {useStore} from 'vuex';
  import {booksModel} from '@/entities/books';
  import {onMounted, computed} from 'vue'

  import {SideBar} from '@/widgets/sidebar'

  import {BooksList} from '@/widgets/books-list'

  const store = useStore();

  const books = computed(()=> store.state['books'].books)

  const getBooksListAsync = () => store.dispatch(booksModel.actions.getBooksListAsync);
  onMounted(getBooksListAsync)

  
</script>

<template>
  <div class="layout">
    <SideBar/>
    <article>
      <BooksList :books="books"/>
    </article>
  </div>


</template>

<style>

.layout article {
  margin-left: 324px;
}
</style>
