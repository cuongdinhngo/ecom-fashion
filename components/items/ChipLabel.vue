<template>
  <v-badge
    v-if='showBadge'
    dot
    offset-x="10"
    :color="badgeColor"
  >
    <v-chip
      :color="chipColor"
      :size="size"
    >{{ label }}</v-chip>
  </v-badge>
  <v-chip
    v-else
    :color="chipColor"
    :size="size"
  >{{ label }}</v-chip>
</template>
<script setup lang="ts">
defineProps({
  showBadge: {
    type: Boolean,
    default: false
  },
  badgeColor: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'x-large'
  },
  chipColor: {
    type: String,
    default: 'primary'
  },
  label: {
    type: String,
    default: ''
  }
});
</script>