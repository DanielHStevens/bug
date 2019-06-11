<!-- Why is this called BugEgg?? well, where do bugs come from? eggs
Better question: what came first, the bug or the egg? -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>New Bug</h1>
      </div>
    </div>

    <form class="row" @submit.prevent="createBug()">

      <div class="form-group col-2">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="bugTitle" placeholder="Title"
          v-model="newBug.title" Required>
      </div>

      <div class="form-group col-6">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="bugDescription"
          placeholder="Describe Bug Here" v-model="newBug.description" Required>
      </div>

      <div class="form-group col-3">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="bugCreator" placeholder="Name"
          v-model="newBug.creator" Required>
      </div>
      <div class="col"> <button type="submit">Hatch</button></div>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'BugEgg',

    data() {
      return {
        newBug: {
          title: '',
          description: '',
          creator: ''
        }
      };
    },

    computed: {

      // selectedBug() {
      //   return this.$store.state.bug;
      // },
    },

    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.newBug)
      }
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    color: red;
  }

  .form-control {
    background-color: #502c1b;
  }
</style>