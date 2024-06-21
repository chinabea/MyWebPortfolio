<template>
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
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/experience">Experience</NuxtLink>
        <NuxtLink to="/certificate">Certificate</NuxtLink>
        <NuxtLink to="/skills">Skills</NuxtLink>
        <a href="mailto:china.t.bea@gmail.com" class="bg-pink-500 text-white py-2 px-4 rounded-full block text-center" target="_blank">
          Contact Me
        </a>
    </ul>
  </nav>
</template>

<script>
import NavItem from './navitem.vue'

export default {
  components: {
    NavItem
  },
  data() {
    return {
      isMenuOpen: false
    };
  }
};
</script>

<style scoped>
.shadow-xl {
  box-shadow: 0 8px 100px -4px rgba(234, 111, 132, 0.8); /* Pink shadow with lighter shade */
}
</style>
