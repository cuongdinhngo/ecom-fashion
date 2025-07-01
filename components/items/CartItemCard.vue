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

        <v-card-title class="text-h6 px-0">
          <span class="text-capitalize">{{ product.color }} {{ product.size ? `, Size: ${product.size}` : '' }}</span>
        </v-card-title>

        <v-card-title></v-card-title>

        <div class="cart-actions d-flex align-center justify-space-between">
          <p class="text-h6 text-black font-weight-bold">${{ totalPrice }}</p>
          <div class="product-quantity d-flex align-center justify-center">
            <v-btn
              variant="outlined"
              color="primary"
              icon
              size="x-small"
              @click.prevent="updateProductQuantity('decrement')"
            ><v-icon>mdi-minus</v-icon></v-btn>
            <v-text-field
              v-model="product.quantity"
              type="number"
              width="60px"
              color="primary"
              hide-details
              variant="solo-filled"
              size="10"
              flat
              class="mx-1 text-center font-weight-bold"
              density="compact"
              @click.prevent=""
            ></v-text-field>
            <v-btn
              variant="outlined"
              color="primary"
              icon
              size="x-small"
              @click.prevent="updateProductQuantity('increment')"
            ><v-icon>mdi-plus</v-icon></v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Product } from '@/composables/useProducts';

const props = defineProps<{ product: Product }>();
const { addToCart } = useCart();

const totalPrice = ref((Number(props.product.price) * Number(props.product.quantity)).toFixed(2));

function updateProductQuantity(mode: 'increment' | 'decrement') {
  if (mode === 'increment') {
    props.product.quantity++;
  }
  
  if (mode === 'decrement') {
    if (props.product.quantity > 1) {
      props.product.quantity--;
    } else {
      props.product.quantity = 1;
    }
  }

  addToCart({
    productId: props.product.id,
    quantity: props.product.quantity,
    color: props.product.color,
    size: props.product.size
  });

  totalPrice.value = (Number(props.product.price) * Number(props.product.quantity)).toFixed(2);
}

</script>