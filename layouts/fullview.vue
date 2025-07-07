<template>
  <v-app>
    <v-main>
      <v-container class="ma-0 pa-0 wrapper" fluid>
        <v-row no-gutters>
          <v-col cols="12" md="12" class="pa-0 ma-0">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
const route = useRoute();
const backgroundImage = computed(() => {
  return route.meta.backgroundImage ? imagePath(route.meta.backgroundImage as string) : '';
});

watch(backgroundImage, (newValue) => {
  document.documentElement.style.setProperty(
    '--background-image-url',
    newValue ? `url('${newValue}')` : ''
  );
}, { immediate: true });
</script>
<style>
.wrapper {
  background-image: var(--background-image-url);
  background-size: contain;
  background-repeat: no-repeat;
}
</style>