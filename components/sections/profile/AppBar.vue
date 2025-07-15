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
      v-if="route.meta.pageTitle"
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
      :to="{ name: 'profile-my-activity' }"
    >My Activity</v-btn>

    <v-spacer></v-spacer>

    <div class="d-flex align-center ga-1 mr-1">
      <!-- Voucher -->
      <FormIconBtnText
        icon="mdi-wallet-giftcard"
        :to="{ name: 'profile-voucher', query: { type: 'active' } }"
        :is-active="pageName === 'profile-voucher'"
        :show-badge="false"
      ></FormIconBtnText>

      <!-- Order history -->
      <FormIconBtnText
        icon="mdi-table-settings"
        :to="{ name: 'profile-history' }"
      ></FormIconBtnText>

      <!-- Setting -->
      <FormIconBtnText
        icon="mdi-cog-outline"
        :to="{ name: 'profile-setting' }"
        :is-active="pageName === 'profile-setting'"
        :show-badge="false"
      ></FormIconBtnText>
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
const route = useRoute();
const pageName = computed(() => route.name || 'index');
console.log('Current page name:', pageName.value);
</script>