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
        <v-img
          :src="banner.image"
          height="300px"
          width="100%"
          cover
          class="rounded-lg"
        >
          <div class="content-wrapper">
            <v-card-title class="bg-amber-lighten-4 opacity-50 font-weight-bold px-2">{{ banner.title }}</v-card-title>
            <v-card-subtitle class="bg-amber-lighten-4 opacity-50 font-weight-bold px-2">{{ banner.description }}</v-card-subtitle>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

const banners = Array.from({ length: 4 }, () => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: bannerImg(),
  };
});
</script>
<style scoped>
.content-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>