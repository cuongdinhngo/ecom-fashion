<template>
  <ItemsTopDataCard title="New Items" :see-all="true">
    <v-slide-group
      v-model="model"
      center-active
      :show-arrows="false"
    >
      <v-slide-group-item
        v-for="item in newItems"
        :key="item.id"
        v-slot="{ isSelected, toggle }"
      >
        <ItemsNewItemCard
          :item="item"
          :toggle="toggle"
        />
      </v-slide-group-item>
    </v-slide-group>
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
const model = ref(null)
const newItems = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  description: faker.lorem.sentence({ min: 10, max: 15 }),
  price: faker.commerce.price({ min: 10, max: 200, dec: 2, symbol: '$' }),
  image: smallProductImg(),
  to: { name: 'product-id', params: { id: index + 1 } },
}));
</script>
