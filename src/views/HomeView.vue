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

<!-- Footer start -->
<footer class="footer border-top-1">
    <div class="container">
      <div class="row align-items-center text-center text-lg-left">
        <div class="col-lg-2">
          <h2 class="logo mb-4">Mpete.</h2>
        </div>

        <div class="col-lg-5">
          <ul class="list-inline footer-socials ">
            <li class="list-inline-item"><a href="https://www.facebook.com/mpete.bataung"target="_blank"><i class="ti-facebook"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/mpete_bataung/" target="_blank"><i class="ti-instagram"></i></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/in/bataung-mpete-92a5951ba/" target="_blank"><i class="ti-linkedin"></i></a></li>
            <li class="list-inline-item"><a href="tel:+27639441929"><i class="ti-mobile"></i></a></li>
            <li class="list-inline-item"><a href="mailto:mpete.bataung8@gmail.com"><i class="ti-email"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-5">
          <p class="lead">
            <span class="text-color"></span>
            <a href="#top" class="backtop smoth-scroll"><i class="ti-angle-up"></i></a></p>
        </div>
      </div>
    </div>
  </footer><!-- Footer End -->
</template>


<script setup>
import NavBar from '../components/NavBar.vue'
  import SliderSec from '../components/Slider.vue'
  import AboutSec from '../components/AboutSec.vue'
  import SkillBar from '../components/SkillBar.vue'
  import ServiceSec from '../components/ServiceSec.vue'
  import PortfolioSec from '../components/PortfolioSec.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

