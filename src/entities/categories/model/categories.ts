import {categoriesServices} from '@/shared/api'
import {Category} from '@/shared/api'

export const NAMESPACE = 'categories';

const IS_NAMESPACED = true;

export const initialState: Record<string, any> = {};

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
      categories: initialState,
    },
    getters: {
        iscCategoriesEmpty: (state: any) => state.categories.length === 0,
    },
    mutations: {
        setCategories: (state: any, categories: any) => {
            state.categories = categories;
        }

    },
    actions: {
        getCategoriesAsync: async ({commit, rootGetters}: any) => {
            const token = rootGetters['user/getToken']
            try {
              const response = await categoriesServices.categories.getCategories(token)      
              //TODO getCategoriesAsync type IS not define
              const categories = response.data
              commit('setCategories', categories)
            } finally {
            }
        },
        addCategoryAsync: async ({commit, dispatch, rootGetters}: any, params: categoriesServices.categories.payloadCategory) => {
          const token = rootGetters['user/getToken']
          try {
            console.log(params)
            const response = await categoriesServices.categories.addCategory(token, params)
            dispatch('getCategoriesAsync')
          } catch (e) {

          }
        }
    }
}

const withPrefix = (name: string) => IS_NAMESPACED ? `${NAMESPACE}/${name}` : name

export const actions = {
  getCategoriesAsync: withPrefix('getCategoriesAsync'),
  addCategoryAsync: withPrefix('addCategoryAsync'),
}

export const mutations = {
}

export const getters = {
}
