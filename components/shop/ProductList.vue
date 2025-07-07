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
        @click="categoryDialog = true"
      ></v-btn>
    </template>

    <v-row no-gutters>
      <v-col
        v-for="(item, index) in products"
        :key="index"
        cols="6" sm="4" md="3" lg="3"
        class="pa-1"
      >
        <ItemsProductCard
          :item="item"
        />
      </v-col>
    </v-row>
  </ItemsContainerCard>

  <!-- Dialog for Categories -->
  <ItemsCategoryDialog
    v-model:category-dialog="categoryDialog"
  />

</template>
<script setup lang="ts">
defineProps({
  products: {
    type: Array as PropType<Product[]>,
    default: () => []
  }
});

const categoryDialog = ref(false);
</script>

<style>
.v-slide-group__content {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
</style>