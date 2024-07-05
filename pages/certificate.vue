<template>
  <div class="mt-8"></div>
  <div class="bg-background text-foreground min-h-screen p-8 flex flex-col items-center">
    <h1 class="text-4xl font-bold font-montserrat mb-4">Certificates.</h1>
    <div class="mb-8"></div>
  <div class="projects-grid">
    <div class="project-card" v-for="(project, index) in projects" :key="index">
      <img :src="project.logoPath" :alt="project.title" class="border-light-pink">
      <div class="overlay">
        <p>{{ project.title }}</p>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import certif1 from "@/assets/images/certificates/blockchain.jpg";
import certif2 from "@/assets/images/certificates/bycit1.png";
import certif3 from "@/assets/images/certificates/bycit2.png";
import certif4 from "@/assets/images/certificates/colloquium.jpg";
import certif5 from "@/assets/images/certificates/cybersecurity.jpg";
import certif6 from "@/assets/images/certificates/deanslist.jpg";
import certif7 from "@/assets/images/certificates/ojt.jpg";
import certif8 from "@/assets/images/certificates/python.jpg";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      projects: [
        { title: '', description: 'DICT - Blockchain: Fundamentals and Its Use Cases', logoPath: certif1 },
        { title: '', description: '11th Bicol Youth Congress in Information Technology', logoPath: certif2 },
        { title: '', description: '7th ICT Research Colloquium', logoPath: certif4 },
        { title: '', description: 'Cybersecurity: How to be Safe in Cyberspace', logoPath: certif5 },
        { title: '', description: 'Dean\'s List Award', logoPath: certif6 },
        { title: '', description: 'OJT - Certificate of Completion', logoPath: certif7 },
        { title: '', description: 'Learning Python Programming', logoPath: certif8 },
        { title: '', description: '11th Bicol Youth Congress in Information Technology', logoPath: certif3 },
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
  padding-left: 30px;
  padding-right: 30px;
}

.project-card {
  position: relative;
  overflow: hidden;
}

.project-card img {
  width: 100%;
  height: auto;
  transition: transform 0.3s;
  /* border: 5px solid #f9a8d4; Tailwind CSS color pink-300 */
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