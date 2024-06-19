<template>
  <div class="flex-grow flex flex-col items-center justify-center text-center relative">
    <!-- Semi-transparent overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>
    
    <!-- Content container -->
    <div class="relative z-10 mt-10">
      <!-- Introduction -->
      <br><br>
      <h1 class="text-3xl font-montserrat leading-normal mb-4">
        👋, my name is China Bea and I am a
      </h1>
      
      <!-- Main title -->
      <!-- <h2 class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-6">
        Full Stack Developer
      </h2> -->

      <h2 class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-6 custom-heading">
    Full Stack Developer
</h2>
      
      <!-- Call to action button -->
      <div class="mt-6">
        <button @click="showModal = true" class="text-xl bg-pink-500 text-white py-2 px-4 rounded-full">
          Let's start a project together
        </button>
      </div>
      
      <!-- Badges or images section -->
      <div class="mt-6 flex justify-center space-x-4">
        <!-- <img src="https://placehold.co/100x100" alt="Badge 1" class="h-16 w-16">
        <img src="https://placehold.co/100x100" alt="Badge 2" class="h-16 w-16"> -->
      </div>
      

    </div>

    
    <SavedModal v-show="showModal" @close-modal="showModal = false" />



  </div>
</template>

<script>
import SavedModal from '~/components/SavedModal.vue'
export default {
  // data() {
  //   return {
  //     isOpen: false
  //   };
  // },
  components: { SavedModal },
  data() {
    return {
      showModal: false,
    }
  },
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



.custom-heading {
    line-height: 1.2; /* Adjust the line-height if needed */
    padding-top: 10px; /* Add padding to ensure the gradient is not cut off */
    padding-bottom: 10px; /* Add padding to ensure the gradient is not cut off */
    margin-top: 0; /* Adjust the margin to ensure there is no cut off */
    margin-bottom: 0; /* Adjust the margin to ensure there is no cut off */
    overflow: visible; /* Ensure overflow is visible */
}
</style>
