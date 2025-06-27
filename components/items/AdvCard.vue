<template>
  <v-card class="bg-transparent mb-4">
    <v-img
      :src="image"
      contain
      height="250"
      class="rounded-lg"
    >
      <v-card-title class="text-subtitle-1 bg-yellow-lighten-4 opacity-50 text-black font-weight-bold pb-0">
        {{ title }}
      </v-card-title>
      <v-card-subtitle class="bg-yellow-lighten-4 opacity-50 text-black font-weight-bold">
        {{ subtitle }}
      </v-card-subtitle>
    </v-img>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: 'https://picsum.photos/id/7/400/250'
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