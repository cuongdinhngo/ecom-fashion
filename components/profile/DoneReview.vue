<template>
  <v-dialog
    v-model="doneDialog"
    transition="dialog-bottom-transition"
  >
    <template v-slot:default="{ isActive }">
      <div style="position: relative;">
        <v-card
          class="py-10 rounded-xl" width="100%"
        >
          <v-card-title class="text-h5 font-weight-bold text-center">
            DONE!
          </v-card-title>
          <v-card-title class="text-center text-subtitle-2 text-wrap">
            Thank you for your review!
          </v-card-title>
          <v-card-text class="text-center">
            <v-rating
              class="mx-auto text-center"
              color="primary"
              size="x-large"
              :model-value="5"
              active-color="amber-darken-1"
            ></v-rating>
          </v-card-text>
        </v-card>
        <div
          class="wrapper-progress"
        >
          <v-btn
            icon
            variant="flat"
            color="primary"
            size="60"
          >
            <v-icon size="50">mdi-check-bold</v-icon>
          </v-btn>
        </div>

      </div>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
const doneDialog = defineModel('doneDialog', {
  default: false,
  type: Boolean,
});
</script>
<style scoped>
.wrapper-progress {
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}
</style>