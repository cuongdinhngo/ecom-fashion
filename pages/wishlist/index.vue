<template>
  <v-card-title class="text-h5 font-weight-bold px-1">
    Wishlist
  </v-card-title>

  <!-- Recently Viewed -->
  <ProfileRecentlyViewed
  />

  <!-- Wishlist -->
  <v-card-text :class="['pa-0', {'blank-container': items.length === 0}]">
    <ItemsWishlistCard
      v-if="items.length"
      v-for="item in items"
      :key="item.id"
      :product="item"
    />

    <!-- If wishlist is empty, it will be showed -->
    <v-btn
      v-else
      variant="tonal"
      size="100"
      icon
      class="mx-auto"
    >
      <v-icon size="70" color="primary">mdi-hand-heart-outline</v-icon>
    </v-btn>
  </v-card-text>

  <!-- If wishlist is empty, most popular list should be showed -->
  <ShopMostPopular
    v-if="items.length === 0"
  />

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

const { wishlistItems } = useWishlist();
const { products } = useProducts();

const items = computed(() => {
  return products.filter(product => {
    return wishlistItems.value.some(item => item.productId === product.id);
  });
});

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