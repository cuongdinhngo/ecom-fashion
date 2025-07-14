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
        How you would like to restore your password?
      </p>
    </v-card-title>

    <v-card-title class="d-flex justify-center align-center flex-column">
      <v-list>
        <v-list-item
          width="250"
          class="rounded-pill text-center mb-4 bg-blue-lighten-4"
          color="primary"
          variant="text"
          link
          @click="recoveryWay = 'sms'"
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
          @click="recoveryWay = 'email'"
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
    </v-card-title>

    <v-spacer></v-spacer>

    <v-card-actions class="justify-center d-flex flex-column">
      <FormBigButton
        :to="{ name: 'password-recovery-confirm-code' }"
        title="Next"
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

const recoveryWay = ref('');
</script>

<style scoped>
</style>