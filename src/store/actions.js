import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

Vue.use(VueAxios, axios)

export default {
  async loadArticles({ commit }) {
    await axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + NEWS_API_KEY)
      .then(response => response.data.articles)
      .then(articles => {
        commit('SET_Articles', articles)
    })
  }
};
