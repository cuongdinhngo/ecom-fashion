<template>
  <v-app>
    <v-main>
      <v-container :style="wrapperStyle">
        <v-row no-gutters>
          <v-col cols="12" md="12" class="pa-0 ma-0">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <SectionsProfileFooter />
  </v-app>
</template>

<script setup lang="ts">
const route = useRoute();
const defaultBg = '';
const backgroundImage = computed(() => (route.meta.backgroundImage as string) || defaultBg);

const wrapperStyle = computed(() => ({
  backgroundImage: `url('${backgroundImage.value}')`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}))
</script>