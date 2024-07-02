<template>
  <div class="black-background relative z-10">
    <Navbar />
  </div>
  <div class="flex flex-wrap gap-4">
    <CardComponent
      title="The simplest example is kafka + golang"
      description="This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker"
      :imageSource="require('@/assets/images/projects/RPIMTS-Tracking.png')"
    />
    <CardComponent
      title="Another project title"
      description="This article discusses another interesting topic relevant to your projects"
      :imageSource="require('@/assets/images/projects/another-image.png')"
    />
    <CardComponent
      title="Yet another project title"
      description="This article introduces yet another fascinating project idea for you to explore"
      :imageSource="require('@/assets/images/projects/yet-another-image.png')"
    />
  </div>
</template>

<script>
import Navbar from '@/layout/navbar.vue';
import CardComponent from './CardComponent.vue';

export default {
  components: {
    Navbar,
    CardComponent,
  },
};
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
