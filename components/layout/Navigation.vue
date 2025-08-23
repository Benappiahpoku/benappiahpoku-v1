<template>
  <!-- Navigation -->
  <nav class="bg-primary-600 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <!-- ===== [New Feature] START ===== -->
              <!-- Replaced StratoneaLogo with BenappiahpokuLogo -->
              <BenappiahpokuLogo white />
              <!-- ===== [New Feature] END ===== -->
              <span class="text-xl font-semibold text-white">Ben Appiah Poku</span>
            </router-link>
          </div>
          <!-- Desktop Navigation -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
v-for="item in navItems" :key="item.path" :to="item.path"
              class="inline-flex items-center px-8 py-4 text-white relative group transition-colors duration-200 font-semibold">
              <span class="relative z-10">{{ item.name }}</span>
              <div
                class="absolute inset-[10px] rounded-lg bg-[#4B84FC] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                :class="{ 'opacity-100': $route.path === item.path }" />
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            aria-controls="mobile-menu" :aria-expanded="isMobileMenuOpen" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg
v-if="!isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open -->
            <svg
v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0">
      <div v-show="isMobileMenuOpen" id="mobile-menu" class="sm:hidden bg-primary-700">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
v-for="item in navItems" :key="item.path" :to="item.path"
            class="text-white block px-3 py-4 rounded-md text-base font-medium hover:bg-primary-500 transition-colors duration-200"
            :class="{ 'bg-primary-500': $route.path === item.path }" @click="isMobileMenuOpen = false">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// ===== [New Feature] START ===== 
// Replaced StratoneaLogo import with BenappiahpokuLogo
import BenappiahpokuLogo from '~/components/base/BenappiahpokuLogo.vue'
// ===== [New Feature] END =====

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Tools', path: '/tools' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>