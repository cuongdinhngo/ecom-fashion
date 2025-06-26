<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column wrapper"
    min-height="100vh"
  >
    <v-card-actions></v-card-actions>
    <v-carousel
      :continuous="true"
      :show-arrows="false"
      delimiter-icon="mdi-circle"
      color="primary"
      height="80vh"
      cycle
      class="mt-15"
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
import { WelcomeEnjoy, WelcomeHello, WelcomeLetGo, WelcomeReady } from '#components';

const slides = [
  WelcomeEnjoy,
  WelcomeHello,
  WelcomeLetGo,
  WelcomeReady
]
</script>

<style scoped>
.wrapper {
  background-image: url('/public/images/welcome-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>