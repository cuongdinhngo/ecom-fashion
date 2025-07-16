<template>
  <v-card class="pa-1 elevation-0" tile>
    <v-row no-gutters>
      <!-- Product Image -->
      <v-col cols="5" class="">
        <v-card class="pa-1 elevation-2 rounded-lg">
          <v-responsive :aspect-ratio="16/9">
            <v-img
              :src="smallProductImg()"
              cover
              rounded="lg"
            ></v-img>
          </v-responsive>
        </v-card>
      </v-col>

      <!-- Product Details -->
      <v-col cols="7">
        <v-card-title class="text-subtitle-2 subtitle-two-lines py-0">
          {{ faker.commerce.productDescription() }}
        </v-card-title>
        <v-card-title class="text-subtitle-1 font-weight-bold">
          Order #{{ faker.string.numeric(9) }}
        </v-card-title>
        <v-sheet class="d-flex justify-space-between align-end py-0 px-4" min-height="80px">
          <v-chip label size="large" class="rounded-lg">{{ useDateFormat(new Date(deliveryDate), 'MMM, Do') }}</v-chip>
          <v-btn
            color="primary"
            variant="outlined"
            class="text-none rounded-lg"
            width="45%"
            @click="reviewDialog = true"
          >Review</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>

  <ProfileReviewDiaglog
    v-model:review-dialog="reviewDialog"
  />
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
const deliveryDate = faker.date.past();

const reviewDialog = ref(false);
</script>