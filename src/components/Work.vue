<template>
  <section v-scrollanimation id="Work" class="px-6 spacing">
    <div class="set-margin">

      <!-- Main Title -->
      <h1 :class="$store.getters.updateTheme[0]"> Our Work </h1>
      <!-- Content -->
      <div class="columns">
        <!-- Column 1 -->
        <div class="column p-4">
          <div>
            <a href="https://lemp.uccs.edu/helpdesk/">
              <h4 :class="$store.getters.updateTheme[0]"> EAS IT Application </h4>
              <img alt="EIA" class="float" :width="imgsize" src="../assets/images/EIA.png">
            </a>
          </div>
          <br>
          <br>
          <div>
            <a href="https://wam.uccs.edu/">
              <h4 :class="$store.getters.updateTheme[0]"> Workforce Asset Map </h4>
              <img alt="WAM" class="float" :width="imgsize" src="../assets/images/WAM.png">
            </a>
          </div>
        </div>
        <!-- Column 2 -->
        <div class="column p-4" >
          <div>
            <a href="https://ppbea.org/">
              <h4 class="to-upper" :class="$store.getters.updateTheme[0]"> ppbea </h4>
              <img alt="PPBEA" class="float" :width="imgsize" src="../assets/images/PPBEA.png">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "Work",
  data() {
    return{
      imgsize: "450px"
    }
  }
}
</script>
