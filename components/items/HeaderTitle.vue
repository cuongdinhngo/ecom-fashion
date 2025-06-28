<template>
  <span class="text-h6 font-weight-bold d-flex align-center">
    {{ title }}
    <v-icon :color="icon?.color" :size="icon?.size" class="ml-2">{{ icon?.name }}</v-icon>
  </span>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Header Title'
  },
  icon: {
    type: Object,
    default: () => ({ name: null, color: null, size: null })
  }
});
</script>