<template>
  <v-card-title class="text-h5 font-weight-bold pa-0 d-flex align-center">
    Cart
    <span class="cart-counts bg-blue-lighten-4 text-subtitle-1 ml-2">2</span>
  </v-card-title>

  <v-list-item
    subtitle="666 Hoang Hoa, Ward 17, Binh Thanh District, HCM City"
    link
    class="bg-grey-lighten-3 rounded-lg pa-3 my-2"
  >
    <template #title>
      <span class="text-subtitle-1 font-weight-bold">Shipping Address</span>
    </template>
    <template #append>
      <v-btn icon variant="flat" color="primary" size="25" class="ml-4">
        <v-icon size="17">mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-list-item>

  <v-card-text class="px-0">
    <ItemsCartItemCard
      v-for="(product, index) in productsFromCart"
      :key="index"
      :product="product"
    />
  </v-card-text>

  <v-card-title class="text-h5 font-weight-bold pa-0 d-flex align-center">
    From Your Wishlist
  </v-card-title>
  <v-card-text class="px-0">
    <ItemsWishlistCard
      v-for="(product, index) in wishlistItems"
      :key="index"
      :product="product"
    />
  </v-card-text>
</template>
<script setup lang="ts">

const { wishlist } = useWishlist();
const { products } = useProducts();
const { cartItems } = useCart();
const productsFromCart = ref<Product[]>([]);

console.log('Cart Items:', cartItems.value);

onMounted(() => {
  if (cartItems.value.length > 0) {
    productsFromCart.value = cartItems.value
      .map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product || product.id === undefined || product.id === null) return null;
        return {
          ...product,
          quantity: item.quantity,
          color: item.color,
          size: item.size
        };
      })
      .filter((p): p is Product => p !== null) as Product[];
  }
});

console.log('productsFromCart', productsFromCart.value);

const wishlistItems = computed(() => {
  return products.filter(product => wishlist.value.includes(product.id));
});
</script>
<style scoped>
.cart-counts {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>