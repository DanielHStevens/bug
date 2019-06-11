import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'

const _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/phoenix'   //  change later??
})

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    bugs: [],
    notes: [],
    activeBug: {},
    activeNotes: [],
  }, //close state
  mutations: {
    setBugs(state, data) {
      state.bugs = data.results
    },
    setNotes(state, data) {  //set note??
      state.activeNotes = data.results
    },
    setBug(state, data) {
      state.activeBug = data
    },
  }, //close mutations
  actions: { // open
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        commit('setBugs', res.data)
      }
      catch (e) {
        console.error(e)
      }
    }, //close getBugs
    async getNotes({ commit, dispatch }, payload) {
      try {
        let res = await _api.get('bugs/' + payload + '/notes/')
        commit('setNotes', res.data)
        console.log(res.data)
      }
      catch (e) {
        console.error(e)
      }
    }, //close getNotes
    async getBugsById({ commit, dispatch }, id) {
      let res = await _api.get('/bugs/' + id)
      commit('setBug', res.data.results)  // get bugs??
      dispatch('getNotes', id)
    }, //getBugsById
    setBug({ commit, dispatch }, id) {
      dispatch('getBugsById', id)
      router.push({ name: 'BugFocus', params: { id: id } })
    }, //setBug
    setNotes({ commit, dispatch }, id) {
      commit("setNotes", id)
    }, //setNotes
    async createBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('bugs', payload)
        console.log(res.data)
        dispatch('getBugs')
      } catch (error) {
        console.error(error)
      }
    },// createBug
    async createNote({ commit, dispatch }, payload) {
      try {
        // console.log(payload)
        // console.log(payload.bug)
        let res = await _api.post('bugs/' + payload.bug + '/notes/', payload)
        dispatch('getNotes', payload.bug)
      } catch (error) {
        console.error(error)
      }
    }, //createNote
    async killBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.delete('bugs/' + payload._id) // need to tell it to change closed to true
        dispatch('getBugById', payload._id)
      } catch (error) {
        console.error(error)
      }
    },// killBug
    async killNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.delete('bugs/' + payload.bug + '/notes/' + payload._id)
        dispatch('getNotes', payload.bug)
      } catch (error) {
        console.error(error)
      }
    },// killNote
    async setNoteFlagged({ commit, dispatch }, flagStat, bug, id) {
      try {
        let res = await _api.put('bugs/' + bug + '/notes/' + id, flagStat)
      } catch (error) {
        console.error(error)
      }
    },// setNoteFlag
  } //close actions
})
