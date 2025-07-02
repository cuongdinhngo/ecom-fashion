<template>
  <v-card class="my-4 bg-white" tile elevation="0">
    <v-card-title class="d-flex justify-space-between align-center px-0 pb-0">
      <span class="text-subtitle-1 font-weight-bold">{{ stepper.status }}</span>
      <v-chip label class="bg-grey-lighten-5" size="small">{{ stepper.timestamp }}</v-chip>
    </v-card-title>
    <v-card-text class="pa-0">
      <p class="text-subtitle-1">{{ stepper.description }}</p>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
defineProps({
  stepper: {
    type: Object,
    required: true,
  },
});
</script>