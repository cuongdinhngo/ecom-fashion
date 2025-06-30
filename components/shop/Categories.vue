<template>
  <ItemsTopDataCard title="Categories" :see-all="true">
    <div class="grid-container d-flex ga-2">
      <v-row no-gutters>
        <v-col
          v-for="(category, index) in categories"
          :key="index"
          cols="6"
          class="pr-2 pb-3"
        >
          <ItemsCategoryCard
            :items="category.items"
            :category="category.category"
            :counts="category.counts"
          />
        </v-col>
      </v-row>
    </div>
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
const props = defineProps({
  quantity: {
    type: Number,
    default: 4
  }
});

const categories = Array.from({ length: props.quantity }, () => ({
  category: faker.commerce.department(),
  items: Array.from({ length: 4 }, () => categoryImg()),
  counts: faker.number.int({ min: 50, max: 500 })
}));
</script>
