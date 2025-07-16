<template>
  <v-text-field
    variant="solo"
    flat
    label="Your Number"
    class="mb-4"
    rounded="pill"
    hide-details
    v-model="phoneNumber"
  >
    <template #prepend-inner>
      <v-menu offset="15" class="">
        <template v-slot:activator="{ props }">
          <v-btn
            variant="text"
            class="border-e-md"
            tile
          >
            <v-avatar
              v-bind="props"
              :image="selectedFlag"
              size="x-small"
              class="mr-2"
            >
            </v-avatar>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="locale in LOCALE"
            :key="locale.value"
            @click="selectedLocale = locale.value"
          >
            <template v-slot:prepend>
              <v-avatar
                :image="locale.flag"
                size="x-small"
              />
            </template>
            <v-list-item-title class="text-body-2">
              {{ locale.label }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-text-field>
</template>
<script setup lang="ts">
const selectedLocale = ref('en');

const phoneNumber = defineModel('phoneNumber', {
  type: String,
  default: '',
});

const LOCALE = [
  {
    label: "English",
    value: "en",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    label: "French",
    value: "fr",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    label: "Spanish",
    value: "es",
    flag: "https://flagcdn.com/w40/es.png",
  },
  {
    label: "German",
    value: "de",
    flag: "https://flagcdn.com/w40/de.png",
  },
  {
    label: "Chinese",
    value: "cn",
    flag: "https://flagcdn.com/w40/cn.png",
  }
]

const selectedFlag = computed(() => {
  const locale = LOCALE.find((l) => l.value === selectedLocale.value);
  return locale ? locale.flag : '';
});
</script>