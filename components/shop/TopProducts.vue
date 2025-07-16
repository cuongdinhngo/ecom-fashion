<template>
  <ItemsTopDataCard title="Top Products">
    <ItemsAvatar
      v-for="(item, index) in recentlyViews"
      :key="index"
      :avatar="item.avatar"
      :size="60"
      :frame-size="{ width: '75px', height: '70px' }"
      @click="navigateTo(item.to)"
    />
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
const recentlyViews = [
  { name: 'Emma Johnson', avatar: categoryImg(), to: { name: 'product-id', params: { id: 1 } } },
  { name: 'Michael Chen', avatar: categoryImg(), to: { name: 'product-id', params: { id: 2 } } },
  { name: 'Sarah Wilson', avatar: categoryImg(), to: { name: 'product-id', params: { id: 3 } } },
  { name: 'David Brown', avatar: categoryImg(), to: { name: 'product-id', params: { id: 4 } } },
  { name: 'Lisa Garcia', avatar: categoryImg(), to: { name: 'product-id', params: { id: 5 } } },
];
</script>