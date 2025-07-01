<template>
  <v-card-title class="text-h5 px-0">Payment</v-card-title>

  <v-card min-height="90vh" class="pa-0 bg-white" tile elevation="0">
    <!-- Shipping Address -->
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

    <!-- Contact Information -->
    <v-list-item
      link
      class="bg-grey-lighten-3 rounded-lg pa-3 my-2"
    >
      <template #title>
        <span class="text-subtitle-1 font-weight-bold">Shipping Address</span>
      </template>
      <v-card-subtitle class="px-0">
        <p>+908630585643</p>
        <p>abc.123@local.test</p>
      </v-card-subtitle>
      <template #append>
        <v-btn icon variant="flat" color="primary" size="25" class="ml-4">
          <v-icon size="17">mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-list-item>

    <!-- Payment Product -->
    <v-card-title class="text-h6 font-weight-bold pa-0 d-flex align-center justify-space-between mt-6">
      <div class="d-flex align-center">
        Items
        <span class="cart-counts bg-blue-lighten-4 text-subtitle-1 ml-2">{{ sellProducts.length }}</span>
      </div>
      <v-btn
        :variant="selectedVoucher.value ? 'flat' : 'outlined'"
        color="primary"
        class="rounded-xl text-none"
        @click="voucherDialog = true"
      >
        {{ selectedVoucher.value ? `${selectedVoucher.value}% Discount` : `Add Voucher` }}
      </v-btn>
    </v-card-title>
    <v-card-text class="px-0 py-4">
      <ItemsPaymentItemCard
        v-for="(item, index) in sellProducts"
        :key="index"
        :product="item"
      />
    </v-card-text> 

    <v-card-title class="text-h6 font-weight-bold px-0">Shipping Options</v-card-title>
    <v-item-group selected-class="" v-model="shippingOption">
      <v-item v-slot="{ isSelected, selectedClass, toggle }" value="standard">
        <!-- Standard Shipping -->
        <v-list-item
          @click="toggle()"
          :class="[
            'rounded-lg py-2 my-2',
            isSelected ? 'bg-blue-lighten-5' : 'bg-grey-lighten-3',
            selectedClass
          ]"
          min-width="170px"
        >
          <template #prepend>
            <v-btn
              v-if="isSelected"
              icon
              variant="flat"
              color="primary"
              size="25"
            ><v-icon size="17">mdi-check-bold</v-icon></v-btn>
            <v-btn
              v-else
              icon
              variant="plain"
              color="grey"
              size="25"
            ><v-icon size="17">mdi-circle-outline</v-icon></v-btn>
          </template>
          <template #title>
            <div class="d-flex align-center ga-2 ml-3">
              <span :class="[
                isSelected ? 'font-weight-bold' : '',
                'text-h6'
              ]">Standard</span>
              <v-chip label color="primary">5-7 days</v-chip>
            </div>
          </template>
          <template #append>
            <span class="text-h6 font-weight-bold">FREE</span>
          </template>
        </v-list-item>
      </v-item>

      <v-item v-slot="{ isSelected, selectedClass, toggle }" value="express">
        <!-- Express Shipping -->
        <v-list-item
          @click="toggle()"
          :class="[
            'rounded-lg py-2 my-2',
            isSelected ? 'bg-blue-lighten-5' : 'bg-grey-lighten-3',
            selectedClass
          ]"
          min-width="170px"
        >
          <template #prepend>
            <v-btn
              v-if="isSelected"
              icon
              variant="flat"
              color="primary"
              size="25"
            ><v-icon size="17">mdi-check-bold</v-icon></v-btn>
            <v-btn
              v-else
              icon
              variant="plain"
              color="grey"
              size="25"
            ><v-icon size="17">mdi-circle-outline</v-icon></v-btn>
          </template>
          <template #title>
            <div class="d-flex align-center ga-2 ml-3">
              <span :class="[
                isSelected ? 'font-weight-bold' : '',
                'text-h6'
              ]">Express</span>
              <v-chip label color="primary">1-2 days</v-chip>
            </div>
          </template>
          <template #append>
            <span class="text-h6 font-weight-bold">$12.00</span>
          </template>
        </v-list-item>
      </v-item>
    </v-item-group>
    <v-card-subtitle class="text-caption px-0">
      Delivery on or before {{ recievedDate }}
    </v-card-subtitle>

    <!-- Payment Method -->
    <v-card-title class="d-flex justify-space-between align-center px-0">
      <span class="text-h6 font-weight-bold">Payment Method</span>
      <v-btn
        icon
        variant="flat"
        color="primary"
        size="small"
      ><v-icon>mdi-pencil</v-icon></v-btn>
    </v-card-title>
    <v-card-title class="px-0 d-flex ga-4">
      <v-chip
        prepend-icon="mdi-credit-card-outline"
        class="text-subtitle-1 font-weight-bold"
        color="primary"
        variant="tonal"
      >Credit Card</v-chip>

      <v-chip
        prepend-icon="mdi-cash-multiple"
        class="text-subtitle-1 font-weight-bold"
        color="primary"
        variant="tonal"
      >Cash on Delivery</v-chip>
    </v-card-title>
  </v-card>

  <v-dialog
    v-model="voucherDialog"
    transition="dialog-bottom-transition"
    min-width="100%"
  >
    <template v-slot:default="{ isActive }">
      <v-card width="100%">
        <v-card-title class="d-flex justify-space-between align-center py-4">
          <span class="text-h5 font-weight-bold">Active Vouchers</span>
          <v-btn
            icon
            variant="outlined"
            size="25"
            @click="isActive.value = false"
          ><v-icon size="17">mdi-close</v-icon></v-btn>
        </v-card-title>

        <ItemsVoucherCard
          v-for="(voucher, index) in vouchers"
          :key="index"
          :voucher="voucher"
          v-model:selected-voucher="selectedVoucher"
        />
      </v-card>
    </template>
  </v-dialog>

  <!-- Total price & Pay -->
  <div class="sticky-actions">
    <v-card-title class="d-flex justify-space-between align-center px-0 mb-0">
      <span class="text-h6 font-weight-bold">Total ${{ totalPrice }}</span>
      <v-btn
        variant="flat"
        class="text-none rounded-lg"
        color="black"
        width="40%"
        :to="{ name: 'cart-checkout' }"
      >Pay</v-btn>
    </v-card-title>
  </div>
</template>
<script lang="ts" setup>
const { cartItems } = useCart();
const { products } = useProducts();
const shippingOption = ref('standard');

const totalPrice = ref(0);

const recievedDate = computed(() => {
  const today = new Date();
  const daysToAdd = shippingOption.value === 'standard' ? 7 : 2;
  const arrivalDate = new Date(today);
  arrivalDate.setDate(arrivalDate.getDate() + daysToAdd);
  return useDateFormat(arrivalDate, 'dddd MMMM Do, YYYY');
});

const sellProducts = computed(() => {
  return cartItems.value.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      return {
        ...product,
        ...item
      };
    }
    return null;
  });
});

onMounted(() => {
  totalPrice.value = sellProducts.value.reduce((total, item) => {
    return total + (item ? Number(item.price) * Number(item.quantity) : 0);
  }, 0).toFixed(2);
});


const voucherDialog = ref(false);
const vouchers = ref([
  {
    title: 'First Purchase',
    description: 'off for your next order',
    value: '5',
    icon: 'mdi-ticket-percent',
    expiredDate: 'Jul 25th, 25'
  },
  {
    title: 'Summer Sale',
    description: 'off on all items',
    value: '10',
    icon: 'mdi-gift-outline',
    expiredDate: 'Aug 15th, 25'
  }
]);
const selectedVoucher = ref({});

watch(selectedVoucher, (newValue) => {
  console.log('Selected Voucher:', newValue);
  if (newValue) {
    totalPrice.value = (Number(totalPrice.value) * (1 - Number(newValue.value) / 100)).toFixed(2);
  }
});

watch(shippingOption, (newValue) => {
  console.log('Selected Shipping Option:', newValue);
  if (newValue === 'express') {
    totalPrice.value = (Number(totalPrice.value) + 12).toFixed(2);
  } else {
    totalPrice.value = (Number(totalPrice.value) - 12).toFixed(2);
  }
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

.item-counts {
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>