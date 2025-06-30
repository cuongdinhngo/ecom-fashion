<template>
  <v-card class="d-flex elevation-0 py-4" tile>
    <div class="avatar pr-4 pl-1">
      <ItemsAvatar
        size="60"
        :frameSize="{ width: '70px', height: '70px' }"
        :avatar="avatarImg()"
      />
    </div>
    <div class="content pt-2">
      <div class="d-flex flex-column">
        <span class="text-subtitle-1 font-weight-bold">{{ faker.person.fullName() }}</span>
        <v-rating
          length="5"
          :model-value="faker.number.int({ min: 1, max: 5 })"
          active-color="orange-lighten-1"
          density="compact"
        ></v-rating>
        <span class="text-subtitle-2 text-wrap">{{ faker.lorem.paragraphs({ min: 1, max: 2}) }}</span>
      </div>
    </div>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
</script>