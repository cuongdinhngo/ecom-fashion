<template>
  <v-text-field
    variant="solo-filled"
    type="password"
    hide-details
    flat
    color="primary"
    maxlength="1"
    v-model="pin"
    @keyup="handlePin"
    max-width="50"
  ></v-text-field>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:pin']);
const pin = ref('');
function handlePin() {
  emit('update:pin', pin.value);
}
</script>