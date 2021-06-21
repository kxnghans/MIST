import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: [],
    theme: [],
    mode: []
  },
  mutations: { //synchronous update of state
    /*setnotifications (state, notifications) {
      state.notifications = notifications
    },*/
    addItem (state, newItem) {
      //add to end of stack
      state.notifications.push(newItem)
      console.log("Notification -- " + newItem + " added")
    },
    updateTheme (state, newTheme) {
      //add to beginning of stack and remove old values
      state.theme.unshift(newTheme)
      state.theme.splice(2)
      console.log("Theme updated to " + newTheme)
    },
    updateMode (state, newMode) {
      //add to beginning of stack and remove old values
      state.mode.unshift(newMode)
      state.mode.splice(2)
      console.log("Mode updated to " + newMode)
    },
  },
  actions: { //asynchronous
    async addItem({commit}, newItem) {
      commit("addItem", newItem)
    },
    async updateTheme({commit}, newTheme) {
      commit("updateTheme", newTheme)
    },
    async updateMode({commit}, newMode) {
      commit("updateMode", newMode)
    },
  },
  getters: {
    notifications (state) {
      return state.notifications
    },
    filteredNotis (getters) {
      return getters.notifications.filter(item => item !== null)
    },
    updateTheme (state) {
      return state.theme
    },
    updateMode (state) {
      return state.mode
    },
  },
  modules: {

  }
})
