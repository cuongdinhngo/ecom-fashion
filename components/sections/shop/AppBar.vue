<template>
  <v-app-bar
    app
    class="pa-4 elevation-0 bg-white"
  >
    <span class="text-h5 font-weight-bold mr-4">Shop</span>

    <!-- Search Bar -->
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-autocomplete
          v-model="searchQuery"
          :items="searchTerms"
          hide-details flat chips closable-chips multiple 
          variant="solo-filled"
          rounded="pill"
          menu-icon=""
          :width="searchQuery.length === 0 ? '100%' : '90%'"
          placeholder="Search ..."
          item-title="title"
          item-value="title"
        >
          <template #append-inner>
            <v-icon color="primary">mdi-camera-outline</v-icon>
          </template>

          <template v-slot:chip="{ props, item, index }">
            <template v-if="index < 1">
              <v-chip
                v-bind="props"
                :text="item.raw.title"
                color="primary"
              />
            </template>
            <template v-else-if="index === 1">
              <v-chip color="primary">
                +{{ searchQuery.length - 1 }}
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

        <v-btn
          v-if="searchQuery.length > 0"
          variant="text"
          icon
          size="small"
          @click="dialog = !dialog"
        >
          <v-icon>mdi-tune-vertical</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
  
  <!-- Dialog for Filter -->
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <v-card class="bg-white">
      <v-toolbar class="bg-white">
        <v-toolbar-title class="text-h5">Filter</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-close"
          @click="dialog = false"
        ></v-btn>
      </v-toolbar>

      <!-- Category List -->
      <v-card-title
        v-if="subCategories.length > 0"
        class="mt-0 py-0"
      >
        <v-item-group selected-class="bg-primary" multiple>
          <v-row no-gutters>
            <v-col
              v-for="(item, index) in subCategories"
              :key="index"
              cols="2"
              class="d-flex flex-column align-center justify-center"
            >
              <v-item v-slot="{ isSelected, selectedClass, toggle }">
                <div
                  class="avatar-frame elevation-1"
                  :style="{ width: '60px', height: '60px', position: 'relative' }"
                >
                  <v-avatar
                    :size="50"
                    :image="item.image"
                    @click="toggle()"
                  ></v-avatar>
                  
                  <!-- Check Signal-->
                  <v-avatar
                    v-if="isSelected"
                    size="20"
                    color="primary"
                    style="position: absolute;top: 2px; right: 2px;"
                  >
                    <v-icon size="10">mdi-check-bold</v-icon>
                  </v-avatar>
                </div>
                <v-list-item-title class="text-caption text-center text-wrap mt-1" style="height: 36px;">
                  {{ item.title }}
                </v-list-item-title>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-card-title>

      <!-- Size Filter -->
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h6 font-weight-bold">Size</span>
        <div class="selected-categories">
          <v-chip
            v-for="(category, index) in searchQuery"
            :key="index"
            class="mr-2"
            color="primary"
            variant="outlined"
          >
            {{ category }}
          </v-chip>
        </div>
      </v-card-title>
      <v-card-title>
        <v-slider
          color="primary"
          :max="5"
          :ticks="SIZE_OPTIONS"
          show-ticks="always"
          :thumb-size="20"
          tick-size="0"
          step="1"
        ></v-slider>
      </v-card-title>

      <!-- Color Filter -->
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h6 font-weight-bold">Color</span>
      </v-card-title>
      <v-card-title class="d-flex justify-space-between align-center">
        <v-slide-group
          v-model="selectedColor"
          center-active
          :show-arrows="false"
        >
          <v-slide-group-item
            v-for="item in colors"
            :key="item"
            v-slot="{ isSelected, toggle }"
          >
            <div
              class="frame elevation-1 mr-3"
              style="width: 50px; height: 50px; position: relative;"
            >
              <span
                class="color-picker" :style="{backgroundColor: item.color}" @click="toggle"
              ></span>
              <v-avatar
                v-if="isSelected"
                size="20"
                color="primary"
                style="position: absolute; top: 2px; right: 2px;"
              >
                <v-icon size="10">mdi-check-bold</v-icon>
              </v-avatar>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-card-title>

      <!-- Price filter -->
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h6 font-weight-bold">Price</span>
        <div class="price-range">
          <span class="min-price">${{ range[0] }}</span> - <span class="min-price">${{ range[1] }}</span>
        </div>
      </v-card-title>
      <v-card-title>
        <v-range-slider
          v-model="range"
          :max="100"
          :min="1"
          :step="1"
          class="align-center"
          hide-details
          color="primary"
        >
        </v-range-slider>
      </v-card-title>

      <!--Quick filter-->
      <v-card-title>
        <v-item-group selected-class="text-primary font-weight-bold">
          <v-row no-gutters>
            <v-col
              v-for="(filter, index) in quickFilters"
              :key="index"
              cols="6"
              class="ma-0 pa-0 pa-1"
            >
              <v-item v-slot="{ isSelected, selectedClass, toggle }">
                <v-list-item
                  @click="toggle(); selectedQuickFilter = filter.value"
                  rounded="pill"
                  :class="[
                    isSelected ? 'bg-blue-lighten-5' : 'bg-grey-lighten-3', 'text-center',
                    selectedClass
                  ]"
                >
                  <template #title>
                    <span :class="isSelected ? 'font-weight-bold' : ''">{{  filter.label }}</span>
                  </template>

                  <template #append>
                    <v-btn
                      v-if="isSelected"
                      icon
                      variant="flat"
                      color="primary"
                      size="x-small"
                    ><v-icon>mdi-check-bold</v-icon></v-btn>
                  </template>
                </v-list-item>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-card-title>

      <v-card-actions class="d-flex justify-center pa-6">
        <v-btn
          variant="outlined"
          color="primary"
          class="text-none rounded-xl"
          @click="dialog = false"
          width="30%"
          size="large"
        >
          Cancel
        </v-btn>
        <v-btn
          variant="flat"
          color="primary"
          class="text-none rounded-xl"
          @click="dialog = false"
          width="70%"
          size="large"
        >
          Apply Filters
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
const queries = useRouteQuery('terms', '');
const searchQuery = useSearchQuery();

onMounted(() => {
  if (queries.value) {
    searchQuery.value = queries.value.split(',');
  }
});

const { SEARCH_TERMS, CATEGORIES, SIZE_OPTIONS, searchSubCategories } = useProducts();
const searchTerms = ref<Object[]>(CATEGORIES);
const dialog = ref(false);
const subCategories = ref<any[]>([]);
const size = ref(1);
const selectedColor = ref<string>('grey');
const colors = [
  { color: 'grey' },
  { color: 'red' },
  { color: 'blue' },
  { color: 'green' },
  { color: 'yellow' },
  { color: 'purple' },
  { color: 'orange' },
  { color: 'pink' }
];

const range = ref([1, 100]);

const quickFilters = ref([
  { label: 'Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price Low to High', value: 'price_low' },
  { label: 'Price High to Low', value: 'price_high' }
]);
const selectedQuickFilter = ref('');

watch(searchQuery, (newValue) => {
  console.log('Search Query Updated:', newValue);
  subCategories.value = searchSubCategories(newValue);
  console.log('subCategories Updated:', subCategories.value);
});
</script>
<style scoped>
.frame {
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-picker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>