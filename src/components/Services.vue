<template>
  <section id="Services" class="section gradient spacing">
    <div class="set-margin">
      <!-- Main Title -->
      <h1 v-scrollanimation> Our Services </h1>
      <!-- Carousel Section -->
      <carousel v-scrollanimation class="has-text-black">
        <!-- Web Section -->
        <slide :index="0">
          <div class="px-5">
            <span class="icon is-large">
              <font-awesome-icon icon="globe-americas"/>
            </span>
            <h4> Web </h4>
            <p> Front and back end application development, search engine optimization, security analysis, web and graphic design </p>
          </div>
        </slide>
        <!-- Infrastructure Section -->
        <slide :index="1">
          <div class="px-5">
            <span class="icon is-large">
              <font-awesome-icon icon="sitemap"/>
            </span>
            <h4> Infrastructure </h4>
            <p> We provide infrastructure design and server hosting from our data center, as well as database design and development. </p>
          </div>
        </slide>
        <!-- Consulting Section -->
        <slide :index="2">
          <div class="px-5">
            <span class="icon is-large">
              <font-awesome-icon icon="handshake"/>
            </span>
            <h4> Consulting </h4>
            <p> We deliver education and training on strategy, digital, technology, and operations to solve our clients' toughest challenges. </p>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>


<script>
import { Carousel, Slide } from "vue-carousel"

export default {
  name: "Services",
  components: {
    Carousel,
    Slide
  }
}
</script>
