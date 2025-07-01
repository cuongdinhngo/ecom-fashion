<template>
  <NuxtLink :to="item.to" class="nuxt-link-reset">
    <v-card
      class="rounded-lg elevation-0 pa-0 mb-2 bg-transparent"
      height="300"
      width="100%"
    >
      <div class="photo-frame elevation-5">
        <v-img
          :src="item.image"
          width="180"
          height="200"
          cover
          class="rounded-lg photo-img"
        />
      </div>
      <v-card-subtitle class="px-1 my-2 subtitle-two-lines">
        <span class="text-caption">{{ item.description }}</span>
      </v-card-subtitle>
      <v-card-title class="ma-0 px-1 py-0">
        <span class="font-weight-bold">{{ item.price }}</span>
        <span
          v-if="!hiddenOriginalPrice"
          class="text-subtitle-2 font-weight-bold text-pink-lighten-3 ml-2 text-decoration-line-through"
        >
          {{ item.originalPrice }}
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
.photo-frame {
  width: 190px;
  height: 200px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px; /* Add padding for the frame effect */
  box-sizing: border-box;
}

.photo-img {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>