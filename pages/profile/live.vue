<template>
  <v-card class="pa-0 elevation-0 bg-transparent" tile density="compact" max-width="100%">
    <v-img
      src="https://picsum.photos/id/58/400/700"
      height="750"
      width="100%"
      class="rounded-lg"
      cover
    ></v-img>

    <v-card-actions class="pa-0 ma-0 d-flex justify-space-between align-center">
      <v-chip prepend-icon="mdi-eye-outline" variant="text" size="large">
        1234
      </v-chip>

      <v-chip
        variant="flat"
        color="green"
        prepend-icon="mdi-circle-medium"
        label
        size="small"
      >
        Live
      </v-chip>

      <v-chip variant="text" size="x-large" color="primary" v-ripple>
        <v-icon size="x-large">mdi-skip-forward</v-icon>
      </v-chip>

      <v-btn color="primary" variant="flat" class="text-none" width="30%" rounded="lg">Shop</v-btn>
    </v-card-actions>
  </v-card>
</template>