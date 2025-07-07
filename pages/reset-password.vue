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
      />
    </v-card-title>
    <v-card-title class="d-flex justify-center align-center">
      <FormPassword
        label="Confirm Password"
      />
    </v-card-title>

    <v-spacer></v-spacer>

    <v-card-actions class="justify-center d-flex flex-column">
      <FormBigButton
        :to="{ name: 'index' }"
        title="Save"
      />

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

import { RecoveryConfirmation, RecoveryMethod } from '#components';
import { useRouteQuery } from '@vueuse/router';
const step = useRouteQuery('step', 'method');

const resolveRecovery = () => {
  switch (step.value) {
    case 'method':
      return RecoveryMethod;
    case 'confirmation':
      return RecoveryConfirmation;
  }
};
</script>