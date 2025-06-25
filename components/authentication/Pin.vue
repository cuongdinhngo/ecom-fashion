<template>
  <div class="d-flex justify-center align-center ga-2">
    <FormPin
      v-model:pin="pinOne"
      @update:pin="concatPin"
    ></FormPin>
    <FormPin
      v-model:pin="pinTwo"
      @update:pin="concatPin"
    ></FormPin>
    <FormPin
      v-model:pin="pinThree"
      @update:pin="concatPin"
    ></FormPin>
    <FormPin
      v-model:pin="pinFour"
      @update:pin="concatPin"
    ></FormPin>
  </div>
</template>
<script setup lang="ts">
const pinOne = ref('');
const pinTwo = ref('');
const pinThree = ref('');
const pinFour = ref('');
const pin = ref('');

function concatPin() {
  pin.value = pinOne.value + pinTwo.value + pinThree.value + pinFour.value;
  console.log('PIN:', pin.value);
}
</script>