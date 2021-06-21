<template>
  <section  id="Crew" class="spacing gradient parallax-work px-6 has-text-black">
    <div class="set-margin">

      <!-- Title -->
      <h1 v-scrollanimation> Our Crew </h1>
      <!-- Content -->
      <h5 v-scrollanimation> Say hello to our amazing team! </h5>
      <!-- Xiang -->
      <div v-scrollanimation class="columns pt-6 has-text-centered">
        <div class="column">
          <div class="img-fill">
            <img alt="Xiang" class="float-circle m-1" :width="imgsize" src="../assets/images/xiang.png">
          </div>
          <div class="img-fill float-content p-2 mt-3" :class="[$store.getters.updateTheme[0], $store.getters.updateMode[0]]">
            <p> Xiang Tan </p>
          </div>
        </div>
        <!-- Justin -->
        <div class="column">
          <div class="img-fill">
            <img alt="Justin" class="float m-1" :width="imgsize" src="../assets/images/justin.jpeg">
          </div>
          <div class="img-fill float-content p-2 mt-3" :class="[$store.getters.updateTheme[0], $store.getters.updateMode[0]]">
            <p> Justin Johnson </p>
          </div>
        </div>
        <!-- Kobby -->
        <div class="column">
          <div class="img-fill">
            <img alt="Kobby" class="float-circle m-1" :width="imgsize" src="../assets/images/kobby.png">
          </div>
          <div class="img-fill float-content p-2 mt-3" :class="[$store.getters.updateTheme[0], $store.getters.updateMode[0]]">
            <p> Kobby Hanson </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "Crew",
  data() {
    return{
      imgsize: "700px"
    }
  }
}
</script>


<style>
.img-fill {
  margin: auto;
  height: auto;
  max-width: 188px;
  align: center;
}
</style>
