<template>
  <v-icon
    :icon="icon"
    :size="size"
    class="pa-8 rounded-circle"
    :color="color"
    v-ripple
    @click="navigateTo(to)"
  ></v-icon>
</template>
<script setup lang="ts">
defineProps({
  to: {
    type: [String, Object],
    default: { name: 'index' }
  },
  icon: {
    type: String,
    default: 'mdi-wallet-giftcard'
  },
  size: {
    type: [String, Number],
    default: 'default'
  },
  color: {
    type: String,
    default: 'primary'
  }
});
</script>