<template>
  <v-text-field
    ref="inputRef"
    variant="solo-filled"
    :type="type"
    hide-details
    flat
    color="primary"
    maxlength="1"
    v-model="pin"
    @input="handlePin"
    @keydown="handleKeydown"
    max-width="50"
  ></v-text-field>
</template>
<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'password'
  }
});

const emit = defineEmits(['update:pin', 'move-next', 'move-prev']);
const pin = ref('');
const inputRef = ref();

function handlePin() {
  emit('update:pin', pin.value);
  
  if (pin.value && pin.value.length === 1) {
    emit('move-next');
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Backspace' && !pin.value) {
    emit('move-prev');
  }
}

defineExpose({
  focus: () => {
    nextTick(() => {
      inputRef.value?.focus();
    });
  }
});
</script>