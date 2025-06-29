<template>
  <v-expansion-panels elevation="0">
    <v-expansion-panel
      v-for="(category, idx) in categories"
      :key="idx"
      class="elevation-0 bg-white my-2"
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
            v-for="(item, index) in category.relatives"
            :key="index"
            cols="6"
            class="pa-1"
          >
            <v-chip
              label
              color="primary"
              variant="outlined"
              class="w-100 d-flex justify-center align-center"
            >
              <span>{{ item.title }}</span>
            </v-chip>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-card-title
    class="d-flex justify-space-between align-center elevation-2 rounded-lg mt-2"
    style="width: 100%;"
  >
    <div class="left d-flex align-center">
      <v-avatar
        size="45"
        image="https://picsum.photos/50/50?random=11"
        class="mr-2"
        tile
      ></v-avatar>
      <span class="text-h6 mr-2">Just for You</span>
      <v-icon size="small" color="primary">mdi-star</v-icon>
    </div>

    <v-btn
      variant="flat"
      icon
      color="primary"
      size="small"
    >
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-card-title>
</template>
<script setup lang="ts">
defineProps({
  categories: {
    type: Array as () => { category: string; image: string; relatives: { title: string }[] }[],
    default: () => []
  }
});
</script>
<style>
.v-expansion-panel-text__wrapper {
  padding: 8px !important;
}
</style>