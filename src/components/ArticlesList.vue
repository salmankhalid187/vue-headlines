<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="my-items">
    <div v-for="article in articles" :key="article.title">
       {{article.title}}
       <hr>
    </div>
 </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ArticlesList',
  props: {
    msg: String
  },
  mounted () {
    this.$store.dispatch('loadArticles')
  },
  computed: mapState([
      'articles'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
