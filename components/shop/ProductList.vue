<template>
  <ItemsContainerCard>
    <!-- Header Left -->
    <template #header-left>
      <ItemsHeaderTitle
        title="All Items"
      />
    </template>

    <!-- Header Right -->
    <template #header-right>
      <v-btn
        variant="text"
        icon="mdi-tune-vertical"
        :to="{ name: 'index' }"
      ></v-btn>
    </template>

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
  </ItemsContainerCard>
</template>
<script setup lang="ts">
defineProps({
  products: {
    type: Array as PropType<Product[]>,
    default: () => []
  }
});
</script>