<template>
  <v-card min-height="100vh" class="ma-0 pa-0 elevation-0 bg-transparent">
    <!-- Greeting -->
    <v-card-title class="text-h5 font-weight-bold px-0">
      Hello, Kitty!
    </v-card-title>

    <!-- Anouncement -->
    <ProfileAnnoucementCard />

    <!-- Recently Viewed Items -->
    <ProfileRecentlyViewed />

    <!-- Stories -->
    <ShopStories />

    <!-- New Items -->
    <ShopNewItems />

    <!-- Most Popular Items -->
    <ShopMostPopular />

    <!-- Categories -->
    <ShopCategories />

    <!-- Flash Sale -->
    <ShopFlashSale />

    <!-- Top Products -->
    <ShopTopProducts />

    <!-- Just For You -->
    <ProfileJustForYou />
  </v-card>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'profile',
  title: 'Profile Page',
  meta: [
    { name: 'description', content: 'This is the profile page.' },
    { name: 'keywords', content: 'profile, user, mango' }
  ]
});

</script>