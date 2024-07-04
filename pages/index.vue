<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center relative">
    <div class="black-background relative z-10">
      <Hero />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/hero.vue';

components: {
  Hero
}
</script>

<style scoped>

.black-background {
  width: 100%;
}
</style>