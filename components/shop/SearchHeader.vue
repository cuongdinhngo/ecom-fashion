<template>
  <v-card elevation="0"  class="bg-transparent">
    <v-card-title class="d-flex justify-space-between align-center ma-0 pa-0">
      <span class="text-h5 font-weight-bold">Shop</span>
      <div class="search-bar">
        <v-text-field
          v-model="searchQuery"
          placeholder="Search"
          hide-details
          variant="solo-filled"
          flat
          rounded="pill"
          width="300"
        >
          <template #append-inner>
            <v-icon color="primary">mdi-camera-outline</v-icon>
          </template>
        </v-text-field>
      </div>
    </v-card-title>
  </v-card>
</template>
<script setup lang="ts">
const searchQuery = ref<string>('');
</script>