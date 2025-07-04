<template>
  <ItemsTopDataCard
    title="Just For You"
    :icon="{ name: 'mdi-star', color: 'primary', size: 'x-small' }"
  >
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in products"
        :key="index"
        cols="6"
        class="px-1"
      >
        <ItemsProductCard :item="item" />
      </v-col>
    </v-row>
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
const { products } = useProducts({ quantity: 8 });
</script>