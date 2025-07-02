<template>
  <v-card-title class="px-1">
    <v-slider
      :max="2"
      :ticks="milestones"
      :model-value="step"
      prepend-icon="mdi-shopping-outline"
      append-icon="mdi-home-account"
      show-ticks="always"
      tick-size="5"
      :color="attempToDeliver ? 'error' : 'primary'"
      readonly
      elevation="5"
    ></v-slider>
  </v-card-title>
</template>
<script lang="ts" setup>
defineProps({
  step: {
    type: Number,
    default: 0,
  },
  attempToDeliver: {
    type: Boolean,
    default: true,
  },
})
const milestones = {
  0: 'Shop',
  1: 'Shipping',
  2: 'You',
}
</script>
<style>
.v-slider-track__tick {
  border-radius: 50% !important;
}
</style>