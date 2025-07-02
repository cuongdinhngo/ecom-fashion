<template>
  <v-card tile class="bg-white elevation-0 my-4 py-1">
    <v-row no-gutters>
      <v-col cols="6">
        <v-card class="rounded-lg elevation-2 bg-white" height="165px">
          <v-responsive :aspect-ratio="1">
            <v-img
              :src="smallProductImg()"
              cover
              height="155px"
              class="ma-1 rounded-lg"
            ></v-img>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card tile elevation="0" class="bg-white">
          <v-card-subtitle class="text-body-2 subtitle-two-lines px-2">
            {{ faker.commerce.productDescription() }}
          </v-card-subtitle>

          <v-card-title></v-card-title>

          <v-card-actions class="text-subtitle-1 font-weight-bold">
            Order #{{ faker.string.numeric(10) }}
          </v-card-actions>

          <v-card-title></v-card-title>

          <v-card-actions class="py-0">
            <v-chip label size="large">{{ useDateFormat(faker.date.past(), 'MMM, DD')}}</v-chip>
            <v-btn
              variant="outlined"
              color="primary"
              width="50%"
              class="text-none rounded-lg"
              @click="reviewDialog = true"
            >
              Review
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>

  <ProfileReviewDiaglog
    v-model:review-dialog="reviewDialog"
  />
</template>
<script lang="ts" setup>
import { faker } from '@faker-js/faker';

const reviewDialog = ref(false);
</script>