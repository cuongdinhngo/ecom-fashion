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
  <v-card-text class="pa-0">
    <ItemsWishlistCard
      v-for="i in 5"
      :key="i"
    />
  </v-card-text>

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
</style>