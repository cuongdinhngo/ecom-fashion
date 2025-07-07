<template>
  <v-card class="my-4 bg-white" tile elevation="0">
    <v-card-title class="d-flex justify-space-between align-center px-0 pb-0">
      <span class="text-subtitle-1 font-weight-bold">
        {{ stepper.status }}
        <v-btn
          v-if="isDelivered"
          variant="flat"
          color="primary"
          class="ml-2"
          icon
          size="20"
        ><v-icon size="x-small">mdi-check-bold</v-icon></v-btn>
        <v-btn
          v-if="attempToDelivery"
          variant="flat"
          color="error"
          class="ml-2"
          icon
          size="30"
          @click="supportDialog = true"
        ><v-icon size="small">mdi-alarm-light-outline</v-icon></v-btn>
      </span>
      <v-chip label :class="attempToDelivery ? 'bg-red-lighten-1' : 'bg-grey-lighten-5'" size="small">{{ stepper.timestamp }}</v-chip>
    </v-card-title>
    <v-card-text class="pa-0">
      <p class="text-subtitle-1">
        {{ stepper.description }}
      </p>
    </v-card-text>
  </v-card>

  <v-dialog
    min-width="100%"
    v-model="supportDialog"
  >
    <template v-slot:default="{ isActive }">
      <v-card class="pa-4" rounded="lg">
        <v-card-title class="text-h6 font-weight-bold">Delivery was not successful</v-card-title>
        <v-card-text>
          <p class="text-body-1 font-weight-bold">
            What should I do?
          </p>
          <p class="text-body-2">
            If your delivery was not successful, you can contact our support team for assistance. They will help you resolve any issues related to your order.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            variant="flat"
            color="primary"
            class="mx-auto text-none"
            width="100%"
            :to="{ name: 'chat' }"
          >Chat Now</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script lang="ts" setup>
const props = defineProps({
  stepper: {
    type: Object,
    required: true,
  },
});

const supportDialog = ref(false);

const isDelivered = computed(() => {
  return props.stepper.status.toLowerCase() === 'delivered';
});

const attempToDelivery = computed(() => {
  return props.stepper.status.toLowerCase() === 'attempt to deliver';
});
</script>