<template>
  <v-footer
    app
    class="d-flex justify-space-between align-center border-t-thin"
  >
    <FormIconRipple
      v-for="(menu, index) in footerMenu"
      :key="index"
      :menu="menu"
    />
  </v-footer>
</template>
<script setup lang="ts">
const footerMenu = [
  { icon: 'mdi-wallet-giftcard', to: { name: 'shop' }, page: 'shop', size: 'x-large', color: 'primary' },
  { icon: 'mdi-heart-outline', to: { name: 'index' }, page: 'index', size: 'x-large', color: 'primary' },
  { icon: 'mdi-list-box-outline', to: { name: 'index' }, page: 'index', size: 'x-large', color: 'primary' },
  { icon: 'mdi-shopping-outline', to: { name: 'index' }, page: 'index', size: 'x-large', color: 'primary' },
  { icon: 'mdi-account-circle-outline', to: { name: 'profile' }, page: 'profile', size: 'x-large', color: 'primary' },
];
</script>