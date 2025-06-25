<template>
  <v-text-field
    variant="solo"
    flat
    label="Password"
    class="mb-4"
    rounded="pill"
    hide-details
    :append-inner-icon="showPasswd ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showPasswd = !showPasswd"
    :type="showPasswd ? 'text' : 'password'"
  ></v-text-field>
</template>
<script setup lang="ts">
const showPasswd = ref(false);
</script>