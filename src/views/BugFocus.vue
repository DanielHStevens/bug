<template>
  <div class="container-fluid" :class="{dead: activeBug.closed}">
    <!-- bug -->
    <div class="row">
      <div class="col">
        <h1>Bug Splat</h1>
      </div>

    </div>

    <div class="row" :key="" v-if="activeBug._id">
      <div class="col-2">
        <h3>{{activeBug.title}}</h3>
      </div>
      <div class="col-6">
        <h3>{{activeBug.description}}</h3>
      </div>
      <div class="col-3">
        <h3>{{activeBug.creator}}</h3>
      </div>
      <div class="col-1">
        <h3><button @click="killBug(activeBug)" v-if="!activeBug.closed">Kill</button></h3>
      </div>
    </div>

    <!-- Notes -->
    <div class="row" v-for="Note in activeNotes" :key="Note._id">
      <div class="col-2">
        <div class="dropdown">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{Note.flagged}}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="setNoteFlagged('pending')">Pending</a>
            <a class="dropdown-item" @click="setNoteFlagged('completed')">Completed</a>
            <a class="dropdown-item" @click="setNoteFlagged('rejected')">Rejected</a>
          </div>
        </div>
      </div>
      <div class="col-6">
        <p>{{Note.content}}</p>
      </div>
      <div class="col-3">
        <p>{{Note.creator}}</p>
      </div>
      <div class="col-1">
        <p><button @click="killNote(Note)" v-if="!Note.closed">Kill</button></p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h1>New Note</h1>
      </div>
    </div>

    <!-- Form -->
    <form class="row" @submit.prevent="createNote()" v-if="!activeBug.closed">
      <div class="form-group col-2">

        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="noteFlagged"
          placeholder="pending complete rejected" v-model="newNote.flagged" Required>

      </div>


      <div class="form-group col-6">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="noteContent"
          placeholder="Content Here" v-model="newNote.content" Required>
      </div>

      <div class="form-group col-3">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="noteCreator"
          placeholder="Name" v-model="newNote.creator" Required>
      </div>
      <div class="col"> <button type="submit">Note</button></div>
    </form>

  </div>

  <!--  -->

</template>

<script>

  export default {
    name: 'BugFocus',
    props: ["id"],
    mounted() {
      this.$store.dispatch("getBugsById", this.id);

    },

    data() {
      return {
        newNote: {
          flagged: '',
          content: '',
          creator: '',
          // bug: this.$store.state.activeBug._id,
        }
      }
    },
    computed: {
      activeBug() {
        return this.$store.state.activeBug;
        // console.log(activeBug.computed)
      },
      activeNotes() {
        return this.$store.state.activeNotes;
      },
    },

    methods: {
      killBug(activeBug) {
        console.log(activeBug)
        this.$store.dispatch("killBug", activeBug)
      },
      createNote() {
        this.newNote['bug'] = this.activeBug._id
        this.$store.dispatch('createNote', this.newNote)
      },
      killNote(id) {
        this.$store.dispatch("killNote", id)
      },
      setNoteFlagged(flagStat, bug, id) {
        this.newNote['flagged'] = flagStat
        this.newNote['bug'] = this.activeBug._id
        this.$store.dispatch("setNoteFlagged", this.newNote)
      },
    } //methods

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    color: red;
  }

  .dead {
    background-color: bisque;
  }
</style>