<template>
  <v-list-item class="px-0">
    <template #prepend>
      <v-sheet>
        <v-avatar
          :class="isReward ? 'icon-frame' : 'expire-frame'"
          size="70"
        >
          <v-icon :color="reward.color" size="x-large">{{ reward.icon }}</v-icon>
        </v-avatar>
        <v-btn
          v-if="isReward"
          color="primary"
          size="25"
          icon
          style="position: relative; top: -25px; left: -20px;"
        >
          <v-icon size="15">mdi-check-bold</v-icon>
        </v-btn>
      </v-sheet>
    </template>
    <template #title>
      <h4 class="text-subtitle-1 font-weight-bold">{{ reward.title }}</h4>
    </template>
    <template #subtitle>
      <p class="text-caption text-wrap">
        {{ reward.description }}
      </p>
    </template>
  </v-list-item>
</template>
<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'new-reward'
  },
});

const isReward = computed(() => props.type === 'new-reward');
const reward = computed(() => {
  return props.type === 'new-reward' ? {
    title: 'You just got a reward',
    description: 'You have received a reward for your recent purchase. Click to view details.',
    icon: 'mdi-heart',
    color: 'primary'
  } : {
    title: 'Reward expired',
    description: 'Your reward has expired. Please check your rewards page for more details.',
    icon: 'mdi-lock-clock',
    color: 'error'
  };
});
</script>
<style scoped>
.icon-frame {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #004CFF;
}
.expire-frame {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 8px solid #F87171;
  margin-right: 10px;
}
</style>