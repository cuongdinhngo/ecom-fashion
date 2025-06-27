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
const newItems = Array.from({ length: 15 }, () => ({
  id: faker.string.uuid(),
  description: faker.lorem.sentence({ min: 5, max: 10 }),
  price: faker.commerce.price({ min: 10, max: 200, dec: 2, symbol: '$' }),
  image: `https://picsum.photos/130/130?random=${Math.floor(Math.random() * 1000)}`,
}));
</script>
