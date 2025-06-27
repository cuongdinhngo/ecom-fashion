<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column"
    tile
  >
    <v-card-actions></v-card-actions>

    <!-- Flash Sale Header -->
    <v-card-title class="d-flex justify-space-between pb-0 px-0">
      <span class="text-h5 font-weight-bold">Flash Sale</span>
      <SaleCountDown 
        color="white"
        bgColor="white"
        :duration="duration"
      />
    </v-card-title>

    <!-- Discount Option -->
    <v-card-title class="text-subtitle-1 pa-0 text-black">
      Choose Your Discount
    </v-card-title>

    <v-card-title class="d-flex justify-center pa-0 mt-4">
      <v-slide-group
        v-model="selectedDiscount"
        class="discount-menu bg-grey-lighten-4 rounded-lg px-6 py-2"
        show-arrows
        center-active
      >
        <v-slide-group-item
          v-for="(option, idx) in discountOptions"
          :key="option.value"
          :value="option.value"
          v-slot="{ isSelected, toggle }"
        >
          <div
            class="discount-item"
            :class="{ 'selected': isSelected }"
            @click="toggle"
          >
            <span class="">{{ option.label }}</span>
            <div v-if="isSelected" class="discount-arrow"></div>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-card-title>

    <!-- Flash Sale Live -->
    <SaleLiveCard />

    <!-- Discount Products -->
    <v-card-text class="pa-0">
      <v-tabs-window v-model="selectedDiscount">
        <v-tabs-window-item
          v-for="(option, idx) in discountOptions"
          :key="option.value"
          :value="option.value"
        >
          <SaleDiscountProducts
            :products="discountProducts"
            :discount="option.value"
          />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>

  <ShopMostPopular />
</template>

<script setup lang="ts">
definePageMeta({
  backgroundImage: '/images/flash-sale-bg.png',
  title: 'Shoppe - Home',
  meta: [
    { name: 'description', content: 'Welcome to Shoppe, your online store for beautiful products.' },
    { name: 'keywords', content: 'eCommerce, online store, shopping, fashion' }
  ]
});

import { faker } from '@faker-js/faker';

const selectedDiscount = ref<string | number>('all');
const duration = ref(3700);
const discountOptions = [
  { label: 'All', value: 'all' },
  { label: '10%', value: 10 },
  { label: '20%', value: 20 },
  { label: '30%', value: 30 },
  { label: '40%', value: 40 },
  { label: '50%', value: 50 },
];

const products = Array.from({ length: 30 }, () => {
  const discount = faker.helpers.arrayElement([10, 20, 30, 40, 50]);
  const originalPrice = faker.commerce.price({ min: 10, max: 100, dec: 2});
  const price = (parseFloat(originalPrice) * (1 - discount / 100)).toFixed(2);
  return {
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    price: `$${price}`,
    image: 'https://picsum.photos/180/200?random=' + faker.number.int({ min: 1, max: 1000 }),
    discount: discount,
    originalPrice: `$${originalPrice}`,
  }
});

const discountProducts = computed(() => {
  if (selectedDiscount.value === 'all') {
    return products;
  }
  return products.filter(product => product.discount === selectedDiscount.value);
});

</script>

<style scoped>
.discount-item {
  position: relative;
  min-width: 58px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  padding: 5px;
  cursor: pointer;
  transition: color 0.2s;
  border-radius: 24px;
}

.discount-item.selected {
  color: #2453ff;
  background: #FFFFFF;
  border: 3px solid #2453ff;
  z-index: 999;
}

.discount-arrow {
  position: absolute;
  left: 50%;
  top: -1px;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #2453ff;
  z-index: 2;
}
</style>