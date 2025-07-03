<template>
  <v-card
    flat
    :class="['d-flex bg-white py-3 px-2']"
    :style="{ border: isSelected ? '1px solid #004CFF' : '' }"
  >
    <v-row no-gutters>
      <v-col cols="4" class="pa-0 elevation-2 rounded-lg">
        <!-- Image List -->
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
      </v-col>
      <v-col cols="8" class="">
        <v-card tile class="elevation-0 ml-2 bg-transparent">
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
              v-if="selectable"
              color="primary"
              :variant="isSelected ? 'flat' : 'outlined'"
              class="text-none rounded-lg"
              width="40%"
            >{{ isSelected ? 'Selected' : 'Select' }}</v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  selectable: {
    type: Boolean,
    default: false
  }
});

console.log('OrderCard props:', props.order);
</script>