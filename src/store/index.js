import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    cricketArticles: []
  },
  getters: {
    articles: state => {
        return state.articles;
    },
    cricketArticles: state => {
      return state.cricketArticles;
    }
  },
  mutations: {
    SET_Articles (state, articles) {
      state.articles = articles
    },
    SET_Articles_Cricket (state, articles) {
      state.cricketArticles = articles
    },
  },
  actions,
  modules: {
  }
})
