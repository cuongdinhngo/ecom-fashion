<template>
  <v-card
    class="bg-transparent elevation-0 d-flex flex-column wrapper"
    min-height="100vh"
  >
    <v-card-title class="title-h1 text-wrap mt-15 pt-15">Create Account</v-card-title>
    <v-card-title>
      <v-btn
        variant="plain"
        class="camera-holder"
        size="100"
      >
        <v-icon size="50">mdi-camera-outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="mt-4">
      <v-text-field
        variant="solo"
        flat
        label="Email"
        class="mb-4"
        rounded="pill"
        hide-details
      ></v-text-field>

      <v-text-field
        variant="solo"
        flat
        label="Password"
        class="mb-4"
        rounded="pill"
        hide-details
        :append-inner-icon="showPasswd ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPasswd = !showPasswd"
        :type="showPasswd ? 'text' : 'password'"
      ></v-text-field>

      <v-text-field
        variant="solo"
        flat
        label="Your Number"
        class="mb-4"
        rounded="pill"
        hide-details
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
    </v-card-text>

    <v-spacer></v-spacer>
    <v-card-actions class="justify-center d-flex flex-column">
      <v-btn
        color="primary"
        variant="flat"
        class="text-none rounded-xl"
        width="100%"
        size="x-large"
        :to="{ name: 'index' }"
      >
        <span class="btn-text">Done</span>
      </v-btn>

      <v-list-item class="text-black">
        <template #title>
          <v-btn
            variant="text"
            class="text-subtitle-2"
            :to="{ name: 'index' }"
          >Cancel</v-btn>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const showPasswd = ref(false);

const selectedLocale = ref('en'); // Default locale

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

<style scoped>
.wrapper {
  background-image: url('/public/images/bg-bubbles.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.camera-holder {
  border-radius: 50%;
  border-style: dashed;
  border-width: 2px;
  border-color: #004CFF;
}
</style>