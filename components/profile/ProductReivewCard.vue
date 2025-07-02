<template>
  <v-card class="px-2 py-4 bg-white elevation-0" tile>
    <v-row no-gutters>
      <!-- Product Image -->
      <v-col cols="5" class="elevation-2 pa-2 rounded-lg">
        <v-img
          :src="smallProductImg()"
          height="110px"
          width="100%"
          aspect-ratio="16/9"
          cover
          rounded="lg"
        ></v-img>
      </v-col>

      <!-- Product Details -->
      <v-col cols="7">
        <v-card-title class="text-subtitle-2 subtitle-two-lines py-0">
          {{ faker.commerce.productDescription() }}
        </v-card-title>
        <v-card-title class="text-subtitle-1 font-weight-bold">
          Order #{{ faker.string.numeric(9) }}
        </v-card-title>
        <v-card-title class="d-flex justify-space-between align-center py-0">
          <v-chip label size="large" class="rounded-lg">{{ useDateFormat(new Date(deliveryDate), 'MMM, Do') }}</v-chip>
          <v-btn
            color="primary"
            variant="outlined"
            class="text-none rounded-lg"
            width="45%"
          >Review</v-btn>
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
const deliveryDate = faker.date.past();
</script>