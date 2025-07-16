<template>
  <v-card-title class="text-h5 font-weight-bold pa-0 d-flex align-center">
    <div class="d-flex align-center">
      Cart
      <span class="cart-counts bg-blue-lighten-4 text-subtitle-1 ml-2">{{ itemCounts }}</span>
    </div>
    <v-spacer></v-spacer>
    <v-btn
      variant="text"
      :to="{ name: 'shop' }"
      color="primary"
      class="text-none d-flex align-center"
    >
      <v-icon>mdi-cart-plus</v-icon>
      <span class="">Shop more</span>
    </v-btn>
  </v-card-title>

  <v-card min-height="90vh" tile class="elevation-0 bg-white mb-10">
    <!-- Products from Cart -->
    <v-card-text :class="['pa-0', {'blank-container': productsFromCart.length === 0}]">
      <ItemsCartItemCard
        v-if="productsFromCart.length"
        v-for="(product, index) in productsFromCart"
        :key="index"
        :product="product"
        @cart-updated="onCartUpdated"
      />

      <!-- If wishlist is empty, it will be showed -->
      <v-btn
        v-else
        variant="tonal"
        size="100"
        icon
        class="mx-auto"
      >
        <v-icon size="70" color="primary">mdi-shopping-outline</v-icon>
      </v-btn>
    </v-card-text>

    <!-- Wishlist -->
    <v-card-title
      v-if="wishlistItems.length"
      class="text-h5 font-weight-bold pa-0 d-flex align-center"
    >
      From Your Wishlist
    </v-card-title>
    <v-card-text
      v-if="wishlistItems.length"
      class="px-0" min-height="130vh"
    >
      <ItemsWishlistCard
        v-for="(product, index) in wishlistItems"
        :key="index"
        :product="product"
        @cart-updated="onCartUpdated"
      />
    </v-card-text>

    <ShopMostPopular
      v-else
    />

  </v-card>
  <div class="sticky-actions">
    <v-card-title class="d-flex justify-space-between align-center px-0 mb-0">
      <span class="text-h6 font-weight-bold">Total ${{ totalPrice.toFixed(2) }}</span>
      <v-btn
        variant="tonal"
        class="text-none"
        width="40%"
        :to="{ name: 'cart-checkout' }"
      >Checkout</v-btn>
    </v-card-title>
  </div>
</template>
<script setup lang="ts">

const { wishlistItems:wishlist } = useWishlist();
const { products } = useProducts();
const { cartItems } = useCart();
const productsFromCart = ref<Product[]>([]);
const totalPrice = ref(0);
const itemCounts = ref(0);

onMounted(() => {
  if (cartItems.value.length > 0) {
    remapCartItems();
  } else {
    productsFromCart.value = [];
  }
});

function remapCartItems() {
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
  
  totalPrice.value = productsFromCart.value.reduce((total, product) => {
    return total + (Number(product.price) * Number(product.quantity));
  }, 0);  

  itemCounts.value = productsFromCart.value.length;
}

const wishlistItems = computed(() => {
  return products.filter(product => wishlist.value.includes(product.id));
});

watch(cartItems, (newCartItems) => {
  console.log('WATCHING => Updated Cart Items:', newCartItems);
  if (newCartItems.length > 0) {
    remapCartItems();
  } else {
    productsFromCart.value = [];
    totalPrice.value = 0;
  }
});

function onCartUpdated() {
  console.log('Cart updated, remapping items...');
  remapCartItems();
}
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

.sticky-actions {
  position: fixed;
  left: 0;
  bottom: 80px;
  width: 100vw;
  background: #fff;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.08);
  z-index: 100;
  padding: 12px 8px 8px 8px;
}
</style>