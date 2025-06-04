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
              <h2 class="text-lg lg:text-3xl font-semibold mb-1">Contact us</h2>
              <nav aria-label="breadcrumb">
                <ol class="flex flex-row lg:flex-wrap text-sm text-gray-600 space-x-2">
                  <li class="after:content-['/'] after:mx-2 last:after:content-none">
                    <a href="/home" class="text-white hover:underline">Home</a>
                  </li>
                  <li class="text-gray-200" aria-current="page">Contact us</li>
                </ol>
              </nav>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

  <div class="container mx-auto px-4 sm:px-6 lg:px-20 mt-60 text-center">
    <div class="text-center w-full flex justify-center">
      <div class="relative">
        <img src="../assets/images/h.png" alt="logo" class="absolute w-32 opacity-[0.12] -top-24">
        <span class="text-3xl md:text-2xl font-extrabold mb-6 text-blue-500 uppercase">Be In touch</span>
      </div>
    </div>

    <h1 class="text-4xl mt-20">Contact Info</h1>

    <p class="text-gray-500 my-5">We tried to provide you with the most necessary information, so that it would be
      easier for you to contact us in any way convenient for you.</p>
  </div>


  <div class="container mx-auto px-4 sm:px-6 lg:px-20 text-center pt-10 relative overflow-hidden border h-[80vh]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.041067887734!2d121.02365997507589!3d14.710269674382268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1191f971c59%3A0x9136f8c86c0ca9fd!2sCalifornia%20Village!5e0!3m2!1sen!2sph!4v1748924310645!5m2!1sen!2sph"
      class=" border-0 absolute top-0 bottom-0 left-0 right-0" allowfullscreen="true" loading="lazy"
      style="width: 100%; height: 100%;" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>


  <section class="h-screen flex items-center">
    <div class="max-w-4xl mx-auto px-4 py-10">
      <p class="text-blue-600 uppercase tracking-wide text-md text-center mb-2">Let’s talk</p>
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Send Us a Message</h2>
      <p class="text-center text-gray-500 mb-10">We are always happy to talk with you. Be sure to write to us if you
        have any questions or need help and support.</p>

      <form method="post" action="#" id="contact-form" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First name"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <input type="text" placeholder="Last name"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="email" placeholder="Email address"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <input type="text" placeholder="Phone number"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <textarea rows="4" placeholder="Enter your message"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

        <div class="text-center">
          <button type="submit"
            class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Send
          </button>
        </div>
      </form>

    </div>
  </section>


</template>