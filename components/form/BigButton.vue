<template>
  <v-btn
    color="primary"
    variant="flat"
    class="text-none rounded-xl"
    width="100%"
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
  }
});
</script>