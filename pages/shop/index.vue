<template>
  <!-- Shop Banner -->
  <ShopBanner
    v-if="products.length === 0"
  />

  <!-- Shop Categories -->
  <ShopCategories
    v-if="products.length === 0"
    :quantity="6"
  />

  <!-- Shop Products -->
  <ShopTopProducts
    v-if="products.length === 0"
  />

  <!-- Shop New Items -->
  <ShopNewItems
    v-if="products.length === 0"
  />

  <!-- Shop Flash Sale -->
  <ShopFlashSale
    v-if="products.length === 0"
  />

  <!-- Shop Most Popular -->
  <ShopMostPopular
    v-if="products.length === 0"
  />

  <!-- Shop Just For You -->
  <ProfileJustForYou
    v-if="products.length === 0"
  />

  <!-- Relative List -->
  <ShopRelativeList
    v-if="relatives.length > 0"
    :relatives="relatives"
  />

  <!-- Product List -->
  <ShopProductList
    v-if="products.length > 0"
    :products="products"
  />
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'shop'
});

import type { Product } from '@/composables/useProducts';

const searchQuery = useSearchQuery();

const { SEARCH_TERMS, CATEGORIES, searchProducts, searchRelatives } = useProducts();
const products = ref<Product[]>([]);
const relatives = ref<any[]>([]);

watch(searchQuery, (newValue) => {
  console.log('Search Query Updated:', newValue);
  relatives.value = searchRelatives(newValue);
  console.log('Filtered Relatives:', relatives.value);
  products.value = searchProducts(newValue);
  console.log('Filtered Products:', products.value);
}, { immediate: true });
</script>