<template>
  <!-- 4 images -->
  <ProfileOrderCard
    v-for="(order, index) in orders"
    :key="index"
    :order="order"
  >
    <template #imgGrid>
      <ProfileFourImgGrid
        v-if="order.images && order.images.length >= 4"
      />
      <ProfileThreeImgGrid
        v-else-if="order.images && order.images.length === 3"
      />

      <ProfileTwoImgGrid
        v-else-if="order.images && order.images.length === 2"
      />

      <ProfileOneImgGrid
        v-else-if="order.images && order.images.length === 1"
      />
    </template>
  </ProfileOrderCard>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'profile',
  title: 'To Receive | My Orders',
  description: 'View your orders that are to be received.',
  pageTitle: 'To Receive',
  pageDetail: 'My Orders',
});

const { orders } = useOrders({ quantity: 5 });
</script>