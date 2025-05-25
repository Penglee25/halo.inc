<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>

  <header :class="[
    'fixed w-full top-0 z-50 transition-all duration-300 ease-in-out',
    isScrolled
      ? 'bg-white/80 shadow-md backdrop-blur-sm py-2'
      : 'bg-transparent py-4'
  ]">
    <nav class="container mx-auto flex items-center justify-between px-4">
      <h1 class="text-xl font-bold">MySite</h1>

      <!-- Burger Button (Mobile) -->
      <button class="lg:hidden text-gray-800 focus:outline-none" @click="toggleMenu">
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
      <ul class="hidden lg:flex space-x-6 text-sm font-medium">
        <li><a href="#" class="hover:text-blue-600">Home</a></li>
        <li><a href="#" class="hover:text-blue-600">About</a></li>
        <li><a href="#" class="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul v-if="isMenuOpen"
        class="lg:hidden flex flex-col space-y-4 bg-white/90 backdrop-blur px-4 py-6 shadow-md text-sm font-medium">
        <li><a href="#" class="hover:text-blue-600">Home</a></li>
        <li><a href="#" class="hover:text-blue-600">About</a></li>
        <li><a href="#" class="hover:text-blue-600">Contact</a></li>
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
