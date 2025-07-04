<template>
  <ProfileNewsCard
    v-if="announcement.type === 'news'"
    title="Announcement"
    description="Check out the latest updates and features. We have some exciting new features coming soon!"
    :to="{ name: 'index' }"
  ></ProfileNewsCard>

  <ProfileRewardCard
    v-else-if="announcement.type === 'new-reward' || announcement.type === 'expire-reward'"
    :type="announcement.type"
  ></ProfileRewardCard>
</template>
<script setup lang="ts">
import { fa, faker } from '@faker-js/faker';

const announcement = {
  type: faker.helpers.arrayElement(['news', 'new-reward', 'expire-reward']),
}
</script>