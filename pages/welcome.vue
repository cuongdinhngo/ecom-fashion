<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column"
    min-height="100vh"
    tile
  >
    <v-card-actions></v-card-actions>
    <v-carousel
      :continuous="true"
      :show-arrows="false"
      delimiter-icon="mdi-circle"
      color="primary"
      height="80vh"
      cycle
      class="mt-15 elevation-0"
      hideDelimiterBackground
    >
      <v-carousel-item
        v-for="(slide, i) in slides" :key="i"
      >
        <component :is="slide" />
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fullview',
  title: 'Shoppe - Home',
  backgroundImage: '/images/welcome-bg.png',
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