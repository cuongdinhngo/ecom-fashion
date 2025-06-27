<template>
  <ItemsDiscountProductCard
    :discount="discount"
  >
  <v-row no-gutters>
    <template v-for="(item, index) in products" :key="index">
      <v-col cols="6">
        <ItemsProductCard :item="item" />
      </v-col>
      <v-col v-if="(index + 1) % 6 === 0" cols="12">
        <ItemsAdvCard />
      </v-col>
    </template>
    </v-row>
  </ItemsDiscountProductCard>
</template>
<script setup lang="ts">
defineProps({
  discount: {
    type: [Number, String],
    default: 20
  },
  products: {
    type: Array,
    default: () => []
  }
});
</script>
