<template>
  <div class="flex-grow flex flex-col items-center justify-center text-center relative">
    <!-- Semi-transparent overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>
    
    <!-- Content container -->
    <div class="relative z-10 mt-10">
      <!-- Introduction -->
      <br><br>
      <h1 class="text-3xl font-montserrat leading-normal mb-4">
        👋, my name is China Bea and I am a freelance
      </h1>
      
      <!-- Main title -->
      <h2 class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-6">
        Full Stack Developer
      </h2>
      
      <!-- Call to action button -->
      <div class="mt-6">
        <button @click="openModal" class="text-xl bg-pink-500 text-white py-2 px-4 rounded-full">
          Let's start a project together
        </button>
      </div>
      
      <!-- Badges or images section -->
      <div class="mt-6 flex justify-center space-x-4">
        <!-- <img src="https://placehold.co/100x100" alt="Badge 1" class="h-16 w-16">
        <img src="https://placehold.co/100x100" alt="Badge 2" class="h-16 w-16"> -->
      </div>

      
  <div>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded-lg">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500">&times;</button>
        <slot>HRTHETYHRTYJRJT</slot>
      </div>
    </div>
    <button @click="openModal" class="bg-blue-500 text-white p-2 rounded-lg">Open Modal</button>
  </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
/* Scoped styles */
/* You can use the font directly in scoped styles */
.font-great-vibes {
  font-family: 'Great Vibes', cursive;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>
