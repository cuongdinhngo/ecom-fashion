<template>
  <v-dialog
    v-model="categoryDialog"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <v-card class="bg-white">
      <v-toolbar class="bg-white">
        <v-toolbar-title class="text-h6 font-weight-bold">All Categories</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-close"
          @click="categoryDialog = false"
        ></v-btn>
      </v-toolbar>

      <v-card-title class="mt-4">
        <v-slide-group
          v-model="selectedGender"
          selected-class="text-primary bg-grey-lighten-5"
        >
          <v-slide-group-item
            v-for="gender in GENDERS"
            :key="gender.value"
            :value="gender.value"
            v-slot="{ toggle, selectedClass, isSelected }"
            
          >
            <v-btn
              :variant="isSelected ? 'outlined' : 'tonal'"
              :class="['text-none', 'text-h6', selectedClass]"
              rounded="lg"
              width="30%"
              @click="toggle"
            >
              {{ gender.label }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-card-title>

      <v-card-text>
        <v-tabs-window v-model="selectedGender">
          <v-tabs-window-item value="all" class="pb-2">
            <ItemsCategoryExpansion
              :categories="KINDS"
            />
          </v-tabs-window-item>

          <v-tabs-window-item value="female">
            <ItemsCategoryExpansion
              :categories="KINDS"
            />
          </v-tabs-window-item>

          <v-tabs-window-item value="male">
            <ItemsCategoryExpansion
              :categories="KINDS"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">

const categoryDialog = defineModel('categoryDialog', {
  type: Boolean,
  default: false
});

const { KINDS } = useProducts();

const selectedGender = ref('all');
const GENDERS = [
  { label: 'All', value: 'all' },
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' }
]
</script>