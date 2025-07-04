<template>
  <v-card
    class="bg-transparent elevation-0 py-8 d-flex flex-column px-0"
    min-height="100vh"
  >
    <v-spacer></v-spacer>

    <div>
      <div class="logo-container rounded-circle elevation-12">
        <v-img src="/public/logo.svg" height="90" width="80" class=""></v-img>
      </div>

      <v-card-title class="title-h1 my-4 text-center">Shoppe</v-card-title>
      <v-card-text class="text-body-1 text-wrap w-75 mx-auto text-center">
        Beautiful eCommerce UI Kit for your online store
      </v-card-text>
    </div>

    <v-spacer></v-spacer>

    <v-card-actions class="justify-center d-flex flex-column">
      <v-btn
        color="primary"
        variant="flat"
        class="text-none rounded-xl"
        width="100%"
        size="x-large"
        :to="{ name: 'create-account' }"
      >
        <span class="btn-text">Let's get started</span>
      </v-btn>

      <v-list-item class="text-black">
        <template #title>
          <span class="text-subtitle-2">I already have an account</span>
        </template>
        <template #append>
          <v-btn
            icon
            color="primary"
            class="text-none ml-4"
            variant="flat"
            size="x-small"
            :to="{ name: 'login' }"
          >
            <v-icon>mdi-arrow-right</v-icon>
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
  backgroundImage: '',
  meta: [
    { name: 'description', content: 'Welcome to Shoppe, your online store for beautiful products.' },
    { name: 'keywords', content: 'eCommerce, online store, shopping, fashion' }
  ]
});
console.log('Welcome to Shoppe! This is the index page.');
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 134px;
  width: 134px;
  margin: 0 auto;
}
</style>