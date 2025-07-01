<template>
  <NuxtLink :to="product.to" class="nuxt-link-reset">
    <v-card flat class="d-flex ga-2 my-2" height="170px">
      <div class="product-image">
        <div class="frame pa-2 elevation-2 rounded-lg" style="position: relative;">
          <v-img
            :src="product.image"
            width="150px"
            height="150px"
            aspect-ratio="16/9"
            cover
            class="rounded-lg"
          ></v-img>

          <!-- Remove -->
          <v-btn
            icon
            variant="flat"
            style="position: absolute; bottom: 10px; left: 10px;"
            size="small"
            @click.prevent="removeFromWishlist(product.id)"
          >
            <v-icon color="error" icon="mdi-trash-can-outline"></v-icon>
          </v-btn>
        </div>
      </div>
      <div class="product-info">
        <p class="text-subtitle-2">{{ product.shortDescription }}</p>
        <v-card-title></v-card-title>
        <p class="text-h6 text-black font-weight-bold">{{ product.price }}</p>
        <v-card-title></v-card-title>
        <v-chip label class="mr-1">Blue</v-chip>
        <v-chip label>XL</v-chip>
      </div>
      <div class="product-actions align-content-end">
        <v-icon
          variant="text"
          icon="mdi-basket-plus-outline"
          color="primary"
          size="x-large"
          v-ripple
          class="ma-2"
        ></v-icon>
      </div>
    </v-card>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Product } from '@/composables/useProducts';
defineProps({
  product: {
    type: Object as () => Product,
    required: true,
    default: () => ({})
  }
});

const { removeFromWishlist } = useWishlist();
</script>