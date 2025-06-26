<template>
  <v-card
    class="mr-3 rounded-lg elevation-1 pa-0 my-1 bg-transparent d-flex flex-column"
    height="210"
    width="150"
    @click="toggle"
  >
    <div>
      <v-img
        :src="item.image"
        width="140"
        height="160"
        cover
        class="rounded-lg mt-2 mx-auto"
      />
    </div>
    <v-card-title class="px-2 ma-0 d-flex justify-space-between align-center">
      <span class="font-weight-bold text-subtitle-1">
        {{ item.like }} <v-icon color="primary" size="small">mdi-heart</v-icon>
      </span>
      <span class="text-subtitle-2">{{ item.status }}</span>
    </v-card-title>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      description: '',
      price: 0,
      image: ''
    })
  },
  toggle: {
    type: Function,
    required: true
  }
});
</script>
<style scoped>
</style>