<template>
  <SettingsHeader />

  <v-card-title class="text-h6 px-0">Country</v-card-title>

  <v-list-item class="bg-blue-lighten-5 px-4 py-2 rounded-lg mb-4 text-primary">
    {{ selectedCountry ? selectedCountry : 'No country selected' }}
    <template #append>
      <v-avatar
        v-if="selectedCountry"
        class="bg-white"
      >
        <v-btn
          variant="flat"
          color="primary"
          icon
          size="x-small"
          class="ma-2"
        >
          <v-icon>mdi-check-bold</v-icon>
        </v-btn>
      </v-avatar>
    </template>
  </v-list-item>

  <div v-for="(group, letter) in groupedCountries" :key="letter" class="mb-4">
    <div class="text-h6 font-weight-bold mb-2">{{ letter }}</div>
    <v-list density="compact" class="bg-white">
      <v-list-item
        v-for="country in group" :key="country.name"
        @click="selectedCountry = country.name"
      >
        {{ country.name }}
      </v-list-item>
    </v-list>
  </div>
</template>
<script lang="ts" setup>
import { faker } from '@faker-js/faker';
import { computed } from 'vue';

const selectedCountry = ref<string | null>(null);

const countries = Array.from({ length: 20 }, () => ({
  name: faker.location.country(),
}));

// Sort countries alphabetically
countries.sort((a, b) => a.name.localeCompare(b.name));

// Group countries by first letter
const groupedCountries = computed(() => {
  const groups: Record<string, { name: string }[]> = {};
  for (const country of countries) {
    const letter = country.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(country);
  }
  return groups;
});
</script>