<template>
  <v-footer
    app
    class="d-flex justify-space-between align-center border-t-thin"
  >
    <FormIconRipple
      v-for="(menu, index) in footerMenu"
      :key="index"
      :menu="menu"
      @click.prevent="handleMenu(menu.page)"
    />
  </v-footer>
  <ItemsCategoryDialog
    v-model:category-dialog="categoryDialog"
  />
</template>
<script setup lang="ts">
const footerMenu = [
  { icon: 'mdi-wallet-giftcard', to: { name: 'shop' }, page: 'shop', size: 'x-large', color: 'primary' },
  { icon: 'mdi-heart-outline', to: { name: 'wishlist' }, page: 'wishlist', size: 'x-large', color: 'primary' },
  { icon: 'mdi-list-box-outline', page: 'category', size: 'x-large', color: 'primary' },
  { icon: 'mdi-shopping-outline', to: { name: 'cart' }, page: 'cart', size: 'x-large', color: 'primary' },
  { icon: 'mdi-account-circle-outline', to: { name: 'profile' }, page: 'profile', size: 'x-large', color: 'primary' },
];

const categoryDialog = ref(false);
const searchQuery = useSearchQuery();

function handleMenu(page: string) {
  if (page === 'category') {
    categoryDialog.value = true;
    return;
  }

  if (page === 'shop') {
    searchQuery.value = {
      categories: [],
      subCategories: [],
      priceRange: [1, 100],
      size: 0,
      color: '',
      quickSearch: ''
    };
  }
}
</script>