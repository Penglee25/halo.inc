<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Header />
  <div class="page-content">
    <router-view />
  </div>
  <Footer />
</template>
