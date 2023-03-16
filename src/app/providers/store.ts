import { createStore } from 'vuex'
import {userModel} from '@/entities/user';
import {booksModel} from '@/entities/books';


export const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    [userModel.NAMESPACE]: userModel.module,
    [booksModel.NAMESPACE]: booksModel.module
  }
})
