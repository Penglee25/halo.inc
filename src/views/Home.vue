<script setup>
import mainPhoto from "../assets/images/hero.svg";
</script>

<template>
  <section class=" py-16">
    <div class="container mx-auto px-10">
      <div class="flex flex-col lg:flex-row items-center justify-between">

        <!-- Text Content -->
        <div class="lg:w-5/12">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-black" data-aos="fade-up" data-aos-delay="0">
            Promote Your Products by Colorlib
          </h1>

          <p class="text-gray-400 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Another cool free html css template by
            <span class="px-1 rounded" style="background-color: rgba(64, 123, 255, 0.07); color: #407bff;">
              Colorlib
            </span>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
          </p>

          <div data-aos="fade-up" data-aos-delay="200" class="flex gap-4 flex-wrap">
            <a href="#features-section"
              class="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              See Features
            </a>
            <a href="#pricing-section"
              class="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
              Pricing
            </a>
          </div>
        </div>


        <!-- Image -->
        <div class="lg:w-7/12 " data-aos="fade-right" data-aos-delay="400">
          <img :src="mainPhoto" alt="Hero Image" class="w-full max-w-[600px] float-end " />
        </div>


      </div>
    </div>
  </section>
</template>
