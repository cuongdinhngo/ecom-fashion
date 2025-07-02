<template>
  <v-card min-height="100vh" class="bg-white" tile elevation="0">
    <ProfileHistoryOrderCard
      v-for="i in 10"
      :key="i"
    />
  </v-card>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'profile',
  pageTitle: 'History',
});
</script>