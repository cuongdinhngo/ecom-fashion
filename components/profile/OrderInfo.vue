<template>
  <div class="order-detail ml-4">
    <v-card-title class="d-flex justify-space-between align-center py-0 px-0">
      <span class=" text-subtitle-1 font-weight-bold">Order #{{ order.orderNumber }}</span>
      <v-chip label size="small" class="bg-grey-lighten-5">{{ order.quantity }} items</v-chip>
    </v-card-title>
    <v-card-title class="py-0 px-0 text-subtitle-1">{{ order.delivery }}</v-card-title>

    <v-card-title class="d-flex justify-space-between align-end py-0 px-0 mt-2">
      <span class="text-h6 font-weight-bold d-flex align-center">
        {{ order.status }}
        <v-btn
          v-if="order.status === 'Delivered'"
          icon
          color="primary"
          size="25"
          variant="flat"
          class="ml-2"
        >
          <v-icon size="15">mdi-check-bold</v-icon>
        </v-btn>
      </span>
      <v-btn
        v-if="order.status === 'Delivered'"
        color="primary"
        variant="outlined"
        class="text-none rounded-lg"
        width="40%"
        @click="openOrdersDialog(); orderToReview = order"
      >Review</v-btn>
      <v-btn
        v-else
        color="primary"
        variant="flat"
        class="text-none rounded-lg"
        width="40%"
        :to="{ name: 'profile-track-order' }"
      >Track</v-btn>
    </v-card-title>
  </div>
</template>
<script setup lang="ts">
defineProps({
  order: {
    type: Object as () => Order,
    required: true,
  },
});

import type { Order } from '@/composables/useOrders';

const { ordersDialog, openOrdersDialog, orderToReview } = inject('ordersDialog');
</script>