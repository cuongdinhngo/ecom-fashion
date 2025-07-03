<template>
  <v-card-title
    class="chat-header px-0 py-5"
  >
    <v-list-item>
      <template #prepend>
        <v-card rounded="circle" class="bg-white elevation-4 mr-4">
          <v-avatar size="40" class="ma-2 bg-blue-lighten-5">
            <v-icon
              v-if="receiver.type === 'ai'"
              color="primary" class="ma-2"
            >{{ receiver.avatar}}</v-icon>
            <v-img
              v-else
              :src="receiver.avatar"
              aspect-ratio="16/9"
              cover
              class="ma-2"
              min-height="30px"
            ></v-img>
          </v-avatar>
        </v-card>
      </template>
      <template #title>
        <span class="text-h6 font-weight-bold text-primary">{{ receiver.name }}</span>
      </template>
      <template #subtitle>
        <span class="text-subtitle-2 font-weight-bold">{{ receiver.department }}</span>
      </template>
    </v-list-item>
  </v-card-title>
</template>
<script lang="ts" setup>
const props = defineProps<{
  receiver: {
    type: Object,
    default: () => ({
      type: 'ai',
      name: 'AI Assistant',
      avatar: 'mdi-robot-happy-outline',
      department: 'Customer Care Service'
    })
  }
}>();


console.log('Receiver:', props.receiver);
</script>