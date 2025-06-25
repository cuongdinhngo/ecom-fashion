<template>
  <v-list>
    <v-list-item
      width="250"
      class="rounded-pill text-center mb-4 bg-blue-lighten-4"
      color="primary"
      variant="text"
      link
    >
      <v-list-item-title class="text-subtitle-1 font-weight-bold text-primary">
        SMS
      </v-list-item-title>
      <template #append>
        <v-radio-group v-model="recoveryWay" hide-details>
          <v-radio value="sms" color="primary"></v-radio>
        </v-radio-group>
      </template>
    </v-list-item>

    <v-list-item
      width="250"
      class="rounded-pill text-center mb-4 bg-pink-lighten-5"
      color="primary"
      variant="text"
      link
    >
      <v-list-item-title class="text-subtitle-1 font-weight-bold">
        Email
      </v-list-item-title>
      <template #append>
        <v-radio-group v-model="recoveryWay" hide-details>
          <v-radio value="email" color="primary"></v-radio>
        </v-radio-group>
      </template>
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
const recoveryWay = ref('');
</script>