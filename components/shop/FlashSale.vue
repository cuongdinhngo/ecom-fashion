<template>
  <ItemsFlashSaleCard
    title="Flash Sale"
    :duration="3700"
  >
    <div class="grid-container d-flex ga-2">
      <v-row no-gutters>
        <v-col
          v-for="(item, index) in saleItems"
          :key="index"
          cols="4"
          class="pr-2 pb-3"
        >
          <!-- Sale Items -->
          <ItemsSaleCard
            :item="item"
          />
        </v-col>
      </v-row>
    </div>
  </ItemsFlashSaleCard>
</template>
<script setup lang="ts">
import { ItemsSaleCard } from '#components';
import { faker } from '@faker-js/faker';
const saleItems = Array.from({ length: 6 }, () => ({
  image: smallProductImg(),
  discount: faker.number.int({ min: 10, max: 50 }) + '%',
}));
</script>
