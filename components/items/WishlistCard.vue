<template>
  <NuxtLink :to="product.to" class="nuxt-link-reset">
    <v-row no-gutters>
      <v-col cols="4" sm="4" md="6" lg="6" class="my-2">
        <v-card class="frame pa-1 elevation-2 rounded-lg" style="position: relative;">
          <v-img
            :src="product.image"
            :aspect-ratio="4/5"
            cover
            class="rounded-lg"
          ></v-img>

          <v-btn
            icon
            variant="flat"
            style="position: absolute; bottom: 10px; left: 10px;"
            size="small"
            @click.prevent="removeFromWishlist(product.id)"
          >
            <v-icon color="error" icon="mdi-trash-can-outline"></v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="8" sm="8" md="6" lg="6" class="px-2 d-flex justify-space-between flex-column">
        <ItemsProductDescription
          :description="product.description"
        />
        <v-card-title class="ma-0 px-1 py-0">
          <span class="text-h6 text-black font-weight-bold">${{ product.price }}</span>
          <span
            class="text-subtitle-2 font-weight-bold text-pink-lighten-3 ml-2 text-decoration-line-through"
          >
           {{ product.originalPrice }}
          </span>
        </v-card-title>
        <v-card-actions class="d-flex justify-space-between align-center">
          <div class="d-flex flex-wrap ga-2 text-capitalize">
            <v-chip
              v-if="product.color"
              label
            >{{ product.color }}</v-chip>
            <v-chip
              v-if="product.size"
              label
            >{{ product.size }}</v-chip>
          </div>
          <v-icon
            variant="text"
            icon="mdi-basket-plus-outline"
            color="primary"
            size="x-large"
            v-ripple
            class="ma-2"
            @click.prevent="handleAddToCart"
          ></v-icon>
        </v-card-actions>
      </v-col>
    </v-row>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Product } from '@/composables/useProducts';
const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
    default: () => ({})
  }
});

const { removeFromWishlist } = useWishlist();
const { addToCart } = useCart();
const emit = defineEmits(['cart-updated']);

function handleAddToCart() {
  addToCart({ productId: props.product.id, quantity: 1, size: props.product.size, color: props.product.color });
  emit('cart-updated');
}
</script>