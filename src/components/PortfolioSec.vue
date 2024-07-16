<template>
  <section class="section" id="portfolio" data-aos="fade-up">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="section-title text-center">
          <span class="text-color mb-0 text-uppercase letter-spacing text-sm"><i class="ti-minus"></i>works</span>
          <h2 class="title">Portfolio</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row">
    <!-- First Professional Image and Title -->
    <div class="col-lg-4 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/2.jpg" alt="Profession 1">
        <h5>
          <RouterLink to="/stock">Title 1</RouterLink>
        </h5>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/6.jpg" alt="Profession 1">
        <RouterLink to="/invoice">Title 1</RouterLink>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/2.jpg" alt="Profession 1">
        <RouterLink to="/weather">Title 1</RouterLink>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/4.jpg" alt="Profession 1">
        <RouterLink to="/shopping">Title 1</RouterLink>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/5.jpg" alt="Profession 1">
        <RouterLink to="/battleship">Title 1</RouterLink>
      </div>
    </div>
    <!-- Add more col-lg-4 or col-md-6 divs for additional professions -->
  </div><!-- /.row -->
  </div>
</section>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
    /* Optional custom styling */
    .profession-box {
      padding: 5.02.px;
      margin-bottom: 20px;
      background: #19273e;
      border-radius: 0px;
    }
    .profession-box img {
      max-width: 100%;
      height: auto;
    }
  </style>
