<template>
  <v-footer
    app
    class="d-flex justify-space-between align-center border-t-thin"
  >
    <FormIconRipple
      icon="mdi-wallet-giftcard"
      size="x-large"
      :to="{ name: 'index' }"
    />

    <FormIconRipple
      icon="mdi-heart-outline"
      size="x-large"
      :to="{ name: 'index' }"
    />

    <FormIconRipple
      icon="mdi-list-box-outline"
      size="x-large"
      :to="{ name: 'index' }"
    />

    <FormIconRipple
      icon="mdi-shopping-outline"
      size="x-large"
      :to="{ name: 'index' }"
    />

    <FormIconRipple
      icon="mdi-account-circle-outline"
      size="x-large"
      :to="{ name: 'index' }"
    />
  </v-footer>
</template>