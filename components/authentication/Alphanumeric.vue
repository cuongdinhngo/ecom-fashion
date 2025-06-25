<template>
  <div class="w-100 d-flex flex-column align-center">
    <div class="w-100 d-flex justify-center mb-4">
      <v-rating
        :length="8"
        :size="32"
        :model-value="alphanumeric.length"
        :active-color="activeColor"
        empty-icon="mdi-circle-outline"
        full-icon="mdi-record-circle-outline"
        disabled
        @click="focusTextField"
      />
    </div>
    <div class="w-100 d-flex justify-center">
      <v-text-field
        ref="alphanumericInput"
        v-model="alphanumeric"
        maxlength="8"
        variant="solo-filled"
        flat
        max-width="200"
        class="hidden-block"
      />
    </div>

    <div class="w-100 d-flex justify-center">
      <NuxtLink
        :to="{ name: 'index'}"
        :class="{'hidden-block': activeColor !== 'error'}"
      ><span>Forgot your password?</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const alphanumeric = ref('');
const alphanumericInput = ref();
const defaultValue = '1234abcd';
const activeColor = ref('primary');

function focusTextField() {
  alphanumericInput.value?.focus();
}

watch(alphanumeric, (newValue) => {
  console.log('Alphanumeric input changed:', newValue);
  if (newValue.length === 8) {
      activeColor.value = alphanumeric.value === defaultValue ? 'primary' : 'error';
  }
  if (newValue.length === 0) {
    activeColor.value = 'primary';
  }
});
</script>