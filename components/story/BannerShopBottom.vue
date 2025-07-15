<template>
  <StoryCard>
    <div class="d-flex justify-center align-center mb-2 product-photo">
      <v-img
        :src="'https://picsum.photos/seed/44/600/850'"
        height="100%"
        width="600"
        cover
        aspect-ratio="16/9"
        class="rounded-lg"
      ></v-img>
    </div>
    <v-card-title class="pa-0 mb-4 banner">
      <v-img
        :src="'https://picsum.photos/seed/11/600/200'"
        height="100%"
        width="600"
        cover
        aspect-ratio="16/9"
        class="rounded-lg"
      ></v-img>
    </v-card-title>
    <v-card-actions
      class="pa-0 ma-0 d-flex justify-space-between align-center elevation-0"
    >
      <p class="text-caption subtitle-two-lines">
        Discover the enlightened new Towels with an exciting mix of Ceramic ingredients. New sky blue Chips with ergonomic design for gripping comfort
      </p>
      <v-btn color="primary" variant="flat" class="text-none" width="30%" rounded="lg" @click="navigateTo({ name: 'shop' })">Shop</v-btn>
    </v-card-actions>
  </StoryCard>
</template>
<script setup lang="ts">

</script>

<style scoped>

</style>