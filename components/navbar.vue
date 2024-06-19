<template>
  <nav class="w-full flex justify-between items-center p-4 shadow-xl bg-transparent">
    <div class="text-3xl font-great-vibes font-bold text-pink-500">Chinabea</div>
    <ul class="flex items-center space-x-6 ml-auto">
      <li>
        <NavItem name="Home" />
      </li>
      <li>
        <NavItem name="About" />
      </li>
      <li>
        <NavItem name="Projects" />
      </li>
      <li>
        <NavItem name="Experience" />
      </li>
      <li>
        <NavItem name="Certificate" />
      </li>
      <li>
        <NavItem name="Skills" />
      </li>
      <li>
        <a href="mailto:china.t.bea@gmail.com" class="bg-pink-500 text-white py-2 px-4 rounded-full block text-center" target="_blank">
          Contact Me
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavItem from './navitem.vue'

export default {
  components: {
    NavItem
  }
}
</script>

<style scoped>
.shadow-xl {
  box-shadow: 0 8px 100px -4px rgba(234, 111, 132, 0.8); /* Pink shadow with lighter shade */
}
</style>
