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
    <div class="col-lg-3 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/battleship.png" alt="Profession 1">
          <RouterLink to="/battleship">Batttleship Game</RouterLink>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="profession-box text-left">
        <img src="./images/portfolio/stock-management-system.png" alt="Profession 1">
        <RouterLink to="/stock">Stock Management System</RouterLink>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/e-commerce.gif" alt="Profession 1">
        <RouterLink to="/ecommerce">E-commerce Website</RouterLink>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/demo.png" alt="Profession 1">
        <RouterLink to="/real-estate">Real Estate Website</RouterLink>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/vue-shopping-cart.png" alt="Profession 1">
        <RouterLink to="/shopping">Shopping Cart</RouterLink>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/invoice-App.png" alt="Profession 1">
        <RouterLink to="/invoice">Invoice App</RouterLink>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/expense-tracker.png" alt="Profession 1">
        <RouterLink to="/expense">Expense Tracker</RouterLink>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/recipe-app.jpg" alt="Profession 1">
        <RouterLink to="/recipes">Recipe App</RouterLink>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 bg-gra">
      <div class="profession-box text-left">
        <img src="./images/portfolio/weather-app.png" alt="Profession 1">
        <RouterLink to="/weather">Weather App</RouterLink>
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
      padding: 5px;
      margin-bottom: 20px;
      background: #19273e;
      border-radius: 0px;
    }
    .profession-box img {
      width: 100%;
      height: 210px;
      object-fit: cover;
      margin-bottom:10px;
    }

    .profession-box a {
      color: #fff;
      font-weight: bold;
    }
  </style>
