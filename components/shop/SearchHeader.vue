<template>
  <v-card elevation="0"  class="bg-transparent">
    <v-card-title class="d-flex justify-space-between align-center ma-0 pa-0">
      <span class="text-h5 font-weight-bold">Shop</span>
      <div class="search-bar">
        <v-autocomplete
          v-model="searchQuery"
          :items="searchTerms"
          hide-details flat chips closable-chips multiple 
          variant="solo-filled"
          rounded="pill"
          menu-icon=""
          width="320"
          placeholder="Search ..."
          item-title="title"
          item-value="title"
        >
          <template #append-inner>
            <v-icon color="primary">mdi-camera-outline</v-icon>
          </template>

          <template v-slot:chip="{ props, item, index }">
            <template v-if="index < 2">
              <v-chip
                v-bind="props"
                :text="item.raw.title"
                color="primary"
              />
            </template>
            <template v-else-if="index === 2">
              <v-chip color="primary">
                +{{ searchQuery.length - 2 }}
              </v-chip>
            </template>
          </template>

          <template v-slot:item="{ props, item }">
            <v-list-item
              v-bind="props"
              :title="item.raw.title"
              :value="item.raw.title"
              :prepend-avatar="item.raw.image"
              color="primary"
              density="compact"
              link
            ></v-list-item>
          </template>
        </v-autocomplete>
      </div>
    </v-card-title>
  </v-card>
</template>
<script setup lang="ts">
const searchQuery = defineModel('searchQuery', {
  type: Array as PropType<string[]>,
  default: []
});

const { SEARCH_TERMS, CATEGORIES } = useProducts();
const searchTerms = ref<Object[]>(CATEGORIES);
</script>