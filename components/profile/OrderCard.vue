<template>
  <v-card class="d-flex bg-white py-3" flat>
    <v-row no-gutters>
      <v-col cols="4" class="pa-0 elevation-2 rounded-lg">
        <!-- Image List -->
        <slot name="imgGrid" />
      </v-col>
      <v-col cols="8" class="">
        <ProfileOrderInfo
          :order="order"
        />
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  order: {
    type: Object as () => Order,
    required: true,
  },
});
</script>