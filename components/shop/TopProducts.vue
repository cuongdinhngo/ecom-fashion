<template>
  <ItemsTopDataCard title="Top Products">
    <ItemsAvatar
      v-for="(item, index) in recentlyViews"
      :key="index"
      :avatar="item.avatar"
      :size="60"
      :frame-size="{ width: '75px', height: '70px' }"
    />
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

const recentlyViews = Array.from({ length: 5 }, () => ({
  name: faker.person.fullName(),
  avatar: 'https://picsum.photos/100/100?random=' + faker.number.int({ min: 10, max: 100 }),
}));
</script>