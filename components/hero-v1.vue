<template>
  <div class="flex-grow flex flex-col items-center justify-center text-center relative">
    <!-- Semi-transparent overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <!-- Content container -->
    <div class="relative z-10 mt-10">
      <!-- Introduction -->
      <div class="mt-10"></div>
      <h1 class="text-3xl font-montserrat leading-normal mb-4 text-white">
        👋, my name is China Bea and I am a
      </h1>
      <h2 class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-6 custom-heading">
        Software Developer
      </h2>
      
      <!-- Profile Image -->
      <div class="mt-6 flex justify-center space-x-4">
        <div class="profile-image-wrapper">
          <img src="/assets/images/MyPhoto.jpg" alt="Profile Photo" class="profile-image">
        </div>
      </div>
      
      <!-- Modal Trigger -->
      <button @click="openModal" class="mt-8 px-6 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg">
        Learn More
      </button>
      
      <!-- Modal -->
      <Modal :isVisible="isModalVisible" @close="closeModal">
        <h1 class="text-3xl font-bold font-montserrat leading-normal mb-4">What do you need?</h1>
        <p>This is some content inside the modal!</p>
      </Modal>
      
    </div>
  </div>
</template>

<script>
import Modal from '~/components/Modal.vue';
export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
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
  padding: 4px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.profile-image {
  height: 8rem; /* Increased size */
  width: 8rem;  /* Increased size */
  border-radius: 50%;
  object-fit: cover;
}
</style>
