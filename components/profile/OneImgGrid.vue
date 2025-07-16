<template>
  <v-row no-gutters>
    <v-col
      cols="12" md="12"
      class="pa-1"
    >
      <v-responsive :aspect-ratio="16/9">
        <v-img
          :src="smallProductImg()"
          cover
          rounded="lg"
          min-height="90px"
        ></v-img>
      </v-responsive>
    </v-col>
  </v-row>
</template>