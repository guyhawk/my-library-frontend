<script setup lang="ts">


  import {onMounted, computed} from 'vue'
  import {useStore} from 'vuex';
  import {booksModel} from '@/entities/books';
  import {categoriesModel} from '@/entities/categories';
  import { Category } from '@/shared/api';

  const store = useStore()

  const books = computed(()=> store.state['books'].books)
  const categories = computed(()=> store.state['categories'].categories)

  const getBooksListAsync = () => store.dispatch(booksModel.actions.getBooksListAsync);
  const getCategoriesAsync = () => store.dispatch(categoriesModel.actions.getCategoriesAsync);

  const tableHead = ['Serial', 'Author', 'Title', 'Category', '']
  const colunmTemplate = '100px 1fr 2fr 150px 140px'

  onMounted(() => {
    getBooksListAsync()
    getCategoriesAsync()
  })

  const getCategoryName = (value: string) => {
    if (value) {
      return 'value'
    }
    return ''
  }

</script>

<template>
  <Table :head="tableHead" :colunmTemplate="colunmTemplate">
    <TableRow :colunmTemplate="colunmTemplate" v-for="book in books" :key="book._id">
      <TableColumn>{{book.serial}}</TableColumn>
      <TableColumn>{{book.author}}</TableColumn>
      <TableColumn>{{book.title}}</TableColumn>
      <TableColumn>{{getCategoryName(book.category)}}</TableColumn>
      <TableColumn>button</TableColumn>
    </TableRow>
  </Table>
</template>
