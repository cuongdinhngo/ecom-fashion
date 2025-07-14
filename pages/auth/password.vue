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
      <div class="w-100 d-flex flex-column align-center">
        <div class="w-100 d-flex justify-center mb-4">
          <v-rating
            :length="8"
            :size="32"
            :model-value="alphanumeric.length"
            :active-color="activeColor"
            empty-icon="mdi-circle-outline"
            full-icon="mdi-record-circle-outline"
            disabled
            @click="focusTextField"
          />
        </div>
        <div class="w-100 d-flex justify-center">
          <v-text-field
            ref="alphanumericInput"
            v-model="alphanumeric"
            maxlength="8"
            variant="solo-filled"
            flat
            max-width="200"
            class="hidden-block"
          />
        </div>

        <div class="w-100 d-flex justify-center">
          <NuxtLink
            :to="{ name: 'password-recovery'}"
            :class="[{'hidden-block': activeColor !== 'error'}, 'nuxt-link-reset']"
          ><span>Forgot your password?</span>
          </NuxtLink>
        </div>
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

const alphanumeric = ref('');
const alphanumericInput = ref();
const defaultValue = '12345678';
const activeColor = ref('primary');
const dialog = ref(false);

function focusTextField() {
  alphanumericInput.value?.focus();
}

watch(alphanumeric, (newValue) => {
  console.log('Alphanumeric input changed:', newValue);
  if (newValue.length === 8) {
      activeColor.value = alphanumeric.value === defaultValue ? 'primary' : 'error';
      if (alphanumeric.value === defaultValue) {
        dialog.value = true;
        setTimeout(() => {
          dialog.value = false;
          alphanumeric.value = '';
          activeColor.value = 'primary';
        }, 3000);
        navigateTo({ name: 'shop' });
      }
  }
  if (newValue.length === 0) {
    activeColor.value = 'primary';
  }
});
</script>