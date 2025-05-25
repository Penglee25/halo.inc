<script setup>
import { contactInfo } from "../data/items";

const copyrightText = "Copyright 2023, All rights reserved.";
const column1Heading = "About Launch";
const column1Text =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
const column2Heading = "Projects";
const column3Heading = "Services";
const column4Heading = "Contact";

const connectHeading = "Connect";

const socialItems = [
  { link: "https://www.instagram.com/", icon: "icon-instagram" },
  { link: "https://www.twitter.com/", icon: "icon-twitter" },
  { link: "https://www.facebook.com/", icon: "icon-facebook" },
  { link: "https://www.linkedin.com/", icon: "icon-linkedin" },
  { link: "https://www.pinterest.com/", icon: "icon-pinterest" },
];
</script>

<template>
  <div class="relative bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="absolute inset-0 bg-dots opacity-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Column 1 -->
      <div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">{{ column1Heading }}</h3>
          <p class="text-sm text-gray-300">{{ column1Text }}</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ connectHeading }}</h3>
          <ul class="flex space-x-3">
            <li v-for="(item, index) in socialItems" :key="index">
              <a :href="item.link" class="text-white hover:text-gray-300">
                <span :class="item.icon"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Column 2 -->
      <div>
        <h3 class="text-xl font-semibold mb-2">{{ column2Heading }}</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div>
        <h3 class="text-xl font-semibold mb-2">{{ column3Heading }}</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white">Lorem Ipsum</a></li>
        </ul>
      </div>

      <!-- Column 4 -->
      <div>
        <h3 class="text-xl font-semibold mb-2">{{ column4Heading }}</h3>
        <address class="not-italic text-sm text-gray-300 mb-4">
          {{ contactInfo.address }}
        </address>
        <ul class="space-y-2 text-sm text-gray-300">
          <li>
            <a :href="'tel://' + contactInfo.phone1" class="hover:text-white">{{
              contactInfo.phone1
            }}</a>
          </li>
          <li>
            <a :href="'tel://' + contactInfo.phone2" class="hover:text-white">{{
              contactInfo.phone2
            }}</a>
          </li>
          <li>
            <a :href="'mailto:' + contactInfo.email" class="hover:text-white">{{
              contactInfo.email
            }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="mt-10 text-center text-sm text-gray-500">
      {{ copyrightText }}
    </div>
  </div>
</template>
