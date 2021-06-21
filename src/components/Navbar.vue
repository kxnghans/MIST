<template>
  <nav class="navbar px-1 is-fixed-top float-nav" :class="$store.getters.updateTheme[0]" role="navigation">
    <!-- Home Link to the Left -->
    <div class="navbar-brand">
      <a class="navbar-item nav-title to-upper" :class="$store.getters.updateTheme[0]" href="http://localhost:8080/">
        <img src="../assets/images/M.png" height="10"> ist
      </a>
      <a role="button" class="navbar-burger burger" @click="toggleNav =! toggleNav">
        <span class="icon"> <font-awesome-icon :icon="returnIcon"/> </span>
      </a>
    </div>
    <!-- Nav menu to the right -->
    <div class="navbar-menu navbar-end burger is-right toggleNav" :class="[{'is-active':toggleNav}, $store.getters.updateMode[0]]">
      <div class="navbar-item">
        <Modes class="is-outlined px-6" :class="$store.getters.updateMode[0]"> </Modes>
        <div class="navbar-item has-dropdown is-hoverable">
          <!-- Dropdown Menu -->
          <router-link to="/" class="nav-title is-fixed to-upper" :class="[returnDrop, $store.getters.updateTheme[0], $store.getters.updateMode[0]]">
            Home
          </router-link>
          <div v-if="returnNav" class="navbar-dropdown has-text-centered" :class="$store.getters.updateMode[0]" >
            <!-- <router-link to="/Services" class="navbar-item nav-title" :class="[$store.getters.updateTheme[0], $store.getters.updateMode[0]]">
              Services
            </router-link> -->
            <a href="#Services" class="navbar-item nav-title" :class="$store.getters.updateTheme[0]">
              Services
            </a>
            <a href="#Work" class="navbar-item nav-title" :class="$store.getters.updateTheme[0]">
              Work
            </a>
            <a href="#Crew" class="navbar-item nav-title" :class="$store.getters.updateTheme[0]">
              Crew
            </a>
            <a href="#Testimonial" class="navbar-item nav-title" :class="$store.getters.updateTheme[0]">
              Testimonial
            </a>
          </div>
        </div>
        <router-link to="/Contact" class="navbar-item nav-title to-upper" :class="[$store.getters.updateTheme[0], $store.getters.updateMode[0]]">
          Contact Us
        </router-link>
      </div>
    </div>
  </nav>
</template>


<script>
import Modes from "./Modes.vue"

export default {
  name: 'Navbar',
  components: {
    Modes
  },
  data() {
    return {
      toggleNav: false,
    }
  },
  computed: {
    returnIcon() {
      return (this.toggleNav !== false) ? "angle-double-up" : "angle-double-down"
    },
    returnColor() {
      return (this.$store.getters.updateTheme[0] !== "is-dark has-text-light") ? "has-text-white" : "is-dark is-outlined has-text-light"
    },
    returnNav() {
      return (this.$route.name !== "Home") ? false : true
    },
    returnDrop() {
      return (this.$route.name !== "Home") ? "navbar-item fix-alignment" : "navbar-link"
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (max-width: 800px) {
  .navbar-item {
    color: #3273DC;
  };
  .navbar-link {
    color: #3273DC;
  };
};
@media (min-width: 1020px) {
  .fix-alignment {
    margin-right: 38px;
  }
}
</style>
