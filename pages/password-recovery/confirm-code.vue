<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column"
    min-height="100vh"
  >
    <v-spacer></v-spacer>
    <v-card-title class="d-flex justify-center align-center flex-column">
      <ItemsAvatar />

      <h2 class="my-4">Password Recovery</h2>

      <p class=" text-wrap text-center">
        Enter 4-digits code we sent you on your phone number
      </p>
    </v-card-title>

    <v-card-title class="d-flex justify-center align-center flex-column">
      <p class="font-weight-bold">+84*******00</p>
      <div class="w-100 d-flex justify-center mb-4 mt-8 ga-2">
        <FormPin
          ref="pinOneRef"
          v-model:pin="pinOne"
          :type="'text'"
          @update:pin="concatPin"
          @move-next="focusNext(0)"
          @move-prev="focusPrev(0)"
        ></FormPin>
        <FormPin
          ref="pinTwoRef"
          v-model:pin="pinTwo"
          :type="'text'"
          @update:pin="concatPin"
          @move-next="focusNext(1)"
          @move-prev="focusPrev(1)"
        ></FormPin>
        <FormPin
          ref="pinThreeRef"
          v-model:pin="pinThree"
          :type="'text'"
          @update:pin="concatPin"
          @move-next="focusNext(2)"
          @move-prev="focusPrev(2)"
        ></FormPin>
        <FormPin
          ref="pinFourRef"
          v-model:pin="pinFour"
          :type="'text'"
          @update:pin="concatPin"
          @move-next="focusNext(3)"
          @move-prev="focusPrev(3)"
        ></FormPin>
      </div>
    </v-card-title>

    <v-spacer></v-spacer>

    <v-card-actions class="justify-center d-flex flex-column">
      <v-btn
        color="pink-lighten-2"
        variant="flat"
        class="text-none rounded-xl"
        width="70%"
        size="x-large"
        @click="sendAgain()"
      >
        Send Again
      </v-btn>

      <FormCancel />
    </v-card-actions>
  </v-card>
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

  <v-dialog
    v-model="sendAgainDialog"
    width="auto"
  >
    <v-card class="pa-4">
      <v-card-title class="text-wrap text-center">
        New code has been sent to your phone number.
      </v-card-title>
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fullview',
  title: 'Shoppe - Home',
  backgroundImage: 'header-bubbles-bg.png',
  meta: [
    { name: 'description', content: 'Welcome to Shoppe, your online store for beautiful products.' },
    { name: 'keywords', content: 'eCommerce, online store, shopping, fashion' }
  ]
});

const defaultPin = '1234';

const pinOne = ref('');
const pinTwo = ref('');
const pinThree = ref('');
const pinFour = ref('');
const pin = ref('');

// Template refs for each pin input
const pinOneRef = ref();
const pinTwoRef = ref();
const pinThreeRef = ref();
const pinFourRef = ref();

const dialog = ref(false);
const sendAgainDialog = ref(false);
const counter = ref(0);

function sendAgain () {
  sendAgainDialog.value = true;
  setTimeout(() => {
    sendAgainDialog.value = false;
  }, 3000);
}

// Function to focus next input
function focusNext(currentIndex: number) {
  const refs = [pinOneRef, pinTwoRef, pinThreeRef, pinFourRef];
  const nextIndex = currentIndex + 1;
  
  if (nextIndex < refs.length) {
    refs[nextIndex].value?.focus();
  }
}

// Function to focus previous input
function focusPrev(currentIndex: number) {
  const refs = [pinOneRef, pinTwoRef, pinThreeRef, pinFourRef];
  const prevIndex = currentIndex - 1;
  
  if (prevIndex >= 0) {
    refs[prevIndex].value?.focus();
  }
}

function concatPin() {
  pin.value = pinOne.value + pinTwo.value + pinThree.value + pinFour.value;
  console.log('PIN:', pin.value);
  if (pin.value.length === 4) {
    if (pin.value === defaultPin) {
      counter.value = 0;
      navigateTo({ name: 'password-recovery-reset' });
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

// Auto-focus the first input when component mounts
onMounted(() => {
  nextTick(() => {
    pinOneRef.value?.focus();
  });
});
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