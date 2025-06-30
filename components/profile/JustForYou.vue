<template>
  <ItemsTopDataCard
    title="Just For You"
    :icon="{ name: 'mdi-star', color: 'primary', size: 'x-small' }"
  >
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in products"
        :key="index"
        cols="6"
      >
        <ItemsProductCard :item="item" />
      </v-col>
    </v-row>
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

const products = Array.from({ length: 8 }, () => ({
  image: smallProductImg(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price({ min: 10, max: 200, dec: 2, symbol: '$' }),
}));
</script>