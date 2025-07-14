<template>
  <v-sheet height="100%" class="bg-transparent elevation-0">
    <v-card-actions></v-card-actions>
    <v-carousel
      height="100%"
      hide-delimiter-background
      :show-arrows="false"
      color="primary"
      cycle
    >
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
      >
        <component :is="slide" />
      </v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fullview',
  title: 'Shoppe - Home',
  backgroundImage: 'welcome-bg.png',
  meta: [
    { name: 'description', content: 'Welcome to Shoppe, your online store for beautiful products.' },
    { name: 'keywords', content: 'eCommerce, online store, shopping, fashion' }
  ]
});

import { WelcomeEnjoy, WelcomeHello, WelcomeLetGo, WelcomeReady } from '#components';

const slides = [
  WelcomeEnjoy,
  WelcomeHello,
  WelcomeLetGo,
  WelcomeReady
]
</script>