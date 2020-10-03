<template>
    <main>
        <H1 v-html="post.slug"></H1>
        <H1 v-html="post.title.rendered"></H1>
        <span v-html="post.content.rendered"></span>
    </main>
</template>


<script>
import axios from 'axios'

export default {
  validate({ params }) {
    return !isNaN(+params.slug)
    console.log(params)
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`https://www.benjaminsimier.com/wp-json/wp/v2/posts/?slug=${+params.slug}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>