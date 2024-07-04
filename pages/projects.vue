<template>
  <div class="flex flex-wrap gap-4">
    <CardComponent
      title="The simplest example is kafka + golang"
      description="This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker"
      :imageSource="require('@/assets/images/projects/RPIMTS-Tracking.png')"
    />
    <CardComponent
      title="Another project title"
      description="This article discusses another interesting topic relevant to your projects"
      :imageSource="require('@/assets/images/projects/RPIMTS-Tracking.png')"
    />
    <CardComponent
      title="Yet another project title"
      description="This article introduces yet another fascinating project idea for you to explore"
      :imageSource="require('@/assets/images/projects/RPIMTS-Tracking.png')"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';

defineComponent({
  components: {
    CardComponent,
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
