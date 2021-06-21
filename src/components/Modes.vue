<template>
  <footer>
      <button :class="[$store.getters.updateTheme[1], $store.getters.updateTheme[1]]" class="button is-medium mx-1" @click="toggle">
         <!-- {{returnText}} -->
         <span class="icon">
           <font-awesome-icon :icon="returnIcon"/>
         </span>
       </button>
  </footer>
</template>

<script>
export default {
  name: "Modes",
  data() {
    return {
      theme: {
        dark: "is-dark has-text-light",
        light: "is-light has-text-black ",
      },
      background: {
        dark: "has-background-dark",
        light: "has-background-light",
      },
      webDisplay: "light"
    }
  },
  computed:{
    //update text
    returnText() {
      return (this.webDisplay !== "dark") ? "Dark Mode" : "Light Mode"
    },
    //get new theme
    returnTheme() {
      return (this.webDisplay !== "dark") ? this.theme.dark : this.theme.light
    },
    //get new mode
    returnMode() {
      return (this.webDisplay !== "dark") ? this.background.dark : this.background.light
    },
    returnIcon() {
      return (this.webDisplay !== "dark") ? "moon" : "sun"
    }
  },
  methods: {
    toggle() {
      this.updateTheme()
      this.updateStorage()
      console.log("local storage = " + localStorage.getItem("webDisplay"))
      console.log("toggle success")
    },
    //send new theme and mode from computed property to store
    updateTheme() {
      this.$store.dispatch("updateTheme", this.returnTheme)
      this.$store.dispatch("updateMode", this.returnMode)
    },
    updateStorage() {
      if (this.webDisplay == "light") {
        localStorage.setItem("webDisplay", "dark")
      }
      else {
        localStorage.setItem("webDisplay", "light")
      }
      this.webDisplay = localStorage.getItem("webDisplay")
    }
  },
  created() {
    if (localStorage.getItem("webDisplay")) {
      this.webDisplay = localStorage.getItem("webDisplay")
    }
    else {
      localStorage.setItem("webDisplay", "light")
    }
    this.toggle()
    this.toggle()
  },
  mounted() {
    if (localStorage.getItem("webDisplay")) {
      this.webDisplay = localStorage.getItem("webDisplay")
    }
  }
}
</script>
