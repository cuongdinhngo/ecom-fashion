<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column"
    min-height="100vh"
  >
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-card-title class="title-h1 text-wrap">Login</v-card-title>
    <v-card-title class="text-black">Good to see you back! <v-icon>mdi-heart</v-icon></v-card-title>
    <v-card-text class="mt-4">
      <FormEmail />
    </v-card-text>

    <v-spacer></v-spacer>
    <v-card-actions class="justify-center d-flex flex-column">
      <FormBigButton
        :to="{ name: 'authentication' }"
        title="Next"
      />

      <v-list-item class="text-black">
        <template #title>
          <v-btn
            variant="text"
            class="text-subtitle-2"
            :to="{ name: 'index' }"
          >Cancel</v-btn>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fullview',
  title: 'Shoppe - Home',
  backgroundImage: '/images/login-bg.png',
  meta: [
    { name: 'description', content: 'Welcome to Shoppe, your online store for beautiful products.' },
    { name: 'keywords', content: 'eCommerce, online store, shopping, fashion' }
  ]
});
</script>

<style scoped>
</style>