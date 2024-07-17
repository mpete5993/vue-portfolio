<template>
  

  <NavBar />

<!-- Banner start -->

<!-- Slider Start -->
 <SliderSec />
<!-- Banner End -->

<!-- About start -->
  <AboutSec />
<!-- About End -->

<!-- Skills start -->
  <SkillBar />
<!-- Skills End -->

<!-- Service start --> 
  <ServiceSec />
<!-- Service End -->

<!-- Portfolio start -->
 <PortfolioSec />
<!-- Portfolio End -->

<FooterSec />

</template>


<script setup>
import NavBar from '../components/NavBar.vue'
  import SliderSec from '../components/Slider.vue'
  import AboutSec from '../components/AboutSec.vue'
  import SkillBar from '../components/SkillBar.vue'
  import ServiceSec from '../components/ServiceSec.vue'
  import PortfolioSec from '../components/PortfolioSec.vue'
  import FooterSec from '../components/FooterSec.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

