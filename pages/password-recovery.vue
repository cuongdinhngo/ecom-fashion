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
        {{
          step === 'method' ? 
          'How you would like to restore your password?' :
          'Enter 4-digits code we sent you on your phone number'
        }}
      </p>
    </v-card-title>

    <v-card-title class="d-flex justify-center align-center flex-column">
      <component
        :is="resolveRecovery()"
      />
    </v-card-title>

    <v-spacer></v-spacer>

    <v-card-actions class="justify-center d-flex flex-column">
      <FormBigButton
        v-if="step === 'method'"
        :to="{ name: 'index' }"
        title="Next"
      />
      <FormBigButton
        v-else
        :to="{ name: 'index' }"
        title="Send Again"
        width="70%"
        color="pink-lighten-2"
      />

      <FormCancel />
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fullview',
  title: 'Shoppe - Home',
  backgroundImage: '/images/header-bubbles-bg.png',
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

<style scoped>
</style>