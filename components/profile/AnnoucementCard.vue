<template>
  <ProfileRewardCard
    :type="announcement.type"
  ></ProfileRewardCard>
</template>
<script setup lang="ts">
const announcement = {
  type: getRandomElement(['new-reward', 'expire-reward']),
}
</script>