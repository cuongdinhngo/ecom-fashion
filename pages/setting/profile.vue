<template>
  <v-card-title class="text-h4 font-weight-bold px-0">Settings</v-card-title>

  <v-card-title class="text-h6 px-0">Your Profile</v-card-title>

  <v-card tile elevation="0" class="bg-transparent py-2">
    <ItemsAvatar
      :size="100"
      :frame-size="{ width: '120px', height: '120px' }"
    />
    <v-btn
      icon
      variant="flat"
      color="primary"
      style="position: relative; top: -120px; right: -80px;"
      size="x-small"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </v-card>

  <v-card-text class="px-0">
    <v-text-field
      v-model="userName"
      placeholder="Your Name"
      variant="solo-filled"
      flat
      hide-details
      bg-color="blue-lighten-5"
    />
  </v-card-text>

  <v-card-text class="px-0">
    <v-text-field
      v-model="email"
      placeholder="Your Email"
      variant="solo-filled"
      flat
      hide-details
      bg-color="blue-lighten-5"
    />
  </v-card-text>

  <v-card-text class="px-0">
    <v-text-field
      v-model="password"
      placeholder="Your Password"
      variant="solo-filled"
      hide-details
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      @click:append-inner="visible = !visible"
      flat
      bg-color="blue-lighten-5"
    />
  </v-card-text>

  <v-card-text class="px-0">
    <v-btn
      color="primary"
      variant="flat"
      block
    >Save Changes</v-btn>
  </v-card-text>
</template>
<script lang="ts" setup>
import { faker } from '@faker-js/faker';

const userName = ref(faker.person.fullName());
const email = ref(faker.internet.email());
const password = ref(faker.internet.password());
const visible = ref(false);
</script>