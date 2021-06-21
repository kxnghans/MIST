<template>
  <footer>
    <section id="Contact" class="footer p-6 gradient is-fixed-bottom">
      <div class="set-margin">
        <!-- Contact Us Button -->
        <router-link class="m-1 button has-background-info is-large" :class="$store.getters.updateTheme[1]" to="/Contact">
          <strong> Contact Us </strong>
        </router-link>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  /*computed: {
    returnColor() {
      return (this.$store.getters.updateTheme[0] !== "is-dark has-text-light") ? "has-text-white" : "is-dark has-background-dark is-outlined has-text-light"
    }
  }*/
}
</script>
