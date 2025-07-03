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
<style scoped>
.chat-input {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>