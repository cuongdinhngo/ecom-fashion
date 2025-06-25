<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column wrapper"
    min-height="100vh"
  >
    <v-spacer></v-spacer>
    <v-card-title class="d-flex justify-center align-center flex-column">
      <div class="avatar-frame">
        <v-avatar
          size="91"
          image="/public/images/avatar.png"
        >
        </v-avatar>
      </div>

      <h2 class="my-4">Hello, Romina!!!</h2>
    </v-card-title>

    <v-card-title class="d-flex flex-column align-center">
      <p>Type your password</p>
      <div class="d-flex justify-center align-center ga-2 mt-6">
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

<style scoped>
.wrapper {
  background-image: url('/public/images/header-bubbles-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.avatar-frame {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>