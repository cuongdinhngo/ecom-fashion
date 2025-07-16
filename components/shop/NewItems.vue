<template>
  <v-card class="elevation-0 bg-transparent my-3">
    <v-card-title class="d-flex justify-space-between px-0">
      <span class="text-h6 font-weight-bold d-flex align-center">
        New Items
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
          @click="showNewItems"
        ><v-icon size="x-large">mdi-arrow-right-thin</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text class="d-flex justify-space-between px-0">
      <v-slide-group
        center-active
        :show-arrows="false"
      >
        <v-slide-group-item
          v-for="item in products"
          :key="item.id"
          v-slot="{ isSelected, toggle }"
        >
          <ItemsNewItemCard
            :item="item"
            :toggle="toggle"
          />
        </v-slide-group-item>
      </v-slide-group>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { resetSearchQuery } from '@/composables/useSearchQuery';

const { products } = useProducts({ quantity: 15});

const searchQuery = useSearchQuery();

function showNewItems() {
  resetSearchQuery();
  searchQuery.value.quickSearch = 'new';
  navigateTo({ name: 'shop' });
}

</script>
