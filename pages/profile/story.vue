<template>
  <v-card
    class="bg-transparent elevation-0 ma-0 pa"
  >
    <v-carousel
      :continuous="true"
      :show-arrows="false"
      delimiter-icon="mdi-circle"
      color="primary"
      height="89vh"
      cycle
      hideDelimiterBackground
    >
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
      >
        <component :is="slide"/>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>
<script setup lang="ts">
import { StoryBannerShopBottom, StoryDot, StoryShopBottom, StoryShopInner } from '#components';

const slides = [
  StoryDot,
  StoryShopBottom,
  StoryBannerShopBottom,
  StoryShopInner
]
</script>