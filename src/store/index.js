import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
    articles: state => {
        return state.articles;
    }
  },
  mutations: {
    SET_Articles (state, articles) {
      state.articles = articles
    }
  },
  actions,
  modules: {
  }
})
