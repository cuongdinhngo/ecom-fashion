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
    <v-btn
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