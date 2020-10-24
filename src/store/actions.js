import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

Vue.use(VueAxios, axios)

const NEWS_API_KEY = "News API Key Goes Here!";

export default {
  async loadHeadlines({ commit }) {
    await axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + NEWS_API_KEY)
      .then(response => response.data.articles)
      .then(articles => {
        commit('SET_Articles', articles)
    })
  }
};
