<template>
  <v-row no-gutters>
    <v-col cols="12" class="text-center ma-0 pa-0">
      <div class="logo-container rounded-circle elevation-12">
        <v-img src="/public/logo.svg" height="90" width="80" class=""></v-img>
      </div>
      <v-card-title class="title-h1 my-4">Shoppe</v-card-title>
      <v-card-text class="text-subtitle-1 text-wrap w-75 mx-auto mb-10">
        Beautiful eCommerce UI Kit for your online store
      </v-card-text>
      <v-card-actions class="justify-center d-flex flex-column justify-center">
        <v-btn color="primary" variant="flat" class="text-none rounded-xl" width="80%" size="x-large">
          <span class="btn-text">Let's get started</span>
        </v-btn>
        <v-list-item class="text-black">
          <template #title>
            <span class="text-subtitle-2">I already have an account</span>
          </template>
          <template #append>
            <v-btn color="primary" class="text-none ml-4" icon variant="flat" size="x-small">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </v-card-actions>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank',
  title: 'Welcome to Shoppe',
  meta: [
    { name: 'description', content: 'Shoppe - Beautiful eCommerce UI Kit for your online store' },
    { name: 'keywords', content: 'eCommerce, UI Kit, Shoppe, Online Store' }
  ]
})
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