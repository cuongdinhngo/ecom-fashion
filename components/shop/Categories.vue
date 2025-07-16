<template>
  <v-card class="elevation-0 bg-transparent my-3">
    <v-card-title class="d-flex justify-space-between px-0">
      <span class="text-h6 font-weight-bold d-flex align-center">
        Categories
      </span>
      <div
        class="d-flex align-center"
      >
        <span
          class="text-subtitle-1 font-weight-bold mr-2"
        >See All</span>
        <v-btn
          icon
          variant="flat"
          color="primary"
          size="x-small"
          @click="listProductsByCategories"
        ><v-icon size="x-large">mdi-arrow-right-thin</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text class="d-flex justify-space-between px-0">
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
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { resetSearchQuery } from '@/composables/useSearchQuery';

const props = defineProps({
  quantity: {
    type: Number,
    default: 4
  }
});

const { CATEGORIES } = useProducts();
const searchQuery = useSearchQuery();

const categories = CATEGORIES.map(category => ({
  category: category.title,
  items: Array.from({ length: 4 }, () => categoryImg()),
  counts: faker.number.int({ min: 50, max: 500 })
}));

function listProductsByCategories() {
  resetSearchQuery();
  searchQuery.value.categories = CATEGORIES.map(category => category.title);
  navigateTo({ name: 'shop' });
}
</script>
