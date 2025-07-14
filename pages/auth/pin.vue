<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column"
    min-height="100vh"
    tile
  >
    <v-spacer></v-spacer>
    <v-card-title class="d-flex justify-center align-center flex-column">
      <ItemsAvatar />

      <h2 class="my-4">Hello, Romina!!!</h2>
    </v-card-title>

    <v-card-title class="d-flex flex-column align-center">
      <p>Type your password</p>
    </v-card-title>
    <v-card-title>
      <div class="d-flex justify-center align-center ga-2">
        <FormPin
          ref="pinOneRef"
          v-model:pin="pinOne"
          @update:pin="concatPin"
          @move-next="focusNext(0)"
          @move-prev="focusPrev(0)"
        ></FormPin>
        <FormPin
          ref="pinTwoRef"
          v-model:pin="pinTwo"
          @update:pin="concatPin"
          @move-next="focusNext(1)"
          @move-prev="focusPrev(1)"
        ></FormPin>
        <FormPin
          ref="pinThreeRef"
          v-model:pin="pinThree"
          @update:pin="concatPin"
          @move-next="focusNext(2)"
          @move-prev="focusPrev(2)"
        ></FormPin>
        <FormPin
          ref="pinFourRef"
          v-model:pin="pinFour"
          @update:pin="concatPin"
          @move-next="focusNext(3)"
          @move-prev="focusPrev(3)"
        ></FormPin>
      </div>
    </v-card-title>

    <v-card-title class="text-center">
      <NuxtLink
        :to="{ name: 'password-recovery-choose-method'}"
        :class="[{'hidden-block': activeColor !== 'error'}, 'nuxt-link-reset']"
      >
        <span>Forgot your password?</span>
      </NuxtLink>
    </v-card-title>

    <v-card-title class="text-center">
      <NuxtLink :to="{ name: 'auth-password' }" class="nuxt-link-reset">
        <p class="text-subtitle-2">Use Combined Code</p>
      </NuxtLink>
    </v-card-title>

    <v-spacer></v-spacer>
    <v-card-actions class="justify-center d-flex flex-column">
      <v-list-item class="text-black">
        <template #title>
          <v-btn
            variant="text"
            class="text-subtitle-2"
            :to="{ name: 'index' }"
          >
            <template #append>
              <v-btn
                size="x-small"
                variant="flat"
                icon="mdi-arrow-right"
                color="primary"
              ></v-btn>
            </template>
            Not you?
          </v-btn>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>

  <v-dialog
    v-model="dialog"
    width="100%"
  >
    <v-sheet class="d-flex justify-center align-center bg-transparent elevation-0" min-height="150">
      <v-progress-circular indeterminate :size="75" color="primary"></v-progress-circular>
    </v-sheet>
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

const pinOne = ref('');
const pinTwo = ref('');
const pinThree = ref('');
const pinFour = ref('');
const pin = ref('');

const pinOneRef = ref();
const pinTwoRef = ref();
const pinThreeRef = ref();
const pinFourRef = ref();

const defaultPin = '1234';
const dialog = ref(false);
const activeColor = ref('primary');

function concatPin() {
  pin.value = pinOne.value + pinTwo.value + pinThree.value + pinFour.value;
  console.log('PIN:', pin.value);
  if (pin.value === defaultPin) {
    dialog.value = true;
    setTimeout(() => {
      dialog.value = false;
    }, 3000);
    navigateTo({ name: 'shop' });
  } else {
    activeColor.value = 'error';
  }
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

// Auto-focus the first input when component mounts
onMounted(() => {
  nextTick(() => {
    pinOneRef.value?.focus();
  });
});
</script>