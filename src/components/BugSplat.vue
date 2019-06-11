<template>
  <div class="container-fluid">
    <!-- bug -->
    <div class="row">
      <div class="col">
        <h1>Bug Splat</h1>
      </div>

    </div>

    <table class="table table-hover">
      <thread class="no">
        <tr>
          <th scope="col" class="tcol">Title</th>
          <th scope="col" class="scol">Description</th>
          <th scope="col" class="tcol">Creator</th>
          <th scope="col">X</th>
        </tr>
      </thread>
      <tbody>
        <tr v-for="bug in bugs" :key="bug._id" @click="selectedBug(bug._id)" :class="{closed: bug.closed}">
          <td class=" tcol">{{bug.title}}</td>
          <td class="scol">{{bug.description}}</td>
          <td class="tcol">{{bug.creator}}</td>
          <td class="1col1">
            <router-link>DigDeeper</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- form -->

  </div>

</template>

<script>
  export default {
    name: 'BugFocus',

    data() {
      return {};
    },

    computed: {
      bugs() {
        return this.$store.state.bugs;
      },
      // selectedBug() {
      //   return this.$store.state.bug;
      // },
    },

    methods: {
      selectedBug(id) {
        return this.$store.dispatch("setBug", id)
      }
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    color: red;
  }

  th {
    height: 0%;
    width: 0;
  }

  .no {
    height: 1px;
    color: #ffffff00;
  }

  .tcol {
    width: 100px;
  }

  .scol {
    width: 500px;
  }

  .closed {
    background-color: #b8864970;
    font-style: italic;
  }
</style>