<template>
  <v-card-title
    class="chat-input d-flex justify-space-between align-center bg-indigo-lighten-5"
  >
    <v-textarea
      placeholder="Message"
      variant="plain"
      rows="1"
      auto-grow
      flat
      hide-details
      v-model="senderMessage"
      @keyup.enter.prevent="handleSendMessage"
    />
    <div class="actions d-flex align-center">
      <v-btn
        color="primary"
        variant="text"
        icon
        size="large"
      >
        <v-icon size="x-large">mdi-image-outline</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        variant="text"
        icon
        size="large"
      >
        <v-icon size="x-large">mdi-text-box-outline</v-icon>
      </v-btn>
    </div>
  </v-card-title>
</template>
<script setup lang="ts">
const senderMessage = defineModel<string>('senderMessage', {
  default: '',
  type: String,
});

const emit = defineEmits(['handleSendMessage']);

function handleSendMessage() {
  if (senderMessage.value.trim() === '') return;

  emit('handleSendMessage');
}
</script>
<style scoped>
.chat-input {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>