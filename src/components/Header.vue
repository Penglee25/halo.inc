<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import halo from '../assets/images/halo.png'
import halowhite from '../assets/images/halowhite.png'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

const image = ref(halo)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
  image.value = isScrolled.value ? halo : halowhite

}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  image.value = halo;
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>

  <header :class="[
    'fixed w-full top-0 left-0 z-50 h-20 transition-all duration-300 ease-in-out',
    isScrolled
      ? 'bg-[#275fe2] shadow-md backdrop-blur-sm'
      : 'bg-transparent']">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-20 mt-3 flex items-center justify-between">
      <a href="/home">
        <img src="../assets/images/halowhite.png" alt="halo" style="width: 120px;">
      </a>

      <!-- Burger Button (Mobile) -->
      <button class="lg:hidden text-white focus:outline-none" @click="toggleMenu">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex space-x-6 font-medium text-xl">
        <li>
          <RouterLink to="/home" class="hover:text-white text-[#fff]" active-class="active-text-navs">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="hover:text-white text-[#fff]" active-class="active-text-navs">Contact
          </RouterLink>
        </li>
        <RouterLink to="/buyspot" class="hover:text-white text-[#fff]" active-class="active-text-navs">💰 Buy a Spot 
        </RouterLink>
      </ul>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul v-if="isMenuOpen"
        class="lg:hidden flex flex-col space-y-4 bg-[#275fe2] shadow-md backdrop-blur-sm px-4 py-6 text-sm font-medium">
        <li>
          <RouterLink to="/home" class="hover:text-white text-[#fff]" active-class="active-text-navs">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="hover:text-white text-[#fff]" active-class="active-text-navs">Contact
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/buyspot" class="hover:text-white text-[#fff]" active-class="active-text-navs">Buy a Spot 💰
          </RouterLink>
        </li>
      </ul>
    </transition>
  </header>
</template>


<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
