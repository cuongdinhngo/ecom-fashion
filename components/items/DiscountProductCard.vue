<template>
  <v-card class="elevation-0 bg-transparent my-3">
  <v-card-title class="d-flex justify-space-between px-0">
    <span class="text-h6 font-weight-bold d-flex align-center">
      {{ discount === 'all' ? 'All Discount Items' : `${discount}% Discount` }}
    </span>
    <div
      class="d-flex align-center"
    >
      <v-btn
        icon
        variant="text"
        size="x-small"
      ><v-icon size="x-large">mdi-tune-vertical</v-icon>
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
  discount: {
    type: [Number, String],
    default: 20
  }
});
</script>