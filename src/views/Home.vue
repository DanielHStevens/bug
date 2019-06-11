<template>
  <div class="home overall">

    <BugSplat />
    <BugEgg />
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugSplat from '@/components/BugSplat.vue'
  import BugEgg from '@/components/BugEgg.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch("getBugs");
    },
    components: {
      BugSplat,
      BugEgg
    }
  }
</script>

<style scoped>
  h1 img {
    height: 1.5;
  }

  .overall {
    background-image: url('http://www.superlife.com/wp-content/uploads/2014/11/dirt-947985_1920.jpg');
    color: white;
  }
</style>