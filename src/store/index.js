import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const NEWS_API_KEY = "API key goes here";

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
  actions: {
    loadArticles ({ commit }) {
      axios
          .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + NEWS_API_KEY)
          .then(response => response.data.articles)
          .then(articles => {
          commit('SET_Articles', articles)
      })
    }
  },
  modules: {
  }
})
