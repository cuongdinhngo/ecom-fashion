<template>
  <ItemsTopDataCard title="Recently Viewed">
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
  avatar: avatarImg(),
}));
</script>