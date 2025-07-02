<template>
  <v-badge
    v-if='showBadge'
    dot
    offset-x="10"
    :color="options.badgeColor"
  >
    <v-chip
      :color="options.chipColor"
      :size="options.size"
      :to="label.to"
    >{{ label.title }}</v-chip>
  </v-badge>
  <v-chip
    v-else
    :color="options.chipColor"
    :size="options.size"
    :to="label.to"
  >{{ label.title }}</v-chip>
</template>
<script setup lang="ts">
defineProps({
  showBadge: {
    type: Boolean,
    default: false
  },
  label: {
    type: Object,
    default: () => ({
      title: '',
      to: { name: 'profile' }
    })
  },
  options: {
    type: Object,
    default: () => ({
      chipColor: 'primary',
      badgeColor: 'primary',
      size: 'x-large'
    })
  }
});
</script>