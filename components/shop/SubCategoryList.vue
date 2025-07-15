<template>
  <ItemsContainerCard
    :hidden-header="true"
  >
      <v-row no-gutters>
        <v-col
          v-for="(item, index) in subCategories"
          :key="index"
          cols="3"
          class="d-flex flex-column align-center justify-center py-1"
          style="position: relative;"
        >
          <v-avatar
            size="50"
            class="pa-1 elevation-2"
            v-ripple
            @click="handlePickSubCategory(item.title)"
          >
            <v-img
              :src="item.image"
              cover
              class="rounded-circle"
            ></v-img>
          </v-avatar>
          <v-card-title class="pa-0 text-caption">{{ item.title }}</v-card-title>
          <v-avatar
            v-if="searchQuery.subCategories.includes(item.title)"
            color="primary"
            size="15"
            style="position: absolute; top: 5px; right: 20px;"
          >
            <v-icon size="10">mdi-check-bold</v-icon>
          </v-avatar>
        </v-col>
      </v-row>
  </ItemsContainerCard>
</template>
<script setup lang="ts">
defineProps({
  subCategories: {
    type: Array as () => Object[],
    default: () => []
  }
});

const searchQuery = useSearchQuery();

function handlePickSubCategory(title: string) {
  const index = searchQuery.value.subCategories.indexOf(title);
  if (index > -1) {
    searchQuery.value.subCategories.splice(index, 1);
  } else {
    searchQuery.value.subCategories.push(title);
  }
}
</script>