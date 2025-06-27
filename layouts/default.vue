<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="12" class="pa-0 ma-0">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer for Profile Layout -->
    <SectionsProfileFooter />
  </v-app>
</template>