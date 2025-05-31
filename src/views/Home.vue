<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import mainPhoto from "../assets/images/hero.svg";

const items = ref([
  {
    title: 'Cloud Migration',
    description: 'Seamlessly move your workloads to the cloud with minimal disruption.',
    image: 'https://cdn-icons-png.flaticon.com/512/414/414927.png', // cloud upload icon
  },
  {
    title: 'Accelerate Innovation in Cloud',
    description: 'Leverage cloud technologies to speed up your business innovation cycles.',
    image: 'https://img.icons8.com/fluency/96/rocket.png',
  },
  {
    title: 'Cloud Adoption Program',
    description: 'Tailored programs to help your team embrace cloud technologies effectively.',
    image: 'https://cdn-icons-png.flaticon.com/512/2920/2920340.png', // network/cloud icon
  },
  {
    title: 'Cloud Compliance and Management',
    description: 'Ensure your cloud infrastructure meets security and compliance standards.',
    image: 'https://img.icons8.com/fluency/96/security-checked.png',
  },
]);

</script>

<template>
  <div>

    <section class="relative h-screen text-white overflow-hidden bg-[#f8f7fc]">
      <!-- Top Clip -->
      <div class="relative box h-screen w-full bg-[#2760e2]">
        <div class="flex flex-col items-center justify-center px-6 text-center pt-20">

          <div class="blob bg-[#f8f7fc] overflow-hidden mb-10" data-aos="zoom-in-up" data-aos-duration="2000">
            <img src="../assets/images/halo.png" alt="Halo Logo" class="w-full h-full object-contain">
          </div>

          <h2 class="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="3000">Your out-of-the-box IT
            solutions company. (mostly!)</h2>

        </div>

        <div class="animated-object"></div>
        <div class="tringle-shape"></div>
        <div class="left-circles"></div>
        <div class="right-circles"></div>

        <div class="text-center w-full flex justify-center" data-aos="zoom-in" data-aos-duration="3000">
          <a href="#business"
            class="flex flex-col w-20 items-center mt-10 animate-bounce text-white hover:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" class=" h-6 mb-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span class="text-sm">Scroll Down</span>
          </a>
        </div>
      </div>


    </section>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#2760e2" fill-opacity="1"
        d="M0,96L26.7,80C53.3,64,107,32,160,64C213.3,96,267,192,320,234.7C373.3,277,427,267,480,240C533.3,213,587,171,640,181.3C693.3,192,747,256,800,256C853.3,256,907,192,960,160C1013.3,128,1067,128,1120,144C1173.3,160,1227,192,1280,186.7C1333.3,181,1387,139,1413,117.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z">
      </path>
    </svg>

    <!-- Overlay -->

    <!-- Animated Content -->

    <div class="container relative mx-auto px-4 sm:px-6 lg:px-20 my-10 text-center py-20" data-aos="fade-up"
      data-aos-duration="1000" id="business">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800" data-aos="fade-up" data-aos-delay="0">
        Your Business needs End-to-End IT Solutions
      </h1>
      <span class="text-lg">Delivering Tailored, Comprehensive IT Solutions for Mid- to Large Enterprises</span>

      <div class="flex justify-evenly gap-2 mt-10">
        <div
          class="max-w-sm mx-auto p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 transition-transform duration-300">
          <img src="https://img.icons8.com/fluency/96/security-checked.png" alt="icon"
            class="mx-auto mb-4 w-20 h-20 object-contain" />
          <h2 class="text-3xl font-semibold mb-2">Cloud Migration</h2>
        </div>

        <div
          class="max-w-sm mx-auto p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 transition-transform duration-300">
          <img src="https://img.icons8.com/fluency/96/security-checked.png" alt="icon"
            class="mx-auto mb-4 w-20 h-20 object-contain" />
          <h2 class="text-3xl font-semibold mb-2">Cloud Migration</h2>
        </div>

        <div
          class="max-w-sm mx-auto p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 transition-transform duration-300">
          <img src="https://img.icons8.com/fluency/96/security-checked.png" alt="icon"
            class="mx-auto mb-4 w-20 h-20 object-contain" />
          <h2 class="text-3xl font-semibold mb-2">Cloud Migration</h2>
        </div>
      </div>

    </div>




    <section class="min-h-screen">
      <!-- Text Content -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-20 my-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6" data-aos="fade-up" data-aos-delay="0">
          New Approach to Consulting
        </h1>

        <span class="text-gray-400 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad facilis laborum minima,
          nisi quod ea earum, mollitia, error tempora ratione. Cum consectetur odit sint aut in minima sequi.
        </span>
        <span class="text-gray-400 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad facilis laborum minima,
          nisi quod ea earum, mollitia, error tempora ratione. Cum consectetur odit sint aut in minima sequi.
        </span>
        <span class="text-gray-400 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad facilis laborum minima,
          nisi quod ea earum, mollitia, error tempora ratione. Cum consectetur odit sint aut in minima sequi.
        </span>
        <span class="text-gray-400 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad facilis laborum minima,
          nisi quod ea earum, mollitia, error tempora ratione. Cum consectetur odit sint aut in minima sequi.
        </span>
        <span class="text-gray-400 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad facilis laborum minima,
          nisi quod ea earum, mollitia, error tempora ratione. Cum consectetur odit sint aut in minima sequi.
        </span>
        <span class="text-gray-400 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad facilis laborum minima,
          nisi quod ea earum, mollitia, error tempora ratione. Cum consectetur odit sint aut in minima sequi.
        </span>
        <span class="text-gray-400 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad facilis laborum minima,
          nisi quod ea earum, mollitia, error tempora ratione. Cum consectetur odit sint aut in minima sequi.
        </span>
      </div>

    </section>

    <section class="min-h-screen flex flex-wrap gap-5 justify-center p-6" :style="{
      background:
        'linear-gradient(to top, #86c9fd, #75bcf1, #64afe5, #52a2d9, #3e96cd)',
    }">
      <div v-for="(item, index) in items" :key="index" data-aos="fade-up" :data-aos-delay="index * 200"
        data-aos-duration="1000"
        class="bg-white/20 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg max-w-xl w-full p-8 text-center text-white">
        <img :src="item.image" alt="icon" class="mx-auto mb-4 w-20 h-20 object-contain" />
        <h2 class="text-3xl font-semibold mb-2">{{ item.title }}</h2>
        <p class="text-lg">{{ item.description }}</p>
      </div>
    </section>
  </div>
</template>


<style scoped>
.blob {
  width: 25%;
  aspect-ratio: 1;
  clip-path: shape(from 81.49% 78.41%, curve to 73.04% 88.77% with 78.04% 83.90%, curve to 61.26% 95.95% with 68.04% 93.63%, curve to 47.96% 94.59% with 54.49% 98.27%, curve to 34.94% 89.91% with 41.43% 90.91%, curve to 22.27% 85.77% with 28.46% 88.91%, curve to 10.93% 77.45% with 16.09% 82.62%, curve to 7.34% 64.62% with 5.77% 72.29%, curve to 4.82% 50.21% with 8.90% 56.95%, curve to 4.55% 37.17% with 0.74% 43.48%, curve to 14.02% 26.86% with 8.36% 30.86%, curve to 23.88% 18.22% with 19.67% 22.86%, curve to 33.81% 10.60% with 28.09% 13.58%, curve to 46.07% 5.75% with 39.52% 7.61%, curve to 59.38% 5.26% with 52.62% 3.89%, curve to 71.11% 11.34% with 66.13% 6.63%, curve to 81.41% 20.02% with 76.09% 16.05%, curve to 91.47% 29.41% with 86.72% 23.99%, curve to 96.58% 41.99% with 96.21% 34.83%, curve to 94.45% 55.64% with 96.95% 49.16%, curve to 88.45% 67.52% with 91.95% 62.12%, curve to 81.49% 78.41% with 84.94% 72.91%);
}
</style>
