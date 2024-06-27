<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center relative">
    <div class="black-background relative z-10">
      <Navbar />
      
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';


export default {
  components: {
    Navbar,
  }
}
</script>

<style scoped>

.black-background {
  width: 100%;
}
</style>


