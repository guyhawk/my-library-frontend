import { createStore } from 'vuex'
import {userModel} from '@/entities/user';
import {booksModel} from '@/entities/books';
import {categoriesModel} from '@/entities/categories';




export const store = createStore({
  state: {
    sidebar: true
  },
  getters: {
    getSidebar: (state: any) => {
      return state.sidebar
    }
  },
  mutations: {
    setSidebar: (state: any, sidebar: boolean) => {
      state.sidebar = sidebar;
    }
  },
  actions: {
  },
  modules: {
    [userModel.NAMESPACE]: userModel.module,
    [booksModel.NAMESPACE]: booksModel.module,
    [categoriesModel.NAMESPACE]: categoriesModel.module
  }
})
