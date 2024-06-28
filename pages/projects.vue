<template>
  <div class="black-background relative z-10">
    <Navbar />
  </div>
    <div class="mt-8"></div>
  <div class="projects-grid">
    <div class="project-card">
      <img v-bind:src="logoPath" alt="Project 1">
      <div class="overlay">
        <h3>Project 1</h3>
        <p>A short description of Project 1.</p>
      </div>
    </div>
    <div class="project-card">
      <img v-bind:src="logoPath" alt="Project 1">
      <div class="overlay">
        <h3>Project 1</h3>
        <p>A short description of Project 1.</p>
      </div>
    </div>
    <div class="project-card">
      <img v-bind:src="logoPath" alt="Project 1">
      <div class="overlay">
        <h3>Project 1</h3>
        <p>A short description of Project 1.</p>
      </div>
    </div>
    <!-- Repeat for other projects -->
  </div>
<!-- </div> -->
</template>

<script lang="ts" setup>
import logoPath from "@/assets/images/projects/RPIMTS-Dashboard.png";

</script>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  position: relative;
  overflow: hidden;
}

.project-card img {
  width: 100%;
  height: auto;
  transition: transform 0.3s;
}

.project-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-card:hover .overlay {
  opacity: 1;
}

</style>
