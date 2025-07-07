<template>
  <NuxtLink :to="product.to" class="nuxt-link-reset">
    <v-row no-gutters>
      <v-col cols="4" sm="4" md="4" lg="4" class="my-2">
        <v-card class="rounded-lg elevation-4 bg-white pa-1">
          <v-responsive :aspect-ratio="4/5">
            <v-img
              :src="product.image"
              class="rounded-lg"
              cover
              width="100%"
              height="100%"
            >
              <v-btn
                icon
                variant="flat"
                style="position: absolute; bottom: 5px; left: 5px;"
                size="small"
                @click.prevent="removeFromCart(product.id)"
              >
                <v-icon color="error" icon="mdi-trash-can-outline"></v-icon>
              </v-btn>
            </v-img>
          </v-responsive>
        </v-card>
      </v-col>

      <v-col cols="8" sm="8" md="8" lg="8" class="my-2 px-2 d-flex justify-space-between flex-column">
        <p class="text-subtitle-2">{{ product.shortDescription }}</p>
        <v-card-title class="text-h6 px-0" style="min-height: 60px;">
          <span class="text-capitalize">{{ product.color }} {{ product.size ? `, Size: ${product.size}` : '' }}</span>
        </v-card-title>

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
      </v-col>
    </v-row>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Product } from '@/composables/useProducts';

const props = defineProps<{ product: Product }>();
const { addToCart, removeFromCart } = useCart();

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