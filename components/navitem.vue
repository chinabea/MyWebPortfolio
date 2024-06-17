<template>
  <li><a href="#" class="hover:text-pink-500">{{ name }}</a></li>
</template>

<script lang="ts" setup>
const props = defineProps<{ name: string }>()
</script>

<style scoped>
/* Add your styles here */
</style>
