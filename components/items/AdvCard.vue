<template>
  <v-card class="bg-transparent mb-4">
    <v-img
      :src="image"
      contain
      height="250"
      class="rounded-lg"
    >
      <v-card-title class="bg-yellow-lighten-4 opacity-50 text-black">
        <p class="text-subtitle-1 font-weight-bold">{{ title }}</p>
        <p class="text-caption">{{ subtitle }}</p>
      </v-card-title>
    </v-img>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
defineProps({
  image: {
    type: String,
    default: `https://picsum.photos/id/${ faker.number.int({ min: 1, max: 1000 }) }/400/250`
  },
  title: {
    type: String,
    default: 'Big Sale'
  },
  subtitle: {
    type: String,
    default: 'Up to 50%! Happening Now!'
  }
});
</script>