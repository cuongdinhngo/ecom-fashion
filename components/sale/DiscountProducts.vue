<template>
  <ItemsDiscountProductCard
    :discount="discount"
  >
  <v-row no-gutters>
    <v-col
      v-for="(item, index) in products"
      :key="index"
      cols="6"
    >
      <ItemsProductCard
        :item="item"
      />
    </v-col>
    </v-row>
  </ItemsDiscountProductCard>
</template>
<script setup lang="ts">
defineProps({
  discount: {
    type: Number,
    default: 20
  },
  products: {
    type: Array,
    default: () => []
  }
});
</script>
