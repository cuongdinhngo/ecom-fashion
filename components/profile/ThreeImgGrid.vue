<template>
  <v-row no-gutters>
    <v-col
      v-for="(item, index) in 2" :key="index"
      cols="6" md="6"
      class="pa-1"
    >
      <v-img
        :src="smallProductImg()"
        height="40px"
        width="100%"
        aspect-ratio="16/9"
        cover
        rounded="lg"
      ></v-img>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col
      cols="12" md="12"
      class="pa-1"
    >
      <v-img
        :src="smallProductImg()"
        height="40px"
        width="100%"
        aspect-ratio="16/9"
        cover
        rounded="lg"
      ></v-img>
    </v-col>
  </v-row>
</template>