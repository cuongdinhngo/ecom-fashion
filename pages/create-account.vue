<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column"
    min-height="100vh"
  >
    <v-card-title class="title-h1 text-wrap mt-15 pt-15">Create Account</v-card-title>
    <v-card-title>
      <v-btn
        variant="plain"
        class="camera-holder"
        size="100"
      >
        <v-icon size="50">mdi-camera-outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="mt-4">
      <!-- Email input-->
      <FormEmail />

      <!-- Password input-->
      <FormPassword />

      <!-- Phone number input-->
      <FormPhoneNumber />
    </v-card-text>

    <v-spacer></v-spacer>
    <v-card-actions class="justify-center d-flex flex-column">
      <FormBigButton
        :to="{ name: 'welcome' }"
        title="Done"
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
  backgroundImage: 'bg-bubbles.png',
  meta: [
    { name: 'description', content: 'Welcome to Shoppe, your online store for beautiful products.' },
    { name: 'keywords', content: 'eCommerce, online store, shopping, fashion' }
  ]
});
</script>
<style scoped>
.camera-holder {
  border-radius: 50%;
  border-style: dashed;
  border-width: 2px;
  border-color: #004CFF;
}
</style>