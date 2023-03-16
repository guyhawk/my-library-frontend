<script setup lang="ts">
  import {computed, ref} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'

  import {userModel} from '@/entities/user';

  import messages from '@/shared/lib/messages'

  const store = useStore()
  const router = useRouter()

  const checked = ref(false)
  const payload = ref({email: '', password: ''})

  async function signin() {
      try {
        await store.dispatch('auth/signIn', payload.value)
        router.push('/')
      } 
      catch(e) {
      }      
  }

  const signinClick = async () => {
    await store.dispatch(userModel.actions.signInAsync, payload.value)
    router.push('/')
  }

</script>

<template>
  <form>
    <label for="email1" class="block text-900 font-medium mb-2">{{ messages.emailPromt }}</label>
      <InputText id="email1" type="text" class="w-full mb-3" v-model="payload.email"/>

      <label for="password1" class="block text-900 font-medium mb-2">{{ messages.passwordPromt }}</label>
      <InputText id="password1" type="password" class="w-full mb-3" v-model="payload.password"/>

      <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
              <!-- <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
              <label for="rememberme1">Remember me</label> -->
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">{{ messages.forgotPasswordPromt}}</a>
      </div>

      <Button :label="messages.loginPromt" icon="pi pi-user" class="w-full" @click.prevent="signinClick"></Button>
  </form>

</template>
