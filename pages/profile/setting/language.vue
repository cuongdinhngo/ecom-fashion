<template>
  <SettingsHeader />

  <v-card-title class="text-h6 px-0">Language</v-card-title>

  <v-list class="bg-white">
    <v-list-item
      v-for="(lang, index) in languages"
      :key="index"
      @click="selectedLanguage = lang"
      class="bg-blue-lighten-5 px-4 py-2 rounded-lg mb-4 text-primary"
    >
      <v-list-item-title class="text-subtitle-1 text-black">{{ lang }}</v-list-item-title>
      <template #append>
        <v-avatar
          v-if="selectedLanguage === lang"
          class="bg-white"
          size="30"
        >
          <v-btn
            variant="flat"
            color="primary"
            icon
            size="25"
            class="ma-2"
          >
            <v-icon size="20">mdi-check-bold</v-icon>
          </v-btn>
        </v-avatar>
        <v-icon v-else size="30" color="grey">mdi-circle-double</v-icon>
      </template>
    </v-list-item>
  </v-list>
</template>
<script lang="ts" setup>
const selectedLanguage = ref<string | null>(null);
const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Russian',
  'Portuguese',
];
</script>