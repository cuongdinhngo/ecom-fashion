<template>
  <SettingsHeader />

  <v-card-title class="text-h6 px-0">Shipping Address</v-card-title>

  <v-card-title class="px-0 d-flex align-center justify-space-between">
    <div class="d-flex flex-column">
      <span class="text-caption">Country</span>
      <span class="text-h6 font-weight-bold text-primary">Choose you country</span>
    </div>
    <v-btn
      variant="flat"
      color="primary"
      icon
      size="small"
    >
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-card-title>

  <v-card-text class="px-0">
    <span class="text-caption">Address</span>
    <v-text-field
      v-model="address"
      placeholder="Required"
      variant="solo-filled"
      flat
      hide-details
      bg-color="blue-lighten-5"
      rounded="lg"
    />
  </v-card-text>

  <v-card-text class="px-0">
    <span class="text-caption">Town/ City</span>
    <v-text-field
      v-model="city"
      placeholder="Required"
      variant="solo-filled"
      flat
      hide-details
      bg-color="blue-lighten-5"
      rounded="lg"
    />
  </v-card-text>

  <v-card-text class="px-0">
    <span class="text-caption">Postcode</span>
    <v-text-field
      v-model="postcode"
      placeholder="Required"
      variant="solo-filled"
      flat
      hide-details
      bg-color="blue-lighten-5"
      rounded="lg"
    />
  </v-card-text>

  <v-card-text class="px-0">
    <v-btn
      variant="flat"
      color="primary"
      class="text-none rounded-lg"
      width="100%"
      size="large"
    >
      Save Address
    </v-btn>
  </v-card-text>
</template>
<script lang="ts" setup>
const address = ref('');
const city = ref('');
const postcode = ref('');
const contry = ref('');
</script>