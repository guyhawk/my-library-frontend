<script setup lang="ts">

  import {useStore} from 'vuex';
  import {useRoute} from 'vue-router'
  import {computed, ref} from 'vue'
  import {SideBar} from '@/widgets/sidebar'
  import {CategoriesList} from '@/widgets/categories-list'
  import {RightBar} from '@/widgets/rightbar'
  import {AddCategoryForm} from '@/features/add-category-form'
  import messages from '@/shared/lib/messages';



  const store = useStore()
  const route = useRoute()

  const title = ref(route.name)
  const isRightBarOpen = ref(false)


  const fullPage = computed(() => !store.getters.getSidebar)

  const toogleRightBar = () => {
    isRightBarOpen.value = !isRightBarOpen.value
  }
  
</script>

<template>

  <PageTitle>{{messages.pageTitles[title]}}</PageTitle>
  <Button  label="RightBar" @click="toogleRightBar"/>
  <CategoriesList class="categories"/>

  <RightBar v-model:visible="isRightBarOpen" title="Add category">
    <AddCategoryForm/>
  </RightBar>
</template>

<style lang="scss" scoped>

.categories {
    margin-top: 24px;
}

</style>
