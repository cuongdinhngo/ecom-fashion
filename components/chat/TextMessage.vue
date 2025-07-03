<template>
  <v-sheet
    :class="[isSender ? 'bg-white text-black' : 'bg-primary text-white', 'px-4 py-2 rounded-lg']"
  >
    {{ message.text }}
  </v-sheet>
</template>
<script lang="ts" setup>
const props = defineProps({
  message: {
    type: Object,
    default: () => ({
      id: 1,
      text: 'Hello, Amanda! Welcome to Customer Care Service. We will be happy to help you',
      timestamp: new Date().toISOString(),
      type: 'sender',
      category: 'text'
    })
  }
});

const isSender = computed(() => props.message.type === 'sender');
</script>