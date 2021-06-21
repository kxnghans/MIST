<template>
  <div id="app" class="content paragraph" :class="$store.getters.updateMode[0]">
    <Navbar> </Navbar>
    <br>
    <br>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style>
@import "assets/styles/style.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  position: sticky;
  top: 0;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}
html, body {
    margin: 0;
    height: 100%;
}
</style>
