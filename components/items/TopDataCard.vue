<template>
  <v-card class="elevation-0 bg-transparent my-3">
  <v-card-title class="text-h6 font-weight-bold px-0">
    {{ title }}
  </v-card-title>
  <v-card-text class="d-flex justify-space-between px-0">
    <slot />
  </v-card-text>
</v-card>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Top Data'
  }
});
</script>