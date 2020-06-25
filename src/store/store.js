import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { API_URL, WG_APP_ID } from '../utils/config';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: {
      isLoaded: false,
      user: null
    }
  },
  mutations: {
    SET_USER: (state, user) => {
      state.auth.isLoaded = true;
      if (
        user !== null &&
        typeof user === 'object' &&
        typeof user.accountId === 'string' &&
        typeof user.nickname === 'string' &&
        typeof user.accessToken === 'string' &&
        typeof user.expiresAt === 'string'
      ) {
        state.auth.user = user;
      } else {
        state.auth.user = null;
      }
    }
  },
  actions: {
    SET_USER: async ({ commit, dispatch }, user) => {
      if (
        user !== null &&
        typeof user === 'object' &&
        typeof user.accountId === 'string' &&
        typeof user.nickname === 'string' &&
        typeof user.accessToken === 'string' &&
        typeof user.expiresAt === 'string'
      ) {
        // ToDo: Refreshing token, now just logout user
        const expiresAt = new Date(Number(user.expiresAt + '000'));
        const hasEnoughTime = expiresAt.getTime() - (Date.now() + 0) > 0; // Check how mutch time token will be valid, 604800000 is a 7 days.

        if (hasEnoughTime) {
          // Set user as usual
          localStorage.setItem('user', JSON.stringify(user));
          commit('SET_USER', user);
        } else {
          // Refresh access_token
          dispatch('WARGAMMING_LOGOUT');
          // dispatch('WARGAMMING_REFRESH_TOKEN', user);
        }
      } else {
        localStorage.setItem('user', JSON.stringify(user));
        commit('SET_USER', user);
      }
    },
    WARGAMMING_LOGIN: async (ctx) => {
      console.log('WARGAMMING_LOGIN', ctx);
      const url = `https://api.worldoftanks.ru/wot/auth/login/`;
      const res = await axios.get(url, {
        params: {
          application_id: WG_APP_ID,
          nofollow: 1,
          redirect_uri: `${window.location.origin}/auth/wargaming/success`
        }
      });
      window.location.replace(res.data.data.location);
      // window.open(res.data.data.location, '_self')
      // console.log('res', res.data.data.location);
    },
    WARGAMMING_REFRESH_TOKEN: async (ctx, user) => {
      const url = `${API_URL}api/auth/prolongate/`;
      const res = await axios.post(url, {
        application_id: WG_APP_ID,
        access_token: user.accessToken
      });
      console.log('REFRESH_TOKEN', res);
      if (res.data === null) {
        ctx.dispatch('SET_USER', null);
      } else {
        const newUser = {
          ...user,
          accessToken: res.data.access_token,
          expiresAt: res.data.expires_at
        };
        ctx.dispatch('SET_USER', newUser);
      }
    },
    WARGAMMING_LOGOUT: async ({ dispatch }) => {
      dispatch('SET_USER', null);
    }
  },
  getters: {
    isUserLogined: (state) => {
      return state.auth.user !== null;
    },
    user: (state) => {
      return state.auth.user;
    }
  }
});

// Get user information from localstorage and set to vuex
const user = JSON.parse(localStorage.getItem('user'));
store.dispatch('SET_USER', user);

export default store;
