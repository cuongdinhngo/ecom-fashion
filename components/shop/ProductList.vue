<template>
  <ItemsContainerCard>
    <!-- Header Left -->
    <template #header-left>
      <ItemsHeaderTitle
        :title="headerTitle"
      />
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
const searchQuery = useSearchQuery();
const headerTitle = computed(() => {
  let title = 'All Items';
  switch (searchQuery.value.quickSearch) {
    case 'popular':
      title = 'Most Popular';
      break;
    case 'new':
      title = 'New Items';
      break;
  }

  if (searchQuery.value.categories.length > 0) {
    title = 'All Items';
  }

  return title;
});
</script>

<style>
.v-slide-group__content {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
</style>