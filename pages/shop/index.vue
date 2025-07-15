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
  <ShopSubCategoryList
    v-if="subCategories.length > 0"
    :subCategories="subCategories"
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

const queries = useRouteQuery('terms');
const searchQuery = useSearchQuery();

const { searchProducts, searchSubCategories, remapSubCategories } = useProducts();
const products = ref<Product[]>([]);
const subCategories = ref<any[]>([]);

watch(searchQuery, (newValue) => {
  console.log('Search Query Updated =>> ', newValue);
  if (newValue.categories.length > 0) {
    subCategories.value = searchSubCategories(newValue.categories);
    const remappedSubCategories = remapSubCategories(newValue);
    const newSearchQuery = { ...newValue, subCategories: remappedSubCategories };
    products.value = searchProducts(newSearchQuery);
  } else if (newValue.quickSearch) {
    subCategories.value = [];
    products.value = searchProducts(newValue);
  } else {
    products.value = [];
  }

  console.log('Filtered Products =>>> ', products.value.length);
}, { immediate: true, deep: true });

</script>