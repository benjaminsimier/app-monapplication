<template>
  <div>
    <!-- {{ $route}} -->
  </div>
</template>

<script>
export default {
      mounted() {
        console.log(this.$route.params);
        // return { slug: this.$route.params.place }
      }
}

</script>
