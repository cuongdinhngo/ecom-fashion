<template>
  <v-badge v-if="showBadge" color="primary" dot offset-y="10">
    <v-btn
      variant="plain" color="primary" :icon="icon"
      :to="to"
      :size="size"
      active-color="primary"
    >
      <v-icon :icon="icon" :size="size"></v-icon>
    </v-btn>
  </v-badge>
  <v-btn v-else
    variant="plain" color="primary" :icon="icon"
    :to="to"
    :size="size"
    active-color="primary"
  >
    <v-icon :icon="icon" :size="size"></v-icon>
  </v-btn>

</template>
<script setup lang="ts">
defineProps({
  to: {
    type: [String, Object],
    default: { naem: 'index' }
  },
  icon: {
    type: String,
    default: 'mdi-wallet-giftcard'
  },
  showBadge: {
    type: Boolean,
    default: true
  },
  size: {
    type: [String, Number],
    default: 'default'
  }
});
</script>