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

  <v-dialog
    min-width="100%"
    scrollable
    v-model="ordersDialog"
  >
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span class="text-h5 font-weight-bold">To Review {{ `#${orderToReview?.orderNumber}` }}</span>
          <v-btn
            variant="text"
            size="small"
            icon
            @click="isActive.value = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <ProfileProductReivewCard
          v-for="item in orderToReview?.quantity"
        />

      </v-card>
    </template>
  </v-dialog>

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
const ordersDialog = ref(false);
const orderToReview = ref<Order | null>(null);

function openOrdersDialog() {
  ordersDialog.value = true;
  console.log('Opening orders dialog => ', orderToReview);
}

provide('ordersDialog', {
  ordersDialog,
  openOrdersDialog,
  orderToReview
});
</script>