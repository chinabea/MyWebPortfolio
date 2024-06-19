<!-- components/Modal.vue -->
<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal">
          <button class="close-button" @click="closeModal">X</button>
          <div class="modal-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-container {
    position: relative;
    padding: 4px; /* Space for the border */
    border-radius: 9px; /* Border radius + padding */
    background: linear-gradient(45deg, #ec4899, #a855f7, #f59e0b); /* Gradient border */
  }
  
  .modal {
    position: relative;
    padding: 20px;
    border-radius: 5px;
    max-width: 100%; /* Adjust this to make the modal larger */
    max-height: 90%; /* Adjust this to make the modal larger */
    width: 800px; /* Fixed width for large size */
    height: 600px; /* Fixed height for large size */
    background: black;
    z-index: 1; /* Ensure the content is above the pseudo-element */
    overflow: auto; /* Enable scrolling if content overflows */
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white; /* Ensure the close button is visible on a dark background */
    font-size: 16px;
    cursor: pointer;
  }
  
  .modal-content {
    margin-top: 20px;
    color: white; /* Ensure content is visible on a dark background */
  }
  </style>
  