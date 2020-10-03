<template>
  <main>
      <div class="red">
         <p v-if="seen">
              Bonjour {{ name }}!
         </p>
      </div>

      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>

      <button v-on:click="reverseMessage">Reverse Message</button>
      <button v-on:click="reverseListe">Reverse Liste</button>
      <button @click="refresh">Refresh</button>
  </main>
</template>

<script>
export default {
    asyncData (context) {
      // appelé à chaque fois avant le chargement du composant
      // comme son nom l'indique, il peut être asynchrone
      // De plus, l'objet retourné sera ajouté à votre objet `data`
      return { 
        name: 'le Monde',
        seen: true,

        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ],
      }
    },

    methods: {
    refresh: function() {
      // document.location.reload(true);
      this.name = this.name.reload(true);
    },

    reverseMessage: function () {
      this.name = this.name.split('').reverse().join('')
    },

    reverseListe: function () {
      this.todos = this.todos.slice().reverse();
    }
  }
}
</script>