<template>
  <v-expansion-panels
    elevation="0"
    v-model="selectedPanel"
  >
    <v-expansion-panel
      v-for="(category, idx) in categories"
      :key="idx"
      class="elevation-0 bg-white my-2"
      :value="category.category"
    >
      <v-expansion-panel-title class="ma-0 py-1 px-0 elevation-2 rounded-lg">
        <v-list-item>
          <template #prepend>
            <v-avatar
              :size="40"
              :image="category.image"
              tile
            ></v-avatar>
          </template>
          <template #title>
            <span class="text-h6">{{ category.category }}</span>
          </template>
        </v-list-item>
      </v-expansion-panel-title>

      <v-expansion-panel-text class="pa-2">
        <v-row>
          <v-col
            v-for="(item, index) in category.subCategories"
            :key="index"
            cols="6"
            class="pa-1"
          >
            <v-chip
              label
              color="primary"
              variant="outlined"
              class="w-100 d-flex justify-center align-center"
              @click="selectCategory(category.category, item.title)"
              :text="item.title"
            >
              <template #append>
                <v-icon
                  v-if="isSelected(category.category, item.title)"
                  class="ml-2"
                >mdi-check-circle</v-icon>
              </template>
            </v-chip>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
const props = defineProps({
  categories: {
    type: Array as () => { category: string; image: string; subCategories: { title: string }[] }[],
    default: () => []
  },
  gender: {
    type: String,
    default: 'all'
  }
});

const emit = defineEmits(['closeDialog']);

const searchQuery = useSearchQuery();
const selectedPanel = ref(searchQuery.value.categories);

const isSelected = (category: string, subCategory: string) => {
  return searchQuery.value.gender === props.gender && 
    searchQuery.value.categories.includes(category) &&
    searchQuery.value.subCategories.includes(subCategory)
  ;
};

function selectCategory(category: string, subCategory: string) {
  searchQuery.value = {
    categories: [category],
    subCategories: [subCategory],
    size: 0,
    color: '',
    price: [1, 100],
    quickSearch: '',
    gender: props.gender
  };

  emit('closeDialog');
}
</script>
<style>
.v-expansion-panel-text__wrapper {
  padding: 8px !important;
}
</style>