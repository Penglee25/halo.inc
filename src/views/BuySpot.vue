<template>
  <section class="relative max-h-72 text-white overflow-hidden bg-[#f8f7fc]">
    <!-- Top Clip -->
    <div class="relative box h-screen w-full bg-[#2760e2]" style="background-image: url('/images/cta-bg-dots.png');">

      <img src="/images/icons/dotshape.png" alt="shape" class="animated-object hidden lg:block"
        style="left: 30%; top: 20%; width: 80px;">
      <div class="tringle-shape"></div>
      <div class="circle-animate" style="left: 15%; top: 25%"></div>

      <div class="container flex flex-col justify-start text-center pt-32 px-36">
        <div class="w-full text-left">

          <div class="flex relative">
            <img src="../assets/images/hwhite.png" alt="logo" class="absolute w-9 opacity-[0.12] -top-3 -left-8">

            <div class="ml-3">
              <h2 class="text-lg lg:text-3xl font-semibold mb-1">Buy a spot</h2>
              <nav aria-label="breadcrumb">
                <ol class="flex flex-row lg:flex-wrap text-sm text-gray-600 space-x-2">
                  <li class="after:content-['/'] after:mx-2 last:after:content-none">
                    <a href="/home" class="text-white hover:underline">Home</a>
                  </li>
                  <li class="text-gray-200" aria-current="page">Buy a spot</li>
                </ol>
              </nav>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>


  <section class="h-screen flex items-center mt-60 md:mt-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-20 my-20 text-center">

      <h1 class="text-4xl md:text-5xl text-gray-900 font-extrabold mb-6" data-aos="fade-up" data-aos-delay="200">
        What we offer
      </h1>

      <div class="flex flex-col lg:flex-row gap-2 mt-10">
        <div
          class="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center py-8"
          v-for="i in 3" data-aos="fade-up" :data-aos-delay="i * 200">
          <svg width="80px" height="80px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000"
              d="M256 29.816l-231 154v106.368l231-154 231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925 151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58 87 58v-67.6zm0 89.957l-87 58v64.368l87-58 87 58v-64.368z" />
          </svg>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Tech Trends 2025</h2>
            <p class="text-gray-600 text-sm mb-4">
              Discover the latest innovations driving the future of technology, from AI to quantum computing.
            </p>
            <a href="#"
              class="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition">
              Learn More
            </a>
          </div>
        </div>

      </div>


    </div>
  </section>
</template>