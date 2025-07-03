<template>
  <v-list-item
    :variant="isSelected ? 'tonal' : 'outlined'"
    color="primary"
    class="rounded-lg text-primary py-2"
  >
    <template #prepend>
      <v-btn
        v-if="isSelected"
        icon
        variant="flat"
        color="primary"
        size="x-small"
      ><v-icon>mdi-check-bold</v-icon></v-btn>
    </template>
    <v-list-item-title class="ml-2">{{ issue.label }}</v-list-item-title>
  </v-list-item>
</template>
<script lang="ts" setup>
const props = defineProps({
  issue: {
    type: Object,
    default: null
  },
  isSelected: {
    type: Boolean,
    default: false
  }
});
</script>