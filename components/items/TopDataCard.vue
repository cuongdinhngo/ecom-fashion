<template>
  <v-card class="elevation-0 bg-transparent my-3">
  <v-card-title class="d-flex justify-space-between px-0">
    <span class="text-h6 font-weight-bold d-flex align-center">
      {{ title }}
      <v-icon :color="icon?.color" :size="icon?.size" class="ml-2">{{ icon?.name }}</v-icon>
    </span>
    <div
      v-if="seeAll"
      class="d-flex align-center"
    >
      <span class="text-subtitle-1 font-weight-bold mr-2">See All</span>
      <v-btn
        icon
        variant="flat"
        color="primary"
        size="x-small"
      ><v-icon size="x-large">mdi-arrow-right-thin</v-icon>
      </v-btn>
    </div>
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
  },
  seeAll: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Object,
    default: () => ({ name: null, color: null, size: null })
  }
});
</script>