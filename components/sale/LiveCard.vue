<template>
  <v-card class="mt-8 elevation-0 bg-transparent border-thin rounded-lg">
    <v-card-title class="text-subtitle-1 text-center">
      ARTICALE REIMAGINED
    </v-card-title>
    <v-img
      src="https://picsum.photos/id/7/400/250"
      contain
      height="250"
      class="rounded-b-lg"
    >
      <v-avatar
        size="40"
        class="border-thin border-white bg-grey-lighten-1 opacity-80 play-button"
        v-ripple
        @click="navigateTo({ name: 'shop-flash-sale' })"
      >
        <v-icon color="white">mdi-play</v-icon>
      </v-avatar>

      <span class="bg-green text-white px-3 py-1 rounded-lg live-button">Live</span>
    </v-img>
  </v-card>
</template>
<style scoped>
.play-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.live-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>