<template>
  <ItemsTopDataCard title="Most Popular" :see-all="true">
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
        <ItemsPopularItemCard
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
  like: faker.number.int({ min: 1000, max: 99999 }),
  image: smallProductImg(),
  status: faker.helpers.arrayElement(['New', 'Popular', 'Sale', 'Limited'])
}));
</script>
