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
          :to="{ name: 'wishlist-recently-viewed' }"
        >
        </v-btn>
      </template>
      <ItemsAvatar
        v-for="(item, index) in recentlyViews"
        :key="index"
        :avatar="item.avatar"
        :size="60"
        :frame-size="{ width: '75px', height: '70px' }"
        @click="navigateTo({ name: 'product-id', params: { id: index + 1 } })"
      />
    </ItemsContainerCard>
  </v-card-text>

  <!-- Wishlist -->
  <v-card-text :class="['pa-0', {'blank-container': wishlistItems.length === 0}]">
    <ItemsWishlistCard
      v-if="wishlistItems.length"
      v-for="item in wishlistItems"
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
    v-if="wishlistItems.length === 0"
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

const { wishlist } = useWishlist();
const { products } = useProducts();

const wishlistItems = computed(() => {
  return products.filter(product => wishlist.value.includes(product.id));
});

watch(wishlistItems, (newWishlist) => {
  console.log('wishlistItems => ', newWishlist);
}, { immediate: true });

watch(wishlist, (newWishlist) => {
  console.log('Wishlist => ', newWishlist);
}, { immediate: true });
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