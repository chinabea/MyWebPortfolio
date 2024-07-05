<template>
  <div class="mt-8"></div>
  <div class="bg-background text-foreground min-h-screen p-8 flex flex-col items-center">
    <h1 class="text-4xl font-bold font-montserrat mb-4">Projects.</h1>
    <div class="mb-8"></div>
    <div class="flex flex-wrap gap-4">
        <CardComponent
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :description="project.description"
            :imageSource="projectImage"
        />
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';
import projectImage from '@/assets/images/projects/RPIMTS-Tracking.png';

export default defineComponent({
    components: {
        CardComponent,
    },
    data() {
        return {
            projectImage,
            projects: [
                {
                    title: "The simplest example is kafka + golang",
                    description: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker"
                },
                {
                    title: "The simplest example is kafka + golang",
                    description: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker"
                },
                {
                    title: "The simplest example is kafka + golang",
                    description: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker"
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
.gap-4 {
  gap: 1rem;
}
</style>
