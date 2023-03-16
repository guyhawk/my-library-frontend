import {booksService} from '@/shared/api'
import {Book} from '@/shared/api'

export const NAMESPACE = 'books';

const IS_NAMESPACED = true;

export const initialState: Record<string, any> = {};

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        books: initialState,
    },
    getters: {
        isBooksListEmpty: (state: any) => state.books.length === 0,
    },
    mutations: {
        setBooksList: (state: any, books: any) => {
            state.books = books;
        }

    },
    actions: {
        getBooksListAsync: async ({commit, rootGetters}: any) => {
             const token = rootGetters['user/getToken']
            try {
              const response = await booksService.books.getBooksList(token)      
              //TODO books type IS not define
              const books = response.data
              commit('setBooksList', books)
            } finally {
            }
        },
    }
}

const withPrefix = (name: string) => IS_NAMESPACED ? `${NAMESPACE}/${name}` : name

export const actions = {
  getBooksListAsync: withPrefix('getBooksListAsync'),
}

export const mutations = {
}

export const getters = {
}
