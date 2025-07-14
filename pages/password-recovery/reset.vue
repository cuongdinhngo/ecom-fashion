<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column"
    min-height="100vh"
  >
    <v-spacer></v-spacer>
    <v-card-title class="d-flex justify-center align-center flex-column">
      <ItemsAvatar />

      <h2 class="my-4">Set New Password</h2>

      <p class=" text-wrap text-center">Please, setup a new password for your account</p>
    </v-card-title>

    <v-card-title class="d-flex justify-center align-center">
      <FormPassword
        label="New Password"
        @update:password="password = $event"
      />
    </v-card-title>
    <v-card-title class="d-flex justify-center align-center">
      <FormPassword
        label="Confirm Password"
        @update:password="confirmPassword = $event"
      />
    </v-card-title>

    <v-spacer></v-spacer>

    <v-card-actions class="justify-center d-flex flex-column">
      <v-btn
        color="primary"
        variant="flat"
        class="text-none rounded-xl"
        width="100%"
        size="x-large"
        @click="handleSubmit"
      >
        <span class="btn-text">Save</span>
      </v-btn>

      <FormCancel />
    </v-card-actions>
  </v-card>
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

const password = ref('');
const confirmPassword = ref('');

function handleSubmit() {
  if (password.value && confirmPassword.value && password.value === confirmPassword.value) {
    navigateTo({ name: 'shop' });
  } else {
    console.error('Passwords do not match or are empty => ', password.value, confirmPassword.value);
    alert('Passwords do not match or are empty.');
  }
}

</script>