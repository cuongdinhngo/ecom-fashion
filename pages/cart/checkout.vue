<template>
  <v-card-title class="text-h5 px-0">Payment</v-card-title>

  <v-card min-height="90vh" class="pa-0 bg-white mb-15" tile elevation="0">
    <!-- Shipping Address -->
    <v-list-item
      :subtitle="`${shippingAddress.address}, ${shippingAddress.ward} Ward, ${shippingAddress.district} District, ${shippingAddress.state} City`"
      link
      class="bg-grey-lighten-3 rounded-lg pa-3 my-2"
    >
      <template #title>
        <span class="text-subtitle-1 font-weight-bold">Shipping Address</span>
      </template>
      <template #append>
        <v-btn
          icon variant="flat" color="primary" size="25" class="ml-4"
          @click="shippingAddressDialog = true"
        >
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
        <span class="text-subtitle-1 font-weight-bold">Contact Information</span>
      </template>
      <v-card-subtitle class="px-0">
        <p>{{ contactInformation.phone }}</p>
        <p>{{ contactInformation.email }}</p>
      </v-card-subtitle>
      <template #append>
        <v-btn icon variant="flat" color="primary" size="25" class="ml-4" @click="contactInformationDialog = true">
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

      <!-- Standard Shipping -->
      <v-item v-slot="{ isSelected, selectedClass, toggle }" value="standard">
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

      <!-- Express Shipping -->
      <v-item v-slot="{ isSelected, selectedClass, toggle }" value="express">
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
    </v-card-title>
    <v-card-title class="px-0 d-flex ga-4">
      <v-chip
        prepend-icon="mdi-credit-card-outline"
        class="text-subtitle-1 font-weight-bold"
        color="primary"
        variant="tonal"
        text="Credit Card"
        @click="paymentMethod = 'credit-card'"
      >
        <template #append>
          <v-icon
            v-if="paymentMethod === 'credit-card'"
            color="green"
            icon="mdi-check-circle"
            class="ml-2"
          />
        </template>
      </v-chip>

      <v-chip
        prepend-icon="mdi-cash-multiple"
        class="text-subtitle-1 font-weight-bold"
        color="primary"
        variant="tonal"
        text="Cash on Delivery"
        @click="paymentMethod = 'cash-on-delivery'"
      >
        <template #append>
          <v-icon
            v-if="paymentMethod === 'cash-on-delivery'"
            color="green"
            icon="mdi-check-circle"
            class="ml-2"
          />
        </template>
      </v-chip>
    </v-card-title>
  </v-card>

  <!-- Shipping Address Dialog -->
  <v-dialog
    v-model="shippingAddressDialog"
    transition="dialog-bottom-transition"
    min-width="100%"
  >
    <template v-slot:default="{ isActive }">
      <v-card width="100%">
        <v-card-title class="d-flex justify-space-between align-center py-4">
          <span class="text-h5 font-weight-bold">Shipping Address</span>
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="shippingAddress.address"
            label="Address"
            variant="outlined"
            color="primary"
          ></v-text-field>
          <v-text-field
            v-model="shippingAddress.ward"
            label="Ward"
            variant="outlined"
            color="primary"
          ></v-text-field>
          <v-text-field
            v-model="shippingAddress.district"
            label="District"
            variant="outlined"
            color="primary"
          ></v-text-field>
          <v-text-field
            v-model="shippingAddress.state"
            label="State"
            variant="outlined"
            color="primary"
          ></v-text-field>
          <v-btn
            variant="flat"
            color="primary"
            class="text-none rounded-lg"
            width="100%"
            @click="shippingAddressDialog = false"
          >Save Change</v-btn>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>

  <!-- Contact Information Dialog -->
  <v-dialog
    v-model="contactInformationDialog"
    transition="dialog-bottom-transition"
    min-width="100%"
  >
    <template v-slot:default="{ isActive }">
      <v-card width="100%">
        <v-card-title class="d-flex justify-space-between align-center py-4">
          <span class="text-h5 font-weight-bold">Contact Information</span>
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="contactInformation.phone"
            label="Phone"
            variant="outlined"
            color="primary"
          ></v-text-field>
          <v-text-field
            v-model="contactInformation.email"
            label="Email"
            variant="outlined"
            color="primary"
          ></v-text-field>
          <v-btn
            variant="flat"
            color="primary"
            class="text-none rounded-lg"
            width="100%"
            @click="contactInformationDialog = false"
          >Save Change</v-btn>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>

  <!-- Active Vouchers Dialog -->
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
        @click="processDialog = true; processPayment()"
      >Pay</v-btn>
    </v-card-title>
  </div>

  <!-- Payment Processing Dialog -->
  <v-dialog
    v-model="processDialog"
    transition="dialog-bottom-transition"
  >
    <template v-slot:default="{ isActive }">
      <div style="position: relative;">
        <!-- Payment Processing Card -->
        <v-card
          v-if="isProcessing"
          class="rounded-xl py-10" width="100%"
        >
          <v-card-title class="text-h5 font-weight-bold text-center">
            Processing Payment
          </v-card-title>
          <v-card-title class="text-center text-subtitle-2 text-wrap">
            Please wait while we process your payment...
          </v-card-title>
        </v-card>
        <div
          v-if="isProcessing"
          class="wrapper-progress"
        >
          <v-progress-circular
            indeterminate
            color="primary"
            size="60"
            width="10"
            class="mx-auto my-6"
          ></v-progress-circular>
        </div>

        <!-- Failed Payment -->
        <v-card
          v-if="paymentStatus === 'failed'"
          class="py-10 rounded-xl" width="100%"
        >
          <v-card-title class="text-h6 font-weight-bold text-center text-wrap">
            We couldn't process your payment
          </v-card-title>
          <v-card-title class="text-center text-subtitle-2 text-wrap">
            Please try again or change your payment.
          </v-card-title>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              variant="flat"
              color="black"
              @click="processPayment()"
            >Try Again</v-btn>
            <v-btn
              variant="flat"
              color="grey"
              @click="processDialog = false"
            >Change</v-btn>
          </v-card-actions>
        </v-card>
        <div
          v-if="paymentStatus === 'failed'"
          class="wrapper-progress"
        >
          <v-btn
            icon
            variant="flat"
            color="error"
            size="60"
          ><v-icon size="50">mdi-alert-circle</v-icon></v-btn>
        </div>

        <!-- Sucessful Payment -->
        <v-card
          v-if="paymentStatus === 'success'"
          class="py-10 rounded-xl" width="100%"
        >
          <v-card-title class="text-h5 font-weight-bold text-center">
            DONE!
          </v-card-title>
          <v-card-title class="text-center text-subtitle-2 text-wrap">
            Your payment has been successfully processed.
          </v-card-title>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              variant="flat"
              color="grey"
              :to="{ name: 'profile-to-receive'}"
            >Track Your Order</v-btn>
          </v-card-actions>
        </v-card>
        <div
          v-if="paymentStatus === 'success'"
          class="wrapper-progress"
        >
          <v-btn
            icon
            variant="flat"
            color="primary"
            size="60"
          >
            <v-icon size="50">mdi-check-bold</v-icon>
          </v-btn>
        </div>

      </div>
    </template>
  </v-dialog>
</template>
<script lang="ts" setup>
import { faker } from '@faker-js/faker';

const { cartItems } = useCart();
const { products } = useProducts();

const shippingAddress = ref({
  address: '666 Hoang Hoa st',
  ward: 'Binh Minh',
  district: 'Hai Chau',
  state: 'Da Nang',
});

const contactInformation = ref({
  phone: '+908630585643',
  email: 'abc.123@local.test'
});

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

const shippingOption = ref('standard');
const selectedVoucher = ref({});
const selectedShippingOption = ref('standard');
const totalPrice = ref(0);
const paymentStatus = ref('');
const contactInformationDialog = ref(false);
const shippingAddressDialog = ref(false);
const voucherDialog = ref(false);
const processDialog = ref(false);
const isProcessing = ref(false);
const paymentMethod = ref('cash-on-delivery');

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
  totalPrice.value = Number(sellProducts.value.reduce((total, item) => {
    return total + (item ? Number(item.price) * Number(item.quantity) : 0);
  }, 0).toFixed(2));
});

watch(selectedVoucher, (newValue) => {
  console.log('Selected Voucher:', newValue);
  if (newValue) {
    const tmpTotalPrice = Number(sellProducts.value.reduce((total, item) => {
    return total + (item ? Number(item.price) * Number(item.quantity) : 0);
  }, 0).toFixed(2));
    totalPrice.value = Number((tmpTotalPrice * (1 - Number(newValue.value) / 100)).toFixed(2));
  }
});

watch(shippingOption, (newValue) => {
  let tmpTotalPrice = 0;
  if (newValue === 'express' && selectedShippingOption.value === 'standard') {
    tmpTotalPrice = Number((totalPrice.value + 12).toFixed(2));
  } else if (newValue === 'standard' && selectedShippingOption.value === 'express') {
    tmpTotalPrice = Number((totalPrice.value - 12).toFixed(2));
  } else {
    tmpTotalPrice = totalPrice.value;
  }
  selectedShippingOption.value = newValue;
  totalPrice.value = tmpTotalPrice;
});

function processPayment() {
  console.log('Processing payment...');
  paymentStatus.value = '';
  isProcessing.value = true;
  setTimeout(() => {
    paymentStatus.value = faker.datatype.boolean() ? 'failed' : 'success';
    console.log('Payment processed => ', paymentStatus.value);
    isProcessing.value = false;
  }, 3000);
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

.wrapper-progress {
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}
</style>