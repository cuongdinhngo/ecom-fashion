<template>
  <v-row no-gutters>
    <v-col
      v-for="(item, index) in 2" :key="index"
      cols="6" md="6"
      class="pa-1"
    >
      <v-responsive :aspect-ratio="16/9">
        <v-img
          :src="smallProductImg()"
          min-height="40px"
          cover
          rounded="lg"
        ></v-img>
      </v-responsive>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col
      cols="12" md="12"
      class="pa-1"
    >
      <v-responsive :aspect-ratio="8/1" :max-height="60">
        <v-img
          :src="smallProductImg()"
          cover
          rounded="lg"
        ></v-img>
      </v-responsive>
    </v-col>
  </v-row>
</template>