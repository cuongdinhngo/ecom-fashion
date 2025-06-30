<template>
  <v-card-title class="text-h5 font-weight-bold px-1">
    Wishlist
  </v-card-title>

  <!-- Recently Viewed -->
  <v-card-text class="pa-0">
    <ItemsContainerCard>
      <template #header-left>
        <span class="text-h6 font-weight-bold">Recently Viewed</span>
      </template>
      <template #header-right>
        <v-btn
          variant="flat"
          size="x-small"
          icon="mdi-arrow-right"
          color="primary"
        >
        </v-btn>
      </template>
      <ItemsAvatar
        v-for="(item, index) in recentlyViews"
        :key="index"
        :avatar="item.avatar"
        :size="60"
        :frame-size="{ width: '75px', height: '70px' }"
      />
    </ItemsContainerCard>
  </v-card-text>

  <!-- Wishlist -->
  <v-card-text class="pa-0 wishlist-container">
    <ItemsWishlistCard
      v-for="i in 5"
      :key="i"
    />

    <!-- If wishlist is empty, it will be showed -->
    <!-- <v-btn
      variant="tonal"
      size="100"
      icon
      class="mx-auto"
    >
      <v-icon size="70">mdi-hand-heart-outline</v-icon>
    </v-btn> -->
  </v-card-text>

  <!-- If wishlist is empty, most popular list should be showed -->
  <!-- <ShopMostPopular /> -->

</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
const recentlyViews = [
  {
    avatar: smallProductImg(),
  },
  {
    avatar: smallProductImg(),
  },
  {
    avatar: smallProductImg(),
  },
  {
    avatar: smallProductImg(),
  },
  {
    avatar: smallProductImg(),
  },
];
</script>
<style scoped>
.frame {
  width: 160px;
  height: 160px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wishlist-container {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>