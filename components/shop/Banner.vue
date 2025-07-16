<template>
  <v-card class="mt-5 bg-transparent elevation-0" max-height="400px">
    <v-carousel
      :continuous="true"
      :show-arrows="false"
      delimiter-icon="mdi-circle"
      color="primary"
      cycle
      hideDelimiterBackground
      height="350px"
    >
      <v-carousel-item
        v-for="(banner, i) in banners" :key="i"
      >
        <v-responsive aspect-ratio="4/3">
          <v-img
            :src="banner.image"
            cover
            class="rounded-lg"
          >
            <div class="content-wrapper">
              <v-card-title class="bg-amber-lighten-4 opacity-50 font-weight-bold px-2">{{ banner.title }}</v-card-title>
              <v-card-subtitle class="bg-amber-lighten-4 opacity-50 font-weight-bold px-2">{{ banner.description }}</v-card-subtitle>
            </div>
          </v-img>
        </v-responsive>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
<script setup lang="ts">
// Static data to prevent memory leaks - replaced faker.js calls

const banners = [
  {
    title: 'Summer Collection',
    description: 'Discover our latest summer fashion trends and styles.',
    image: productImg(),
  },
  {
    title: 'Winter Sale',
    description: 'Get up to 50% off on all winter clothing and accessories.',
    image: productImg(),
  },
  {
    title: 'New Arrivals',
    description: 'Check out our newest arrivals in fashion and lifestyle.',
    image: productImg(),
  },
  {
    title: 'Best Sellers',
    description: 'Shop our most popular items loved by customers.',
    image: productImg(),
  },
];
</script>
<style scoped>
.content-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>