<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import mainPhoto from "../assets/images/hero.svg";
import content from '../data/content';

const testimonials = [
  { name: 'Alice', message: 'This is the best service ever!' },
  { name: 'Bob', message: 'Amazing experience and support.' },
  { name: 'Charlie', message: 'I would highly recommend it.' },
  { name: 'Jessie', message: 'I would highly recommend it.' },
  { name: 'James', message: 'I would highly recommend it.' },
]


const currentIndex = ref(0)
let interval

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000) // Auto slide every 5s 
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

</script>

<template>
  <div>

    <section class="relative text-white overflow-hidden bg-[#f8f7fc]">
      <!-- Top Clip -->
      <div class="relative box w-full h-[100vh] bg-[#2760e2]">
        <div class="flex flex-col items-center justify-center px-6 text-center pt-20">

          <div class="relative border my-40">
            <div class="animated-object halo-logo"
              style="left: 20%; top: 50%; width: 550px; animation: float 8s ease-in-out infinite">
              <img src="/images/haloshape.png" alt="Halo Logo" class="w-full h-full object-contain">
            </div>
          </div>

          <h2 class="text-2xl md:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="2000">From Security to
            Scale We Power Your Tech Future.</h2>
          <p class="text-lg" data-aos="fade-up" data-aos-duration="2100">Helping you stay secure, work smarter, and grow
            with confidence every step of the way</p>

        </div>

        <img src="/images/icons/dotshape.png" alt="shape" class="animated-object"
          style="left: 20%; top: 20%; width: 80px;">
        <div class="tringle-shape"></div>
        <div class="left-circles"></div>
        <div class="right-circles"></div>

        <div class="text-center w-full flex justify-center">
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


    <section class="min-h-screen p-6" id="business">

      <h1 class="text-4xl text-center md:text-5xl font-extrabold text-gray-800 mb-20" data-aos="fade-up"
        data-aos-delay="0">
        What we do
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        <div class="bg-white text-black p-6 rounded-2xl shadow-lg border border-white/10 text-center"
          v-for="(item, index) in content.whatWeDo" data-aos="zoom-in" :data-aos-delay="index * 300">
          <img :src="item.image" alt="icon" class="mx-auto mb-4 w-20 h-20 object-contain" />
          <h2 class="text-3xl font-semibold mb-2">{{ item.title }}</h2>
          <p class="text-lg">{{ item.description }}</p>
        </div>
      </div>

    </section>

    <section class="min-h-screen bg-white p-6 flex items-center justify-center">

      <div class="my-20">
        <h1 class="text-4xl text-center md:text-5xl font-extrabold text-gray-800 mb-20" data-aos="fade-up"
          data-aos-delay="0">
          What we do
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">


          <div class="bg-white text-black p-6 rounded-2xl shadow-lg border border-white/10 text-center"
            v-for="(item, index) in content.whyChooseUs" data-aos="zoom-in" :data-aos-delay="index * 300">
            <img :src="item.image" alt="icon" class="mx-auto mb-4 w-20 h-20 object-contain" />
            <p class="text-xl mb-2">{{ item.title }}</p>
          </div>

        </div>
      </div>

    </section>


    <div class="relative overflow-hidden mt-52 md:mt-0">
      <div class="bg-blue-shape"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-20 my-20 text-center relative overflow-hidden">

        <div class="rounded-lg p-10 relative overflow-hidden testimonials style-v2"
          style="background-image: url('/images/plx-quotes.jpg'); background-position: center; background-repeat: no-repeat;">

          <div class="absolute inset-0 bg-black bg-opacity-60"></div>

          <div class="circle-animate"></div>
          <div class="right-shape"></div>

          <h1 class="text-2xl md:text-4xl text-white font-extrabold mb-6" data-aos="fade-up" data-aos-delay="200">
            What Our Customers are Saying
          </h1>


          <div class="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div v-for="(testimonial, index) in testimonials" :key="index" class="min-w-full p-6">
                <div class="bg-transparent p-6 text-center">
                  <p class=" text-gray-50 italic">“{{ testimonial.message }}”</p>
                  <p class="mt-4 font-semibold text-white">— {{ testimonial.name }}</p>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <button
              class="absolute top-1/2 left-7 transform -translate-y-1/2 bg-transparent text-white p-2 shadow rounded-full"
              @click="prevSlide">
              <img src="/images/icons/arrow-prev-w.png" alt="arrow-left" class="w-3 opacity-50 hover:opacity-95">
            </button>
            <button
              class="absolute top-1/2 right-7 transform -translate-y-1/2 bg-transparent text-white p-2 shadow rounded-full"
              @click="nextSlide">
              <img src="/images/icons/arrow-next-w.png" alt="arrow-left" class="w-3 opacity-50 hover:opacity-95">
            </button>
          </div>

        </div>
      </div>
    </div>


    <section class="">
      <div class="container relative mx-auto px-4 sm:px-6 lg:px-20 my-10 text-center py-20" data-aos="fade-up"
        data-aos-duration="1000" id="business">

        <div class="mb-5">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800" data-aos="fade-up" data-aos-delay="400">
            Talk to Us!
          </h1>

          <p class="text-lg md:text-2xl mb-10" data-aos="fade-up" data-aos-delay="600">Let’s Strengthen Your Tech
            Strategy
            Together.</p>
          <p class="text-lg mb-20" data-aos="fade-up" data-aos-delay="600">Book your free 15-minute call to explore how
            we can
            help secure, automate, and grow your business with smart IT solutions.</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-10">

            <div class="bg-white text-gray-700 p-2 rounded-2xl shadow-lg border border-white/5 text-center md:mb-20"
              v-for="(item, index) in content.talktoUs" data-aos="zoom-in" :data-aos-delay="index * 300">
              <img :src="item.image" alt="icon" class="mx-auto mb-4 w-20 h-20 object-contain" />
              <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2>
            </div>

          </div>

          <div class="relative overflow-hidden h-[85vh]">
            <iframe src="https://calendly.com/tcaught25/30min" allow="payment" width="100%" height="600"
              sandbox="allow-scripts allow-same-origin allow-forms" referrerpolicy="no-referrer-when-downgrade"
              class="border-0 absolute top-0 bottom-0 left-0 right-0" style="width: 100%; height: 100%;">
            </iframe>

          </div>

        </div>
      </div>
    </section>



  </div>
</template>


<style scoped>
.blob {
  width: 25%;
  aspect-ratio: 1;
  clip-path: shape(from 81.49% 78.41%, curve to 73.04% 88.77% with 78.04% 83.90%, curve to 61.26% 95.95% with 68.04% 93.63%, curve to 47.96% 94.59% with 54.49% 98.27%, curve to 34.94% 89.91% with 41.43% 90.91%, curve to 22.27% 85.77% with 28.46% 88.91%, curve to 10.93% 77.45% with 16.09% 82.62%, curve to 7.34% 64.62% with 5.77% 72.29%, curve to 4.82% 50.21% with 8.90% 56.95%, curve to 4.55% 37.17% with 0.74% 43.48%, curve to 14.02% 26.86% with 8.36% 30.86%, curve to 23.88% 18.22% with 19.67% 22.86%, curve to 33.81% 10.60% with 28.09% 13.58%, curve to 46.07% 5.75% with 39.52% 7.61%, curve to 59.38% 5.26% with 52.62% 3.89%, curve to71.11% 11.34% with 66.13% 6.63%, curve to 81.41% 20.02% with 76.09% 16.05%, curve to 91.47% 29.41% with 86.72% 23.99%, curve to 96.58% 41.99% with 96.21% 34.83%, curve to 94.45% 55.64% with 96.95% 49.16%, curve to 88.45% 67.52% with 91.95% 62.12%, curve to 81.49% 78.41% with 84.94% 72.91%);
}
</style>
