<template>
  <div class="mt-8"></div>
  <div class="bg-background text-foreground min-h-screen p-8 flex flex-col items-center">
    <h1 class="text-4xl font-bold font-montserrat mb-4">Skills.</h1>
    <p class="text-muted-foreground mb-8 text-center">
      <!-- If you already know what you're looking for, Laracasts is divided into various topics ranging from frameworks to packages to tools. -->
    </p>
    <!-- <div class="flex space-x-4 mb-4 justify-center">
      <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md">All</button>
      <button class="text-muted-foreground px-4 py-2">DevOps</button>
      <button class="text-muted-foreground px-4 py-2">Frameworks</button>
      <button class="text-muted-foreground px-4 py-2">Languages</button>
      <button class="text-muted-foreground px-4 py-2">Techniques</button>
      <button class="text-muted-foreground px-4 py-2">Testing</button>
      <button class="text-muted-foreground px-4 py-2">Tooling</button>
    </div> -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="topic in topics" :key="topic.name" class="bg-card text-card-foreground p-4 rounded-md flex items-center space-x-4">
        <img :src="topic.image" :alt="topic.alt" class="w-10 h-10" />
        <div>
          <h2 class="font-semibold font-montserrat">{{ topic.name }}</h2>
          <!-- <p class="text-muted-foreground text-sm">{{ topic.series }} Series • {{ topic.videos }} Videos</p> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      topics: [
        { name: 'Git', image: 'https://laracasts.com/images/topics/icons/git-logo.svg?v=4', alt: 'Git logo' },
        { name: 'MySQL', series: 3, videos: 29, image: 'https://laracasts.com/images/topics/icons/mysql-logo.svg?v=4', alt: 'MySQL logo' },
        { name: 'Nuxt', series: 13, videos: 165, image: 'https://laracasts.com/images/topics/icons/nuxtjs-logo.svg?v=4', alt: 'MySQL logo' },
        { name: 'CSS', series: 13, videos: 165, image: 'https://laracasts.com/images/topics/icons/css-logo.svg?v=4', alt: 'CSS logo' },
        { name: 'JavaScript', series: 13, videos: 165, image: 'https://laracasts.com/images/topics/icons/js-logo.svg?v=4', alt: 'JavaScript logo' },
        { name: 'Laravel', series: 13, videos: 165, image: 'https://laracasts.com/images/topics/icons/laravel-logo.svg?v=4', alt: 'Laravel logo' },
        { name: 'PHP', series: 13, videos: 165, image: 'https://laracasts.com/images/topics/icons/php-logo.svg?v=4', alt: 'PHP logo' },
        { name: 'Tailwind', series: 13, videos: 165, image: 'https://laracasts.com/images/topics/icons/tailwind-logo.svg?v=4', alt: 'Tailwind logo' },
        // { name: 'Visual Studio Code', series: 13, videos: 165, image: 'https://laracasts.com/images/topics/icons/visualstudio-logo.svg?v=4', alt: 'Visual Studio Code logo' },
        { name: 'Vue', series: 13, videos: 165, image: 'https://laracasts.com/images/topics/icons/vue-logo.svg?v=4', alt: 'Vue logo' },
        {
          name: 'GitHub',
          series: 13,
          videos: 165,
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
          alt: 'GitHub logo'
        },
        {
          name: 'C++',
          series: 13,
          videos: 165,
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
          alt: 'C++ logo'
        },
        {
          name: 'Google Login API',
          series: 13,
          videos: 165,
          image: 'https://developers.google.com/identity/images/g-logo.png',
          alt: 'Google Login API logo'
        },
        {
          name: 'Gmail API',
          series: 13,
          videos: 165,
          image: 'https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png',
          alt: 'Gmail API logo'
        },
        {
          name: 'Bootstrap',
          series: 13,
          videos: 165,
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
          alt: 'Bootstrap logo'
        },
        {
          name: 'React Native',
          series: 13,
          videos: 165,
          image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
          alt: 'React Native logo'
        }

      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
