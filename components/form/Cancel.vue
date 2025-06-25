<template>
  <v-list-item class="text-black">
    <template #title>
      <v-btn
        variant="text"
        class="text-subtitle-2"
        :to="to"
      >{{ title }}</v-btn>
    </template>
  </v-list-item>
</template>
<script setup lang="ts">
const props = defineProps({
  to: {
    type: [String, Object],
    default: () => ({ name: 'index' })
  },
  title: {
    type: String,
    default: 'Cancel'
  }
});
</script>