<template>
  <v-card
    tile
    height="93%"
    width="90%"
    class="mx-auto rounded-xl text-center text-black elevation-10"
  >
    <div class="d-flex justify-center align-center">
      <v-img
        :src="data.image || 'https://picsum.photos/600/600'"
        height="100%"
        class="rounded-t-xl"
      ></v-img>
    </div>
    <v-card-title class="text-h4 font-weight-bold mt-5 mb-3">
      {{ data.slogon || 'Welcome' }}
    </v-card-title>
    <v-card-text class="text-center text-h6">
      {{ data.description || 'Welcome to our application! We are excited to have you here. Let\'s get started on your journey.' }}
    </v-card-text>
    <v-card-actions class="justify-center">
      <slot name="action"></slot>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>