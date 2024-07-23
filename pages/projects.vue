<template>
    <div class="mt-8"></div>
    <div class="bg-background text-foreground min-h-screen p-8 flex flex-col items-center">
      <h1 class="text-4xl font-bold font-montserrat mb-4">Projects.</h1>
      <!-- <div class="mb-4"></div> -->
      <div class="flex flex-wrap justify-center gap-4 w-full">
        <CardComponent
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :imageSource="project.image"
          :githubLink="project.githubLink"
          class="card"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import CardComponent from './CardComponent.vue';
  import RPIMTSImage from '@/assets/images/projects/RPIMTS-Dashboard.png';
  import GratiNoteImage from '@/assets/images/projects/GratiNote.png';
  
  export default defineComponent({
    components: {
      CardComponent,
    },
    data() {
      return {
        projects: [
          {
            title: "Research Project Information Management and Tracking System (RPIMTS) Dashboard",
            description: "A project that involves tracking and managing various research projects.",
            image: RPIMTSImage,
            githubLink: "https://github.com/chinabea/AIRCoDe-RPIMTS"
          },
          {
            title: "GratiNote",
            description: "An application to keep track of notes and gratitude journal entries.",
            image: GratiNoteImage,
            githubLink: "https://github.com/chinabea/GratiNote-App"
          },
        ],
      };
    },
  });
  </script>
  
  <style>
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-4 {
    gap: 1rem;
  }
  .card {
    width: calc(50% - 2rem); /* Adjust card width to fit two cards per row with equal spacing */
    margin: 1rem; /* Equal margins on all sides */
  }
  .card img {
    transition: transform 0.3s ease;
  }
  .card:hover img {
    transform: scale(1.1); /* Adjust scale value as needed */
  }
  </style>
  