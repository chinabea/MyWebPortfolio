<template>
  <div class="bg-card text-card-foreground rounded-lg shadow-lg flex w-full md:w-1/2 lg:w-1/3 overflow-hidden">
    <img :src="imageSource" alt="abstract art" class="w-1/2 object-cover">
    <div class="p-4 flex flex-col justify-between w-1/2">
      <div>
        <h3 class="text-xl font-bold font-montserrat">{{ title }}</h3>
        <p class="text-muted-foreground mt-2">{{ description }}</p>
      </div>
      <div class="flex items-center mt-4">
        <button class="bg-primary text-white hover:bg-primary/80 px-4 py-2 rounded-full">Read more</button>
        <button class="ml-2 bg-secondary text-white hover:bg-secondary/80 p-2 rounded-full">
          <img aria-hidden="true" alt="arrow" src="https://openui.fly.dev/openui/24x24.svg?text=→" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    imageSource: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.bg-card {
  background-color: #f3f4f6; /* Example background color */
}

.text-card-foreground {
  color: #333; /* Example text color */
}

.text-muted-foreground {
  color: #999; /* Example muted text color */
}

.bg-primary {
  background-color: #3490dc; /* Example primary background color */
}

.bg-secondary {
  background-color: #ffed4a; /* Example secondary background color */
}

.text-white {
  color: #fff; /* Example white text color */
}

.rounded-full {
  border-radius: 9999px; /* Full border radius for rounded buttons */
}

.p-2 {
  padding: 0.5rem; /* Example padding */
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem; /* Example horizontal padding */
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem; /* Example vertical padding */
}

.mt-2 {
  margin-top: 0.5rem; /* Example margin top */
}

.mt-4 {
  margin-top: 1rem; /* Example margin top */
}

.hover\:bg-primary\/80:hover {
  background-color: rgba(52, 144, 220, 0.8); /* Example hover background color */
}

.hover\:bg-secondary\/80:hover {
  background-color: rgba(255, 237, 74, 0.8); /* Example hover background color */
}
</style>
