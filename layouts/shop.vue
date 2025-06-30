<template>
  <v-app>
    <!-- AppBar for Shop Layout -->
    <SectionsShopAppBar />

    <!-- main Content for Shop Layout -->
    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="12" class="pa-0 ma-0">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer for Shop Layout -->
    <SectionsProfileFooter />
  </v-app>
</template>

<script setup lang="ts">
</script>