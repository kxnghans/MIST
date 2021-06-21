<template>
  <div id="MIST">
    <Mist> </Mist>
    <Services> </Services>
    <Work> </Work>
    <Crew> </Crew>
    <Testimonial> </Testimonial>
    <div class="returnFooter">
      <Footer> </Footer>
    </div>
  </div>
</template>

<script>
import Mist from "../components/Mist.vue"
import Services from "../components/Services.vue"
import Work from "../components/Work.vue"
import Crew from "../components/Crew.vue"
import Footer from "@/components/Footer.vue"
import Testimonial from "@/components/Testimonial.vue"


export default {
  name: "Home",
  components: {
    Mist,
    Services,
    Work,
    Crew,
    Testimonial,
    Footer
  },
  computed: {
    returnFooter() {
      return (this.$route.name == "Home") ? true : false
    }
  }
}
</script>
