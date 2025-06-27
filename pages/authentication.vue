<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column wrapper"
    min-height="100vh"
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
      <component
        :is="resolveAuthentication()"
      />
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
definePageMeta({
  layout: 'fullview',
  title: 'Shoppe - Home',
  meta: [
    { name: 'description', content: 'Welcome to Shoppe, your online store for beautiful products.' },
    { name: 'keywords', content: 'eCommerce, online store, shopping, fashion' }
  ]
});

import { AuthenticationAlphanumeric, AuthenticationPin } from '#components';
import { useRouteQuery } from '@vueuse/router';
const type = useRouteQuery('type', 'pin');

const resolveAuthentication = () => {
  switch (type.value) {
    case 'pin':
      return AuthenticationPin;
    case 'alphanumeric':
      return AuthenticationAlphanumeric;
  }
};
</script>

<style scoped>
.wrapper {
  background-image: url('/public/images/header-bubbles-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>