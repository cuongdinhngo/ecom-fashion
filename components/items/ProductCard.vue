<template>
  <NuxtLink :to="item.to" class="nuxt-link-reset">
    <v-card
      class="rounded-lg elevation-0 pa-0 mb-2 bg-white"
      width="100%"
    >
      <v-card class="rounded-lg elevation-4 bg-white pa-1">
        <v-responsive :aspect-ratio="4/5">
          <v-img
            :src="item.image"
            class="rounded-lg"
            cover
            width="100%"
            height="100%"
          />
        </v-responsive>
      </v-card>
      <ItemsProductDescription
        :description="item.description"
      />
      <v-card-title class="ma-0 px-1 py-0">
        <span class="font-weight-bold">${{ item.price }}</span>
        <span
          v-if="!hiddenOriginalPrice"
          class="text-subtitle-2 font-weight-bold text-pink-lighten-3 ml-2 text-decoration-line-through"
        >
          ${{ item.originalPrice }}
        </span>
      </v-card-title>
    </v-card>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({})
  },
  hiddenOriginalPrice: {
    type: Boolean,
    default: true
  }
});
</script>