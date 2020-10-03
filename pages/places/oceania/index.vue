<template>
  <div>
    <h1>Blog posts</h1>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching posts: {{ $fetchState.error.message }}
    </p>
    <ul v-else>
      <li v-for="post in posts.slice(0, counter)" :key="post.id">
        <n-link :to="`/posts/${post.id}`">{{ post.title.rendered }}</n-link>
      </li>
    </ul>
    <div v-if="counter != posts.length">
        <button v-on:click="counter += 1">Add 1</button>
    </div>
    <div v-else>
        fgdfg
    </div>
    <br>
    {{ posts.length }}
    <br>
    {{ counter }}
  </div>
</template>

<script>
  export default {
    async fetch() {
      this.posts = await this.$http.$get(
        // 'https://jsonplaceholder.typicode.com/posts'
        // 'http://localhost/sites/ag_sophrologie/wp-json/wp/v2/posts'
        this.$axios.defaults.baseURL + '/posts'
      )
    },
    fetchOnServer: false,

    data() {
      return {
        posts: [],
        counter: 1,
      }
    },
  }
</script>