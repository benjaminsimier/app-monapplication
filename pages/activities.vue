<template>
    <main>        
        <p v-if="$fetchState.pending">Fetching mountains...</p>
        <p v-else-if="$fetchState.error">An error occured :(</p>
        <div v-else>
            <h1>Nuxt Mountains</h1>
            <ul v-for="mountain of mountains">
                <li>{{ mountain.title }}</li>
            </ul>
            <button @click="$fetch">Refresh</button>
        </div>
    </main>
</template>

<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>