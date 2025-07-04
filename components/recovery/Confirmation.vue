<template>
  <p class="font-weight-bold">+84*******00</p>
  <div class="w-100 d-flex justify-center mb-4 mt-8 ga-2">
    <FormPin
      v-model:pin="pinOne"
      :type="'text'"
      @update:pin="concatPin"
    ></FormPin>
    <FormPin
      v-model:pin="pinTwo"
      :type="'text'"
      @update:pin="concatPin"
    ></FormPin>
    <FormPin
      v-model:pin="pinThree"
      :type="'text'"
      @update:pin="concatPin"
    ></FormPin>
    <FormPin
      v-model:pin="pinFour"
      :type="'text'"
      @update:pin="concatPin"
    ></FormPin>
  </div>

  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-card class="pb-4 pt-15">
      <v-card-title class="text-wrap text-center">
        Your attempts have been exceeded. Please wait for 30 mins before trying again.
      </v-card-title>
      <template v-slot:actions>
        <v-btn
          size="large"
          class="mx-auto bg-black text-white rounded-xl"
          text="Ok"
          width="70%"
          @click="dialog = false"
        ></v-btn>
      </template>
    </v-card>
    <div class="frame-circle elevation-10">
      <v-icon size="64" class="text-error">mdi-alert-circle</v-icon>
    </div>
  </v-dialog>
</template>
<script setup lang="ts">
const defaultPin = '1234';

const pinOne = ref('');
const pinTwo = ref('');
const pinThree = ref('');
const pinFour = ref('');
const pin = ref('');

const dialog = ref(false);
const counter = ref(0);

function concatPin() {
  pin.value = pinOne.value + pinTwo.value + pinThree.value + pinFour.value;
  console.log('PIN:', pin.value);
  if (pin.value.length === 4) {
    if (pin.value === defaultPin) {
      counter.value = 0;
    } else {
      counter.value++;
      if (counter.value >= 3) {
        dialog.value = true;
        counter.value = 0;
      }
    }
    pinOne.value = '';
    pinTwo.value = '';
    pinThree.value = '';
    pinFour.value = '';
  }
}
</script>
<style scoped>
.frame-circle {
  position: relative;
  top: -290px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>