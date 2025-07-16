<template>
  <!-- Chat Header: Receiver Info -->
  <ChatHeader
    :receiver="receivers[0]"
  />

  <!-- Main chat area -->
  <v-card
    tile
    class="message-area elevation-0"
  >
    <v-card class="message-content bg-grey-lighten-3">
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

  <v-dialog
    v-model="issueDialog"
    min-width="100%"
  >
    <v-card>
      <v-card-title class="text-h6 font-weight-bold bg-grey-lighten-4">
        What issue are you facing?
      </v-card-title>
      <v-card-text class="px-4">
        <v-list>
          <template
            v-for="(issue, index) in facingIssues"
          >
            <v-sheet class="my-2">
              <ChatIssueCard
                v-if="currentMessage?.type === 'issue' && issue?.type"
                :key="index"
                :issue="issue"
                :is-selected="currentMessage === issue"
                @click="currentMessage = issue; currentMessageType = 'issue'"
              />
            </v-sheet>
            <ChatOrderMessage
              v-if="deepProgress"
              :key="index"
              :order="issue"
              :is-selected="currentMessage === issue"
              :selectable="true"
              @click="currentMessage = issue; currentMessageType = 'order'"
            />
          </template>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          variant="flat"
          width="85%"
          @click="loadNextProgress(currentMessage)"
        >Next</v-btn>
        <v-icon
          color="primary" size="x-large"
          @click="issueDialog = false"
        >mdi-close-box</v-icon>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Chat Input -->
  <ChatInputFooter
    v-model:sender-message="senderMessage"
    @handleSendMessage="sendMessage"
  />
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

const { issues, getMainIssues, getSubIssues } = useIssues();
const { loadOrderFunction } = useOrders();

const issueDialog = ref(true);

const currentMessage = ref<Object|null>({ type: 'issue', label: null, value: null, category: null });
const facingIssues = ref();
const messageList = ref([]);
const deepProgress = ref(false); 
const isReceiverTurn = ref(false);
const senderMessage = ref('');
const currentMessageType = ref('text');

onMounted(() => {
  facingIssues.value = getMainIssues();
});

function sendMessage() {
  messages.value.push({
    id: new Date().getTime(),
    text: senderMessage.value,
    timestamp: new Date().toISOString(),
    type: 'sender',
    category: 'text'
  });
  senderMessage.value = '';
  isReceiverTurn.value = true;
}

function addMessage(issue: Object, type: string = 'text') {
  currentMessage.value = issue;
  const message = reformatMessage(issue, type);
  if (!messageList.value.includes(message)) {
    messageList.value.push(message);
  }
  console.log('Current Message => ', currentMessage.value);
  console.log('Message List => ', messageList.value);
}

function loadNextProgress(issue: Object) {
  addMessage(currentMessage.value, currentMessageType.value);
  if (issue.nextProcess) {
    deepProgress.value = true;
    const nextProcess = issue.nextProcess;
    switch (issue.category) {
      case 'order':
        facingIssues.value = loadOrderFunction(nextProcess);
        break;
    }
  } else if (deepProgress.value) {
    facingIssues.value = [];
    deepProgress.value = false;
    issueDialog.value = false;
    messages.value.push(...messageList.value);
    isReceiverTurn.value = true;
  } else {
    const subIssues = getSubIssues(issue.value);
    if (subIssues.length > 0) {
      facingIssues.value = subIssues;
    }
  }
}

function reformatMessage(message: Object, category: string) {
  const id = new Date().getTime();
  const timestamp = new Date().toISOString();
  let newMessage = {
    timestamp: timestamp,
    type: 'sender',
  };
  switch (category) {
    case 'issue':
      return {
        ...newMessage,
        id: id,
        label: message.label,
        category: category
      };
    case 'order':
      return {
        ...newMessage,
        id: message.orderNumber,
        text: JSON.stringify(message),
        category: category
      };
  }
}

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

const messages = ref(Array.from({ length: 1 }, (_, index) => ({
  id: index + 1,
  text: faker.lorem.sentence(),
  timestamp: faker.date.recent().toISOString(),
  type: 'receiver',
  category: 'text'
})));

// Limit message history to prevent memory leaks
const MAX_MESSAGES = 50;

watch(isReceiverTurn, (newValue) => {
  if (newValue) {
    const category = Math.random() > 0.5 ? 'text' : 'voucher';
    let message = {
      id: new Date().getTime(),
      timestamp: new Date().toISOString(),
      type: 'receiver',
      category: category
    }
    if (category === 'voucher') {
      message = {
        ...message,
        description: 'off on your next purchase',
        value: 15,
        expiredDate: 'Aug 31, 25',
      };
    } else {
      message = {
        ...message,
        text: faker.lorem.sentence(),
      };
    }
    setTimeout(() => {
      // Limit messages to prevent memory leaks
      if (messages.value.length >= MAX_MESSAGES) {
        messages.value.shift(); // Remove oldest message
      }
      messages.value.push(message);
    }, 2000);
    isReceiverTurn.value = false;
  }
});

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