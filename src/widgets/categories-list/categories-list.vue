<script setup>

  import {onMounted, computed} from 'vue'
  import {useStore} from 'vuex';
  import {categoriesModel} from '@/entities/categories';
  import {booksModel} from '@/entities/books';

  import {EditPanel} from '@/features/edit-panel'

  import { Category } from '@/shared/api';

  const store = useStore()

  const books = computed(()=> store.state['books'].books)
  const categories = computed(()=> store.state['categories'].categories)

  const getBooksAsync =  () => store.dispatch(booksModel.actions.getBooksListAsync);
  const getCategoriesAsync = () => store.dispatch(categoriesModel.actions.getCategoriesAsync);

  const tableHead = ['Categories', 'Items', '']
  const colunmTemplate = '2fr 1fr 140px'

  onMounted(() => {
    getBooksAsync()
    getCategoriesAsync()
  })

  const getCategoryCounter = (categoryId) => {
    // if ( books.length > 0 ) {
    //   const n = books.filter(b => b.category === categoryId).length
    //   return n
    // }
    return 0
  }

</script>

<template>
  <Table :head="tableHead" :colunmTemplate="colunmTemplate">
    <TableRow :colunmTemplate="colunmTemplate" v-for="category in categories" :key="category._id">
      <TableColumn>{{ category.name }}</TableColumn>
      <TableColumn>{{ getCategoryCounter(category._id) }}</TableColumn>
      <TableColumn><EditPanel/></TableColumn>
    </TableRow>
  </Table>
</template>
