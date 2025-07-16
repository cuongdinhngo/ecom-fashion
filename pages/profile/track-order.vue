<template>
  <!-- Track Stepper -->
  <ProfileTrackStepper
    :step="currentStep"
    :attemp-to-deliver="attempToDelivery"
  />

  <v-list-item :class="[attempToDelivery ? 'bg-red-lighten-1' : 'bg-grey-lighten-3', 'px-2 py-1 mt-4 mb-6']" rounded="lg">
    <template #title>
      <span class="text-subtitle-1 font-weight-bold">Tracking Number</span>
    </template>
    <template #subtitle>
      <span class="text-body-2">#123456789</span>
    </template>
    <template #append>
      <v-btn variant="text" :color="attempToDelivery ? '' : 'primary'">
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </template>
  </v-list-item>

  <ProfileStepperStatusCard
    v-for="step in steps"
    :key="step.value"
    :stepper="step"
  />
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'profile',
  pageTitle: 'To Receive',
  pageDetail: 'Track Your Order',
})

const finalSteps = ['attempt-to-deliver', 'delivered'];
const { getTrackerSteps } = useTracker();
const steps = getTrackerSteps(getRandomElement(finalSteps));

const attempToDelivery = computed(() => {
  return steps.some(step => step.status.toLowerCase() === 'attempt to deliver');
});

const currentStep = computed(() => {
  const lastStep = steps[steps.length - 1].value;
  if (lastStep < 1) {
    return 0;
  } else if (lastStep >= 1 && lastStep < 4) {
    return 1;
  } else {
    return 2
  }
});
</script>