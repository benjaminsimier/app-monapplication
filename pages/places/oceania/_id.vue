<template>
    <main>
        <H1 v-html="post.slug"></H1>
        <H1 v-html="post.title.rendered"></H1>
        <span v-html="post.content.rendered"></span>
        {{message}}
    </main>
</template>


<script>
import axios from 'axios'
export default {
    data({ req, params, store }) {
      
      return axios.get('https://www.benjaminsimier.com/wp-json/wp/v2/posts')
        .then((res) => {
          return {
            authors: res.data
          }
        })
    },
  
  data () {
    return {
      post: {},
      error: [],
      message: 'rrrr'
    }
  }
}
</script>