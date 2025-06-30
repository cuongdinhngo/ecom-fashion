<template>
  <v-app>
    <v-main>
      <v-container class="ma-0 pa-0">
        <v-row no-gutters>
          <v-col cols="12" md="12" class="pa-0 ma-0">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>