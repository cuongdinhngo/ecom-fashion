<template>
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
</template>
<script setup lang="ts">
const recentlyViews = Array.from({ length: 5 }, (_, index) => ({
  avatar: smallProductImg(),
  to: { name: 'product-id', params: { id: index + 1 } }
}));
</script>