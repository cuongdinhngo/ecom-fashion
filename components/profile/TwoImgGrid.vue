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
          cover
          rounded="lg"
          min-height="120px"
        ></v-img>
      </v-responsive>
    </v-col>
  </v-row>
</template>