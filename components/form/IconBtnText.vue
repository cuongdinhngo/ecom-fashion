<template>
  <v-badge v-if="showBadge" color="green" dot offset-y="10">
    <v-btn
      icon
      :variant="isActive ? 'flat' : 'tonal'"
      color="primary"
      @click="navigateTo(to)"
      :size="size"
    >
      <v-icon :size="size">{{ icon }}</v-icon>
    </v-btn>
  </v-badge>
  <v-btn v-else
    :variant="isActive ? 'flat' : 'tonal'"
    color="primary"
    icon
    @click="navigateTo(to)"
    :size="size"
  >
    <v-icon :size="size">{{ icon }}</v-icon>
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
  },
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>