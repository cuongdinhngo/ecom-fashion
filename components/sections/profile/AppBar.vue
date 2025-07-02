<template>
  <v-app-bar
    app
    class="pa-2 elevation-0 bg-transparent"
    absolute
  >
    <ItemsAvatar
      :size="50"
      :frame-size="{ width: '60px', height: '60px' }"
    />

    <div
      v-if="route.meta.pageTitle && route.meta.pageDetail"
      class="page-detail">
      <v-card-title class="text-h5 font-weight-bold py-0">
        {{ route.meta.pageTitle }}
      </v-card-title>
      <v-card-title class="text-subtitle-1 py-0">
        {{ route.meta.pageDetail }}
      </v-card-title>
    </div>
    <v-btn
      v-else
      class="ml-2 rounded-pill text-none"
      variant="flat"
      color="primary"
    >My Activity</v-btn>

    <v-spacer></v-spacer>

    <div class="d-flex align-center ga-1 mr-1">
      <!-- Voucher -->
      <FormIconBtnText
        icon="mdi-wallet-giftcard"
      ></FormIconBtnText>

      <!-- Top Menu -->
      <FormIconBtnText
        icon="mdi-table-settings"
      ></FormIconBtnText>

      <!-- Setting -->
      <FormIconBtnText
        icon="mdi-cog-outline"
      ></FormIconBtnText>
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
const route = useRoute();
</script>