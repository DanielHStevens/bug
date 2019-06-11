<template>

  <div class="row">
    <div class="col">
      <h1>New Note</h1>
    </div>
  </div>

  <form class="row" @submit.prevent="createNote()">

    <div class="form-group col-2">
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="noteFlagged"
        placeholder="Flagged" v-model="newNote.flagged" Required>
    </div>

    <div class="form-group col-6">
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="noteContent"
        placeholder="Content Here" v-model="newNote.Content" Required>
    </div>

    <div class="form-group col-3">
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="noteCreator" placeholder="Name"
        v-model="newNote.creator" Required>
    </div>
    <div class="col"> <button type="submit">Hatch</button></div>
  </form>

  <!-- bug: { type: ObjectId, ref: 'Bug' required: true }, -->
  <!-- flagged: { type: String, enum: ["pending", "completed", "rejected"] } -->
</template>

<script>

  export default {
    name: 'NoteEgg',

    data() {
      return {
        newNote: {
          flagged: '',
          content: '',
          creator: ''
        }
      };
    },

    computed: {

    },

    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.newNote)
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

<!-- take note of the Note notes  -->
<!-- var note = new Schema({
content: { type: String, required: true },
bug: { type: ObjectId, ref: 'Bug' required: true },
creator: { type: String, required: true } //The provided name for who made the note
user: { type: String, required: true },
flagged: { type: String, enum: ["pending", "completed", "rejected"] }
}, { timestamps: true }) -->