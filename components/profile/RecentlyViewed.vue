<template>
  <ItemsTopDataCard title="Recently Viewed">
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
import { faker } from '@faker-js/faker';

const recentlyViews = Array.from({ length: 5 }, (_, index) => ({
  name: faker.person.fullName(),
  avatar: avatarImg(),
  to: { name: 'product-id', params: { id: index + 1 } }
}));
</script>