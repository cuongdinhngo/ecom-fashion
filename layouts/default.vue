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
const backgroundImage = computed(() => (route.meta.backgroundImage as string));

const wrapperStyle = computed(() => {
  const style: Record<string, string> = {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  if (backgroundImage.value) {
    style.backgroundImage = `url('${imagePath(backgroundImage.value)}')`;
  }
  return style;
});
</script>