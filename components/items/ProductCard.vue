<template>
  <NuxtLink :to="item.to" class="nuxt-link-reset">
    <v-card
      class="rounded-lg elevation-0 pa-0 mb-2 bg-white"
      min-height="300"
      width="100%"
    >
      <v-card class="rounded-lg elevation-4 bg-white pa-1">
        <v-responsive aspect-ratio="4/5" class="product-image-frame">
          <v-img
            :src="item.image"
            class="product-image rounded-lg"
            cover
          />
        </v-responsive>
      </v-card>
      <v-card-subtitle class="px-1 my-2 subtitle-two-lines">
        <span class="text-caption">{{ item.description }}</span>
      </v-card-subtitle>
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
<style scoped>
.product-image-frame {
  width: 100%;
  aspect-ratio: 4 / 5;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}

.product-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>