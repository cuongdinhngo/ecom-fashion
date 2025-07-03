<template>
  <!-- Chat Header: Receiver Info -->
  <ChatHeader
    :receiver="faker.helpers.arrayElement(receivers)"
  />

  <!-- Main chat area -->
  <v-card
    tile
    class="message-area bg-grey-lighten-3 elevation-0"
  >
    <v-card class="message-content">
      <template
        v-for="(message, index) in messages"
        :key="index"
      >
        <ChatSenderCard
          v-if="message.type === 'sender'"
          :message="message"
        />
        <ChatReceiverCard
          v-else-if="message.type === 'receiver'"
          :message="message"
        />
      </template>
    </v-card>
  </v-card>

  <!-- Chat Input -->
  <ChatInputFooter />
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'product',
  title: 'Chat',
  meta: [
    { name: 'description', content: 'Chat with our AI assistant' },
    { name: 'keywords', content: 'chat, ai, assistant' }
  ]
})

import { ChatInputFooter } from '#components';
import { faker } from '@faker-js/faker';

const receivers = [
  {
    type: 'human',
    name: 'Kitty Mango',
    avatar: avatarImg(),
    department: 'Customer Care Service'
  },
  {
    type: 'ai',
    name: 'AI Assistant',
    avatar: 'mdi-robot-happy-outline',
    department: 'AI Assistant'
  }
];

const categories = [
  'text',
  'issue',
  'order',
  'voucher',
];

const messages = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  text: faker.lorem.sentence(),
  timestamp: faker.date.recent().toISOString(),
  type: Math.random() > 0.5 ? 'sender' : 'receiver',
  category: 'text'
}));
</script>
<style scoped>
.message-area {
  overflow-y: scroll;
  height: calc(100vh - 170px);
}
.message-content {
  min-height: calc(100vh - 150px);
}

.message-area::-webkit-scrollbar-track
{
	background-color: #EEEEEE;
  visibility: hidden;
}

.message-area::-webkit-scrollbar
{
	width: 8px;
	background-color: #EEEEEE;
  visibility: hidden;
}

.message-area::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #BDBDBD;
  visibility: hidden;
}

.message-area:hover::-webkit-scrollbar-thumb
{
  visibility: visible;
}

.message-area:hover::-webkit-scrollbar-track
{
  visibility: visible;
}
</style>