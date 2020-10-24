<template>
  <div class="hello">
    <h1>{{ category }}</h1>
    <div class="articles">
    <div v-for="(article, i) in cricketArticles" :key="i">
      <div class="article">
       {{article.title}}
      </div> 
       <hr>
    </div>
 </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CategoryList',
  props: {
    category: String
  },
  mounted () {
    this.$store.dispatch('loadCategory')
  },
  computed: mapState([
      'cricketArticles'
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
.article {
  color: blue;
}
</style>
