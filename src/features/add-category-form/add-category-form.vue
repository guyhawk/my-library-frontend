<script lang="ts" setup>
import {ref} from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { categoriesModel } from '@/entities/categories';
import messages from '@/shared/lib/messages';



const store = useStore()
const router = useRouter()

const category = ref({name: ''})

const addCetegory = async () => {
  console.log('addCetegory')
  console.log('sing in')
  await store.dispatch(categoriesModel.actions.addCategoryAsync, category.value)
  router.push('/categories')
}


</script>
<template>
  <div class="add-category-form">
    <div class="form-item">
      <label for="name" class="">{{ messages.emailPromt }}</label>
      <InputText name="name" type="text" v-model="category.name"/>
    </div>
    <Button label="Add" @click="addCetegory"></Button>
  </div>  
</template>
<style lang="scss" scoped>
.add-category-form {
  .form-item {
    margin-bottom: 16px;

    label {
      display: block;
      margin-bottom: 8px;
    }
  }
}
</style>

