<template>
  <!-- Product photos -->
  <v-card class="bg-transparent elevation-0" max-height="400px" tile>
    <v-carousel
      :continuous="true"
      :show-arrows="false"
      delimiter-icon="mdi-circle"
      color="primary"
      cycle
      hideDelimiterBackground
      height="350px"
    >
      <v-carousel-item
        v-for="(image, i) in productImgs" :key="i"
      >
        <v-img
          :src="image"
          height="350px"
          width="100%"
          cover
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-card>

  <v-card min-height="100vh">
    <!-- Product Price -->
    <v-card-title class="d-flex justify-space-between pb-0">
      <div class="d-flex flex-column">
        <span class="text-h5 font-weight-bold">$20.59</span>
      </div>

      <div class="d-flex align-center">
        <SaleCountDown />
        <v-btn
          variant="tonal"
          icon="mdi-redo-variant"
          color="deep-orange-lighten-2"
          size="35"
          class="ml-2"
        ></v-btn>
      </div>
    </v-card-title>
    <v-card-title class="text-subtitle-1 py-0">
      <span class="text-red-lighten-3 text-decoration-line-through text-subtitle-2 font-weight-bold"> $30.00</span>
      <span class="discount-tag ml-2">-20%</span>
    </v-card-title>

    <!-- Product Description -->
    <v-card-title class="text-subtitle-1 text-wrap">
      {{ faker.commerce.productDescription() }}
    </v-card-title>

    <!-- Variations -->
    <v-card-title class="d-flex justify-space-between align-center">
      <div class="left d-flex align-center">
        <span class="text-h5 font-weight-bold">Variations</span>
        <div class="selected-options ml-3">
          <v-chip
            v-for="(option, i) in ['Color', 'Size']" :key="i"
            class="ma-1"
            variant="tonal"
            label
          >
            {{ option }}
          </v-chip>
        </div>
      </div>

      <div class="right">
        <v-btn
          variant="flat"
          color="primary"
          size="30"
          icon
        >
          <v-icon icon="mdi-arrow-right" size="x-small" />
        </v-btn>
      </div>
    </v-card-title>
    <v-card-title class="d-flex ga-2">
      <div
        v-for="(image, i) in thumbernailImgs" :key="i"
        style="width: 100px; height: 100px; cursor: pointer;"
      >
        <v-img
          :src="image"
          height="100px"
          rounded="lg"
          contain
        ></v-img>
      </div>
    </v-card-title>

    <!-- Product Specifications -->
    <v-card-title class="text-h5 font-weight-bold">Specifications</v-card-title>

    <v-card-title class="text-h6 font-weight-bold">Material</v-card-title>
    <v-card-title class="text-subtitle-1 d-flex ga-2 py-0">
      <v-chip label class="bg-pink-lighten-5">{{ faker.commerce.productMaterial() }} {{ faker.number.int({ min: 10, max: 100 }) }}%</v-chip>
      <v-chip label class="bg-pink-lighten-5">{{ faker.commerce.productMaterial() }} {{ faker.number.int({ min: 10, max: 100 }) }}%</v-chip>
    </v-card-title>

    <v-card-title class="text-h6 font-weight-bold">Origin</v-card-title>
    <v-card-title class="text-subtitle-1 d-flex ga-2 py-0">
      <v-chip label class="bg-orange-lighten-5">{{ faker.commerce.productAdjective() }}</v-chip>
      <v-chip label class="bg-orange-lighten-5">{{ faker.commerce.productAdjective() }}</v-chip>
    </v-card-title>

    <v-card-title class="d-flex justify-space-between align-center">
      <span class="text-h6 font-weight-bold">Size guide</span>
      <v-btn
        variant="flat"
        color="primary"
        size="30"
        icon
      >
        <v-icon icon="mdi-arrow-right" size="x-small" />
      </v-btn>
    </v-card-title>

    <!--Delivery -->
    <v-card-title class="text-h5 font-weight-bold pb-0">Delivery</v-card-title>
    <v-list class="pt-0">
      <v-list-item
        v-for="(option, i) in deliveryOptions" :key="i"
        class="mt-2 border-thin mx-2 rounded-lg"
        :value="option.title"
        style="border-color: #004CFF !important;"
        color="primary"
      >
        <template #prepend>
          {{ option.title }}
        </template>
        <template #title>
          <v-chip label variant="text" color="primary">{{ option.duration }}</v-chip>
        </template>
        <template #append>
          <span class="text-subtitle-1 font-weight-bold">{{ option.price }}</span>
        </template>
      </v-list-item>
    </v-list>

    <!-- Reviews & Rating -->
    <v-card-title class="text-h5 font-weight-bold pb-0">Rating & Reviews</v-card-title>
    <v-card-title class="text-h5 font-weight-bold py-0 d-flex align-center">
      <v-rating
        length="5"
        :model-value="3"
        active-color="orange-lighten-1"
        density="compact"
      ></v-rating>
      <v-chip label color="primary" class="font-weight-bold ml-2">3/5</v-chip>
    </v-card-title>

    <ItemsReviewCard />

    <v-card-actions class="px-4">
      <v-btn
        variant="flat"
        color="primary"
        class="text-none rounded-lg"
        width="100%"
      >
        View All Reviews
      </v-btn>
    </v-card-actions>

    <v-card-title class="py-0">
      <ShopMostPopular />
    </v-card-title>

    <v-card-title class="py-0">
      <ProfileJustForYou />
    </v-card-title>
  <!-- End of Card -->
  </v-card>
  
  <!-- Product Options at the bottom of screen -->
  <div class="sticky-actions">
    <v-card-actions class="justify-center">
      <v-btn
        icon="mdi-heart-outline"
        variant="text"
        size="large"
      ></v-btn>
      <v-btn
        variant="outlined"
        class="text-none rounded-lg bg-black text-white"
        @click="$emit('close')"
        width="40%"
        size="large"
      >
        Add to Cart
      </v-btn>
      <v-btn
        variant="flat"
        color="primary"
        class="text-none rounded-lg"
        @click="$emit('apply')"
        width="40%"
        size="large"
      >
        Buy Now
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'product'
});

import { faker } from '@faker-js/faker';

const productImgs = Array.from({ length: 4 }, () => {
  return productImg();
});

const thumbernailImgs = Array.from({ length: 3 }, () => {
  return smallProductImg();
});

const deliveryOptions = [
  {
    title: 'Standard',
    duration: '3-5 days',
    price: '$5.00'
  },
  {
    title: 'Express',
    duration: '1-2 days',
    price: '$10.00'
  }
];
</script>
<style scoped>
.sticky-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 5px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 100;
}
</style>