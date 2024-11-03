<template>
  <div class="flex-grow flex flex-col items-center justify-center text-center relative">
    <!-- Semi-transparent overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <!-- Content container -->
    <div class="relative z-10 mt-10">
      <!-- Introduction -->
      <h1 class="text-3xl font-montserrat leading-normal mb-4 text-white drop-shadow-lg">
        👋, my name is China Bea and I am a
      </h1>
      <h2 class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-6 custom-heading drop-shadow-lg">
        Software Developer
      </h2>
      
      <!-- Profile Image with enhanced design -->
      <div class="mt-6 flex justify-center space-x-4">
        <div class="profile-image-wrapper">
          <img src="/assets/images/MyPhoto.jpg" alt="Profile Photo" class="profile-image">
        </div>
      </div>
      
      <!-- Modal Trigger Button with animation -->
      <button @click="openModal" class="mt-8 px-6 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg animate-gradient">
        Learn More
      </button>
      
      <!-- Modal -->
      <Modal :isVisible="isModalVisible" @close="closeModal()">
        <h1 class="text-3xl font-bold font-montserrat leading-normal mb-4">What do you need?</h1>
        <p>This is some content inside the modal!</p>
      </Modal>
      
    </div>
  </div>
</template>

<script setup>
const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
}
</script>

<style scoped>
.font-great-vibes {
  font-family: 'Great Vibes', cursive;
}
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
.custom-heading {
  line-height: 1.2;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 0;
  margin-bottom: 0;
  overflow: visible;
}
.profile-image-wrapper {
  border: 4px solid white;
  padding: 6px;
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(255, 105, 180, 0.5); /* Pinkish glow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.profile-image-wrapper:hover {
  transform: scale(1.1); /* Slightly increase size on hover */
  box-shadow: 0 12px 24px rgba(255, 105, 180, 0.6); /* Stronger glow on hover */
}
.profile-image {
  height: 8rem; /* Larger size */
  width: 8rem;  /* Larger size */
  border-radius: 50%;
  object-fit: cover;
}
button.animate-gradient {
  background-size: 200% 200%;
  animation: gradientAnimation 3s ease infinite;
}
@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.drop-shadow-lg {
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6); /* Subtle shadow for text readability */
}
</style>
