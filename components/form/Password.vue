<template>
  <v-text-field
    variant="solo"
    flat
    :label="label"
    class="mb-4"
    rounded="pill"
    hide-details
    :append-inner-icon="showPasswd ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append-inner="showPasswd = !showPasswd"
    :type="showPasswd ? 'text' : 'password'"
    @update:model-value="$emit('update:password', $event)"
  ></v-text-field>
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Password',
  },
});
const showPasswd = ref(false);
const emit = defineEmits(['update:password']);
</script>