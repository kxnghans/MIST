<template>
  <section  id="Testimonial" class="header-spacing px-5">
    <div class="set-margin">
      <!-- Testimonial -->
      <div v-scrollanimation :class="[$store.getters.updateTheme[0], $store.getters.updateMode[0]]">
          <div :class="returnLine"></div>
          <br>
          <br>
          <div class="columns">
            <div class="column is-one-quarter">
              <br>
              <span class="icon is-large">
                <font-awesome-icon icon="quote-left"/>
              </span>
            </div>
            <div class="column">
              <p class="align-left testimonial-size">
                MIST did an amazing job of turning our vision into a beautiful, functioning website. They were able to answer questions we didn't know to ask, and they were quick to respond to concerns. They built a custom website on a manageable budget and gave great advice on how to make the functions we wanted work within our financial constraints and desired timeline.
              </p>
              <br>
              <div class="stack-horizontal columns">
                <div class="img-fill column">
                  <img alt="Rebecca" class="float-circle m-1" :width="imgsize" src="../assets/images/rebeccawilder.jpg">
                </div>
                <p class="to-upper paragraph column mx-2">
                  Rebecca Wilder, Assistant Program Director - UCCS Economic Forum
                </p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <br>
              <span class="icon is-large">
                <font-awesome-icon icon="quote-right"/>
              </span>
            </div>
          </div>
        <div :class="returnLine"></div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "Crew",
  data() {
    return{
      imgsize: "150px"
    }
  },
  computed: {
    returnLine() {
      return (this.$store.getters.updateTheme[0] !== "is-dark has-text-light") ? "line-black" : "line-white"
    }
  }
}
</script>
