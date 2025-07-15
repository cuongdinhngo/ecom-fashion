<template>
  <ItemsTopDataCard
    title="Just For You"
    :icon="{ name: 'mdi-star', color: 'primary', size: 'x-small' }"
  >
    <v-row no-gutters>
      <template
        v-for="(item, index) in products"
      >
        <v-col
          v-if="item.id !== currentProduct"
          :key="index"
          cols="6" sm="3" md="3" lg="2"
          class="px-1"
        >
          <ItemsProductCard :item="item"/>
        </v-col>
      </template>
    </v-row>
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
const currentProduct = useRouteParams('id', null, { transform: Number });
const { products } = useProducts({ quantity: 8 });
</script>