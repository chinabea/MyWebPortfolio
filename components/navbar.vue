<template>
  <div class="black-background relative z-10">
    <nav class="w-full flex justify-between items-center p-4 shadow-xl bg-transparent">
      <div class="text-3xl font-great-vibes font-bold text-pink-500">Chinabea</div>

      <!-- Hamburger menu button for mobile -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="block lg:hidden focus:outline-none"
      >
        <svg
          class="h-6 w-6 fill-current text-pink-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMenuOpen"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 5h20v2H2V5zm0 6h20v2H2v-2zm0 6h20v2H2v-2z"
          />
          <path
            v-if="isMenuOpen"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
          />
        </svg>
      </button>

      <!-- Navigation links -->
      <ul :class="{ 'hidden': !isMenuOpen }" class="flex items-center space-x-6 ml-auto lg:flex">
        <li><NuxtLink to="/" exact-active-class="active-link">Home</NuxtLink></li>
        <li><NuxtLink to="/about" exact-active-class="active-link">About</NuxtLink></li>
        <li><NuxtLink to="/projects" exact-active-class="active-link">Projects</NuxtLink></li>
        <li><NuxtLink to="/certificate" exact-active-class="active-link">Certificates</NuxtLink></li>
        <li><NuxtLink to="/skills" exact-active-class="active-link">Skills</NuxtLink></li>
        <li>
          <a href="mailto:chinabea.dev@gmail.com" class="bg-pink-500 text-white py-2 px-4 rounded-full block text-center" target="_blank">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>

<style scoped>
.shadow-xl {
  box-shadow: 0 8px 100px -4px rgba(234, 111, 132, 0.8); /* Pink shadow with lighter shade */
}
.active-link {
  @apply text-pink-500 font-bold;
}
</style>
