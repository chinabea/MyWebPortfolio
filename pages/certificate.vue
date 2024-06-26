<template>
  <div class="black-background relative z-10">
    <Navbar />
  </div>
  <div class="mt-8"></div>
  <div class="projects-grid">
    <div class="project-card" v-for="(project, index) in projects" :key="index">
      <img :src="project.logoPath" :alt="project.title">
      <div class="overlay">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import logoPath1 from "@/assets/images/RPIMTS-Login.png";
import logoPath2 from "@/assets/images/RPIMTS-Projects.png";
import logoPath3 from "@/assets/images/RPIMTS-Tracking.png";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      projects: [
        { title: 'Project 1', description: 'A short description of Project 1.', logoPath: logoPath1 },
        { title: 'Project 2', description: 'A short description of Project 2.', logoPath: logoPath2 },
        { title: 'Project 3', description: 'A short description of Project 3.', logoPath: logoPath3 },
        // Add more projects with their respective images as needed
      ],
    };
  },
};
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
