<template>
  <ItemsTopDataCard title="Categories" :see-all="true">
    <v-row no-gutters>
      <v-col
        v-for="(category, index) in categories"
        :key="index"
        cols="6" sm="6" md="3" lg="3"
        class="pa-1"
      >
        <ItemsCategoryCard
          :items="category.items"
          :category="category.category"
          :counts="category.counts"
        />
      </v-col>
    </v-row>
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

const { CATEGORIES } = useProducts();

const categories = CATEGORIES.map(category => ({
  category: category.title,
  items: Array.from({ length: 4 }, () => categoryImg()),
  counts: faker.number.int({ min: 50, max: 500 })
}));
</script>
