<script setup lang="ts">
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'

  import {userModel} from '@/entities/user';

  import messages from '@/shared/lib/messages'

  const store = useStore()
  const router = useRouter()

  const checked = ref(false)
  const payload = ref({email: '', password: ''})

  const signinClick = async () => {
    try {
      console.log('sing in')
      await store.dispatch(userModel.actions.signInAsync, payload.value)
      router.push('/')
    } 
      catch(e) {
    }     
  }
</script>

<template>
  <div class="login-form">
    <div class="welcome-text">{{ messages.welcomeBackPromt }}</div>
    <div class="app-name">{{ messages.appTitle }}</div>
    <div class="form-item">
      <label for="email" class="">{{ messages.emailPromt }}</label>
      <InputText id="email" type="text" class="w-full mb-3" v-model="payload.email"/>
    </div>
    <div class="form-item">
      <label for="password1" class="">{{ messages.passwordPromt }}</label>
      <InputText id="password1" type="password" class="w-full mb-3" v-model="payload.password"/>
    </div>
    <Button :label="messages.loginPromt" icon="pi pi-user" @click="signinClick"></Button>
  </div>
</template>

<style lang="scss" scoped>

.login-form {
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  padding: 24px;
  background-color: var(--white);

  .form-item {
    margin-bottom: 16px;
    
    label {
      display: block;
      margin-bottom: 8px;
    }
   
  }
  .welcome-text {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 4px;
  }
   .app-name {
    text-align: center;
    font-size: 1.6rem;
    color: var(--primary-color);
    margin-bottom: 24px;
   }
}
</style>
