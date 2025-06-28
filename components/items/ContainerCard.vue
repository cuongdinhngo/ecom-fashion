<template>
  <v-card class="elevation-0 bg-transparent my-3">
    <!-- Card Header -->
    <v-card-title
      v-if="!hiddenHeader"
      class="d-flex justify-space-between px-0"
    >
      <!-- Header Left -->
      <div class="header-left">
        <slot name="header-left"></slot>
      </div>

      <!-- Header Center -->
      <div class="header-right">
        <slot name="header-right"></slot>
      </div>
    </v-card-title>

    <!-- Card Content -->
    <v-card-text class="d-flex justify-space-between px-0">
      <slot />
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  hiddenHeader: {
    type: Boolean,
    default: false
  }
});
</script>