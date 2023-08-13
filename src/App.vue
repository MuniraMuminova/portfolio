<template>
<div class="container">
    <Navbar/>
    <router-view></router-view>
  </div>
    <Footer/>
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue"

</script>

<style>


</style>