<template>
  <!-- Product photos -->
  <v-card class="bg-transparent elevation-0" max-height="400px" tile>
    <v-carousel
      :continuous="true"
      :show-arrows="false"
      delimiter-icon="mdi-circle"
      color="primary"
      cycle
      hideDelimiterBackground
      height="350px"
    >
      <v-carousel-item
        v-for="(image, i) in productImgs" :key="i"
      >
        <v-img
          :src="image"
          height="350px"
          width="100%"
          cover
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-card>

  <v-card min-height="" class="pb-10">
    <!-- Product Price -->
    <v-card-title class="d-flex justify-space-between pb-0">
      <div class="d-flex flex-column">
        <span class="text-h5 font-weight-bold">${{ product?.price }}</span>
      </div>

      <div class="d-flex align-center">
        <SaleCountDown
          v-if="product?.discount"
        />
        <v-btn
          variant="tonal"
          icon="mdi-redo-variant"
          color="deep-orange-lighten-2"
          size="35"
          class="ml-2"
          @click="goBack"
        ></v-btn>
      </div>
    </v-card-title>
    <v-card-title
      v-if="product?.discount"
      class="text-subtitle-1 py-0"
    >
      <span class="text-red-lighten-3 text-decoration-line-through text-subtitle-2 font-weight-bold"> ${{ product?.originalPrice }}</span>
      <span class="discount-tag ml-2">-{{ product?.discount }}%</span>
    </v-card-title>

    <!-- Product Description -->
    <v-card-title class="text-subtitle-1 text-wrap">
      {{ product?.description }}
    </v-card-title>

    <!-- Variations -->
    <v-card-title class="d-flex justify-space-between align-center">
      <div class="left d-flex align-center">
        <span class="text-h5 font-weight-bold">Variations</span>
        <div class="selected-options ml-3">
          <v-chip
            v-if="selectedColor"
            class="mx-1 text-capitalize"
            variant="tonal"
            label
          >
            {{ selectedColor }}
          </v-chip>
          <v-chip
            v-if="selectedSize"
            class="mx-1 text-capitalize"
            variant="tonal"
            label
          >
            {{ selectedSize }}
          </v-chip>
        </div>
      </div>

      <div class="right">
        <v-btn
          variant="flat"
          color="primary"
          size="30"
          icon
          @click="dialog = true"
        >
          <v-icon icon="mdi-arrow-right" size="x-small" />
        </v-btn>
      </div>
    </v-card-title>
    <v-card-title class="d-flex ga-2">
      <div
        v-for="(image, i) in thumbernailImgs" :key="i"
        style="width: 100px; height: 100px; cursor: pointer;"
      >
        <v-img
          :src="image"
          height="100px"
          rounded="lg"
          contain
        ></v-img>
      </div>
    </v-card-title>

    <!-- Product Specifications -->
    <v-card-title class="text-h5 font-weight-bold">Specifications</v-card-title>

    <v-card-title class="text-h6 font-weight-bold">Material</v-card-title>
    <v-card-title class="text-subtitle-1 d-flex ga-2 py-0">
      <v-chip label class="bg-pink-lighten-5">{{ materialInfo.material1 }} {{ materialInfo.percentage1 }}%</v-chip>
      <v-chip label class="bg-pink-lighten-5">{{ materialInfo.material2 }} {{ materialInfo.percentage2 }}%</v-chip>
    </v-card-title>

    <v-card-title class="text-h6 font-weight-bold">Origin</v-card-title>
    <v-card-title class="text-subtitle-1 d-flex ga-2 py-0">
      <v-chip label class="bg-orange-lighten-5">{{ originInfo.adjective1 }}</v-chip>
      <v-chip label class="bg-orange-lighten-5">{{ originInfo.adjective2 }}</v-chip>
    </v-card-title>

    <v-card-title class="d-flex justify-space-between align-center">
      <span class="text-h6 font-weight-bold">Size guide</span>
      <v-btn
        variant="flat"
        color="primary"
        size="30"
        icon
        @click="sizeGuideDialog = true"
      >
        <v-icon icon="mdi-arrow-right" size="x-small" />
      </v-btn>
    </v-card-title>

    <!--Delivery -->
    <v-card-title class="text-h5 font-weight-bold pb-0">Delivery</v-card-title>
    <v-list class="pt-0">
      <v-list-item
        v-for="(option, i) in deliveryOptions" :key="i"
        class="mt-2 border-thin mx-2 rounded-lg"
        :value="option.title"
        style="border-color: #004CFF !important;"
        color="primary"
      >
        <template #prepend>
          {{ option.title }}
        </template>
        <template #title>
          <v-chip label variant="text" color="primary">{{ option.duration }}</v-chip>
        </template>
        <template #append>
          <span class="text-subtitle-1 font-weight-bold">{{ option.price }}</span>
        </template>
      </v-list-item>
    </v-list>

    <!-- Reviews & Rating -->
    <v-card-title class="text-h5 font-weight-bold pb-0">Rating & Reviews</v-card-title>
    <v-card-title class="text-h5 font-weight-bold py-0 d-flex align-center">
      <v-rating
        length="5"
        :model-value="product?.rating || 3"
        active-color="orange-lighten-1"
        density="compact"
        readonly
      ></v-rating>
      <v-chip label color="primary" class="font-weight-bold ml-2">{{ product?.rating || 3 }}/5</v-chip>
      <span class="text-subtitle-2 ml-2">({{ product?.reviewCount || 0 }} reviews)</span>
    </v-card-title>

    <ItemsReviewCard />

    <v-card-actions class="px-4">
      <v-btn
        variant="flat"
        color="primary"
        class="text-none rounded-lg"
        width="100%"
        @click="reviewDialog = true"
      >
        View All Reviews
      </v-btn>
    </v-card-actions>

    <v-card-title class="py-0">
      <ShopMostPopular />
    </v-card-title>

    <v-card class="py-0">
      <ProfileJustForYou />
    </v-card>
  <!-- End of Card -->
  </v-card>

  <!-- Product Options Dialog -->
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    min-height="50%"
    min-width="100%"
    location="bottom"
  >
    <v-card>
      <template #prepend>
        <v-img
          width="100"
          height="100"
          aspect-ratio="16/9"
          cover
          :src="product?.image || '/images/item-1.jpg'"
        ></v-img>
      </template>
      <template #title>
        <div class="d-flex flex-column justify-end">
          <span class="text-h4 font-weight-bold">${{ product?.price || '0.00' }}</span>
          <div class="selected-options">
            <v-chip
              v-if="selectedColor"
              class="ma-1 text-capitalize"
              variant="tonal"
              label
            >
              {{ selectedColor }}
            </v-chip>
            <v-chip
              v-if="selectedSize"
              class="ma-1 text-capitalize"
              variant="tonal"
              label
            >
              {{ selectedSize }}
            </v-chip>
          </div>
        </div>
      </template>

      <!-- Color Options -->
      <v-card-title class="text-h6 font-weight-bold">Color Options</v-card-title>
      <v-card-title>
        <v-item-group selected-class="bg-primary">
          <v-row>
            <v-col
              v-for="color in productColorOptions"
              :key="color.value"
              cols="3"
            >
              <v-item v-slot="{ isSelected, selectedClass, toggle }">
                <div
                  style="position: relative;"
                  @click="toggle?.(); selectedColor = color.value"
                >
                  <v-img
                    :src="color.image"
                    width="100"
                    height="100"
                    aspect-ratio="16/9"
                    cover
                  ></v-img>
                  
                  <!-- Check Signal-->
                  <v-avatar
                    v-if="isSelected || selectedColor === color.value"
                    size="20"
                    color="primary"
                    style="position: absolute; bottom: 3px; left: 3px;"
                  >
                    <v-icon size="10">mdi-check-bold</v-icon>
                  </v-avatar>
                </div>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-card-title>

      <!-- Size Options -->
      <v-card-title class="text-h6 font-weight-bold pb-0">Size</v-card-title>
      <v-card-title class="pt-0">
        <v-chip-group
          selected-class="text-primary"
          v-model="selectedSize"
        >
          <v-chip
            v-for="size in (product?.availableSizes || ['S', 'M', 'L', 'XL', 'XXL'])"
            :key="size"
            :text="size"
            :value="size"
            label
            color="primary"
            class="px-3"
          ></v-chip>
        </v-chip-group>
      </v-card-title> 

      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h6 font-weight-bold">Quantity</span>
        <div class="d-flex align-center">
          <v-btn
            variant="outlined"
            icon="mdi-minus"
            size="50"
            class="mr-2"
            color="primary"
            @click="quantity = Math.max(1, quantity - 1)"
          ></v-btn>
          <v-text-field
            v-model="quantity"
            type="number"
            variant="solo-filled"
            hide-details
            flat
            width="40"
            height="50"
            size="100"
            class="text-h1 font-weight-bold"
          ></v-text-field>
          <v-btn
            variant="outlined"
            icon="mdi-plus"
            size="50"
            class="ml-2"
            color="primary"
            @click="quantity++"
          ></v-btn>
        </div>
      </v-card-title>

      <v-card-actions class="justify-center">
        <v-btn
          variant="outlined"
          :class="['text-none rounded-lg text-white', action === 'add-to-cart' ? 'bg-black' : 'bg-primary']"
          width="100%"
          size="large"
          :text="action === 'add-to-cart' ? 'Add to Cart' : 'Buy Now'"
          @click="handleAction"
        >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Product Reivews Dialog -->
  <v-dialog
    v-model="reviewDialog"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <v-card>
      <template #append>
        <v-btn
          icon="mdi-close"
          variant="text"
          size="large"
          class="mr-2"
          @click="reviewDialog = false"
        ></v-btn>
      </template>
      <template #title>
        <h3>Reviews</h3>
      </template>

      <v-card-text>
        <ItemsReviewCard
          v-for="i in 5"
          :key="i"
        ></ItemsReviewCard>
      </v-card-text>
    </v-card>
  </v-dialog>

  <!-- Size Guide Dialog -->
  <v-dialog
    v-model="sizeGuideDialog"
    transition="dialog-bottom-transition"
    min-height="50%"
    min-width="100%"
    location="bottom"
  >
    <ShopSizeGuide
      @close="sizeGuideDialog = false"
    ></ShopSizeGuide>
  </v-dialog>

  
  <!-- Product Options at the bottom of screen -->
  <div class="sticky-actions">
    <v-card-actions class="justify-center">
      <v-rating
        :model-value="isInWishlist(productId) ? 1 : 0"
        clearable
        :length="1"
        :size="40"
        active-color="error"
        empty-icon="mdi-heart-outline"
        full-icon="mdi-heart"
        @click="handleWishlist"
      />
      <v-btn
        variant="outlined"
        class="text-none rounded-lg bg-black text-white"
        width="40%"
        size="large"
        @click="selectVariation('add-to-cart')"
      >
        Add to Cart
      </v-btn>
      <v-btn
        variant="flat"
        color="primary"
        class="text-none rounded-lg"
        width="40%"
        size="large"
        @click="selectVariation('buy-now')"
      >
        Buy Now
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'product'
});

import { useRouter } from 'vue-router';

const deliveryOptions = [
  {
    title: 'Standard',
    duration: '3-5 days',
    price: '$5.00'
  },
  {
    title: 'Express',
    duration: '1-2 days',
    price: '$10.00'
  }
];

const router = useRouter();
const productId = useRouteParams('id', null, { transform: Number });
const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
const { addToCart, isInCart } = useCart();
const { getProductById } = useProducts();

const action = ref('buy-now');
const dialog = ref(false);
const selectedColor = ref('');
const selectedSize = ref('');
const quantity = ref(1);
const reviewDialog = ref(false);
const sizeGuideDialog = ref(false);

const product = getProductById(productId.value);

// Use product's color options if available, otherwise use defaults
const productColorOptions = product?.availableColors || [
  { name: 'Red', value: 'red', image: '/images/item-1.jpg' },
  { name: 'Blue', value: 'blue', image: '/images/item-2.jpg' },
  { name: 'Green', value: 'green', image: '/images/item-3.jpg' },
  { name: 'Black', value: 'black', image: '/images/item-4.jpg' },
];

function selectVariation(type: string) {
  action.value = type;
  dialog.value = true;
}

function handleAction() {
  if (action.value === 'add-to-cart') {
    addProductToCart();
    dialog.value = false;
  } else if (action.value === 'buy-now') {
    addProductToCart();
    navigateTo({ name: 'cart-checkout' })
  }
}

function handleWishlist() {
  if (isInWishlist(productId.value)) {
    removeFromWishlist(productId.value);
  } else {
    addToWishlist({
      productId: productId.value,
      quantity: quantity.value,
      color: selectedColor.value,
      size: selectedSize.value
    });
  }
}

function addProductToCart() {
  const newQuantity = isInCart(productId.value) ? quantity.value + 1 : quantity.value;

  addToCart({
    productId: productId.value,
    quantity: newQuantity,
    color: selectedColor.value,
    size: selectedSize.value
  });
}

const productImgs = product?.images || Array.from({ length: 4 }, (_, i) => `/images/item-${i + 1}.jpg`);

const thumbernailImgs = product?.thumbnails || Array.from({ length: 3 }, (_, i) => `/images/item-${i + 1}.jpg`);

// Use static data from product or generate fallback
const materialInfo = product?.materials || {
  material1: 'Cotton',
  percentage1: 60,
  material2: 'Polyester',
  percentage2: 40
};

const originInfo = product?.origin || {
  adjective1: 'Premium',
  adjective2: 'Quality'
};

function goBack() {
  router.back();
}
</script>
<style scoped>
.sticky-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 5px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 100;
}
</style>