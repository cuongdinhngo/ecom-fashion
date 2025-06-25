<template>
  <v-btn
    :color="color"
    variant="flat"
    class="text-none rounded-xl"
    :width="width"
    size="x-large"
    :to="to"
  >
    <span class="btn-text">{{ title }}</span>
  </v-btn>
</template>
<script setup lang="ts">
const props = defineProps({
  to: {
    type: [String, Object],
    default: () => ({ name: 'index' })
  },
  title: {
    type: String,
    default: 'Done'
  },
  color: {
    type: String,
    default: 'primary'
  },
  width: {
    type: [String, Number],
    default: '100%'
  }
});
</script>