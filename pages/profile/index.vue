<template>
  <v-card min-height="100vh" class="ma-0 pa-0 elevation-0 bg-transparent">
    <!-- Greeting -->
    <v-card-title class="text-h5 font-weight-bold px-0">
      Hello, Kitty!
    </v-card-title>

    <!-- Anouncement -->
    <ItemsDirectionBoard
      title="Announcement"
      description="Check out the latest updates and features. We have some exciting new features coming soon!"
      :to="{ name: 'index' }"
    ></ItemsDirectionBoard>

    <!-- Recently Viewed Items -->
    <ProfileRecentlyViewed />

    <!-- My Orders -->
    <ProfileMyOrders />

    <!-- Stories -->
    <ShopStories />

    <!-- New Items -->
    <ShopNewItems />
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