<template>
    <v-card class="ma-0 pa-0 category elevation-4" width="100%" @click="updateSearchQuery(category)">
      <v-card-text class="pa-0">
        <v-row no-gutters>
          <v-col
            v-for="(item, index) in items"
            :key="index"
            cols="6"
            class="d-flex justify-center pa-1"
          >
            <v-responsive :aspect-ratio="4/3">
              <v-img
                :src="item"
                cover
                class="rounded-lg mx-auto"
              ></v-img>
            </v-responsive>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title class="ma-0 px-1 d-flex justify-space-between align-center">
        <span class="text-subtitle-1 font-weight-bold">{{ category }}</span>
        <v-chip class="font-weight-bold">{{ counts }}</v-chip>
      </v-card-title>
    </v-card>
</template>
<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  category: {
    type: String,
    required: true,
    default: ''
  },
  counts: {
    type: Number,
    required: true,
    default: 0
  }
});

const searchQuery = useSearchQuery();

function updateSearchQuery(category: string) {
  searchQuery.value.categories.push(category);
}
</script>