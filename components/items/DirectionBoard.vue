<template>
  <v-list class="rounded-lg" :lines="false">
    <v-list-item>
      <template #title>
        <h4>{{ title }}</h4>
      </template>
      <template #subtitle>
        <p class="text-caption text-wrap">{{ description }}</p>
      </template>
      <template #append>
        <v-btn
          size="x-small"
          icon="mdi-chevron-right"
          variant="flat"
          color="primary"
          :to="to"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Anouncement'
  },
  description: {
    type: String,
    default: ''
  },
  to: {
    type: [String, Object],
    default: () => ({ name: 'index' })
  }
});
</script>