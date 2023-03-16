import {ActionContext} from 'vuex';
import {userService} from '@/shared/api'
import type { User } from "@/shared/api";

export const NAMESPACE = 'user';

const IS_NAMESPACED = true;

export const initialState: Record<string, any> = {};

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        user: initialState,
    },
    getters: {
        getToken: (state: any) => state.user.token
    },
    mutations: {
        setUser: (state: any, user: any) => {
            state.user = user;
        }
    },
    actions: {
        signInAsync: async ({commit}: any, params: userService.user.payloadLogin) => {
            try {
                const response = await userService.user.singin(params)
                const user: User = response.data  
                localStorage.setItem('user', JSON.stringify(user))
                commit('setUser', user)
            } finally {
            }
        },
        signUpAsync: async ({commit}: any, params: userService.user.payloadRegistraton) => {
        },
        signOut: async ({commit}: any, params: userService.user.payloadRegistraton) => {
          localStorage.setItem('user', '')
          commit('setUser', {})
      },
    }
}


const withPrefix = (name: string) => IS_NAMESPACED ? `${NAMESPACE}/${name}` : name

export const actions = {
  signInAsync: withPrefix('signInAsync'),
  signUpAsync: withPrefix('signUpAsync'),
  signOut: withPrefix('signOut'),
}

export const mutations = {
  setUser: withPrefix('setUser'),
}

export const getters = {
  getToken: withPrefix('getToken'),
}

