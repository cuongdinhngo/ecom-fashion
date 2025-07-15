<template>
  <v-card-title class="px-0 d-flex justify-space-between align-center mb-5">
    <v-btn
      class="text-none elevation-0 rounded-pill"
      width="49%"
      variant="text"
      :color="type === 'active' ? 'primary' : 'grey'"
      :to="{ name: 'profile-voucher', query: { type: 'active' } }"
    >Active Rewards</v-btn>
    <v-btn
      class="text-none elevation-0 rounded-pill"
      width="49%"
      variant="text"
      :color="type === 'progress' ? 'primary' : 'grey'"
      :to="{ name: 'profile-voucher', query: { type: 'progress' } }"
    >Progress</v-btn>
  </v-card-title>

  <ItemsVoucherCard
    v-if="type === 'active'"
    v-for="(voucher, index) in vouchers"
    :key="index"
    :voucher="voucher"
  />
  <ProfileVoucherProgress
    v-if="type === 'progress'"
  />
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'profile',
  pageTitle: 'Vouchers',
});

const type = useRouteQuery('type', 'active');

const vouchers = ref([
  {
    title: 'First Purchase',
    description: 'off for your next order',
    value: '5',
    icon: 'mdi-ticket-percent',
    expiredDate: 'Jul 25th, 25'
  },
  {
    title: 'Summer Sale',
    description: 'off on all items',
    value: '10',
    icon: 'mdi-gift-outline',
    expiredDate: 'Aug 15th, 25'
  },
  {
    title: 'Loyalty Reward',
    description: 'off on your next purchase',
    value: '15',
    icon: 'mdi-star-outline',
    expiredDate: 'Jul 7th, 25'
  },
  {
    title: 'Birthday Special',
    description: 'off on your birthday month',
    value: '20',
    icon: 'mdi-cake-variant',
    expiredDate: 'Oct 10th, 25'
  }
]);
</script>
<style scoped>
</style>