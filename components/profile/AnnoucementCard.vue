<template>
  <ProfileRewardCard
    :type="announcement.type"
  ></ProfileRewardCard>
</template>
<script setup lang="ts">
import { fa, faker } from '@faker-js/faker';

const announcement = {
  type: faker.helpers.arrayElement(['new-reward', 'expire-reward']),
}
</script>