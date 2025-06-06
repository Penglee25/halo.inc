<script setup>

const socialItems = [
  { link: "https://www.instagram.com/", icon: "/images/icons/icons8-instagram-48.png" },
  { link: "https://www.facebook.com/", icon: "/images/icons/icons8-fb-48.png" },
  { link: "https://www.linkedin.com/", icon: "/images/icons/icons8-linkedin-48.png" },
];
</script>

<template>

  <div class="mt-60 lg:mt-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#262e41" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,
      1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,
      320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
      </path>
    </svg>
  </div>

  <div class="relative bg-[#262e41] text-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="absolute inset-0 bg-dots opacity-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Column 1 -->
      <div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Menu</h3>

          <ul class="flex space-x-6 font-medium text-sm">
            <li>
              <RouterLink to="" class="hover:text-white text-[#fff]">About
              </RouterLink>
            </li>
            <div class="hidden lg:block w-px min-h-[10px] bg-gray-400 opacity-40 mr-3"></div>
            <li>
              <RouterLink to="" class="hover:text-white text-[#fff]">Services
              </RouterLink>
            </li>
            <div class="hidden lg:block w-px min-h-[10px] bg-gray-400 opacity-40 mr-3"></div>
            <li>
              <RouterLink to="" class="hover:text-white text-[#fff]">Blog
              </RouterLink>
            </li>
            <div class="hidden lg:block w-px min-h-[10px] bg-gray-400 opacity-40 mr-3"></div>
             <li>
              <RouterLink to="" class="hover:text-white text-[#fff]">Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">Connect</h3>
          <ul class="flex space-x-3">
            <li v-for="(item, index) in socialItems" :key="index">
              <a :href="item.link" class="text-white hover:text-gray-300">
                <img :src="item.icon" class="w-5">
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Column 2 -->
      <div>
        <h3 class="text-xl font-semibold mb-2">Location</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-white">Base in California - serving clients nationwide</a></li>
        </ul>
      </div>


      <!-- Column 4 -->
      <div>
        <h3 class="text-xl font-semibold mb-2">Contact</h3>
        <address class="not-italic text-sm text-gray-300 mb-4">
          support@yourcompany.com | 📞 (123) 456-7890
        </address>

      </div>
    </div>

    <!-- Footer bottom -->
    <div class="mt-10 text-center text-sm text-gray-500">
      © 2025 Halo Consulting Solutions
    </div>
  </div>
</template>
