<template>
  <StoryCard>
    <div class="d-flex justify-center align-center mb-4 container">
      <v-img
        :src="'https://picsum.photos/seed/55/600/1150'"
        height="100%"
        width="600"
        cover
        aspect-ratio="16/9"
        class="rounded-lg"
      >
        <v-list-item width="100%" class="shop">
          <div class="d-flex align-center bg-white pa-2 rounded-lg">
            <v-img
              :src="'https://picsum.photos/seed/66/200/150'"
              height="100%"
              width="180"
              cover
              aspect-ratio="16/9"
              class="rounded-lg"
            ></v-img>

            <div class="ml-2">
              <p class="subtitle-two-lines text-caption">
                The Sedrick Chicken is the latest in a series of inexperienced products from Gibson, Veum and Wiza. New Tuna model with 45 GB RAM, 428 GB storage, and icy features
              </p>
              <v-card-text class=""></v-card-text>
              <v-card-text class=""></v-card-text>
              <v-btn color="primary" variant="flat" class="text-none" width="100%" rounded="lg" @click="navigateTo({ name: 'shop' })">Shop</v-btn>
            </div>
          </div>
        </v-list-item>
      </v-img>
    </div>
  </StoryCard>
</template>
<script setup lang="ts">

</script>

<style scoped>
.container {
  position: relative;
}

.shop {
  position: absolute;
  bottom: 10px;
}
</style>