<template>
  <v-row no-gutters class="ma-4 ">
    <v-col cols="2"></v-col>
    <v-col cols="10">
      <ChatMessageCard 
        :message="message"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
const props = defineProps({
  message: {
    type: Object,
    default: () => ({
      text: '',
      timestamp: '',
      type: 'receiver',
      category: 'text'
    })
  }
});
</script>