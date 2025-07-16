<template>
  <ItemsFlashSaleCard
    title="Flash Sale"
    :duration="3700"
  >
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in saleItems"
        :key="index"
        cols="4" sm="4" md="2" lg="2"
        class="pa-1"
      >
        <!-- Sale Items -->
        <ItemsSaleCard
          :item="item"
          @click="navigateTo(item.to)"
        />
      </v-col>
    </v-row>
  </ItemsFlashSaleCard>
</template>
<script setup lang="ts">
import { ItemsSaleCard } from '#components';
const saleItems = Array.from({ length: 6 }, (_, index) => ({
  image: smallProductImg(),
  discount: (Math.floor(Math.random() * 40) + 10) + '%',
  to: { name: 'product-id', params: { id: index + 1 } },
}));
</script>
