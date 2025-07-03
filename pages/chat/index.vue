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
                @click="addMessage(issue, 'issue')"
              />
            </v-sheet>
            <ChatOrderMessage
              v-if="deepProgress"
              :key="index"
              :order="issue"
              :is-selected="currentMessage === issue"
              :selectable="true"
              @click="addMessage(issue, 'order')"
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

const { issues, getMainIssues, getSubIssues } = useIssues();
const { loadOrderFunction } = useOrders();

const issueDialog = ref(true);

const currentMessage = ref<Object|null>({ type: 'issue', label: null, value: null, category: null });
const facingIssues = ref();
const messageList = ref([]);
const deepProgress = ref(false); 
const isReceiverTurn = ref(false);
const senderMessage = ref('');

onMounted(() => {
  facingIssues.value = getMainIssues();
});

function addMessage(issue: Object, type: string = 'text') {
  console.log('Adding issue:', issue);
  currentMessage.value = issue;
  const message = reformatMessage(issue, type);
  if (!messageList.value.includes(message)) {
    messageList.value.push(message);
  }
  console.log('Current Message => ', currentMessage.value);
  console.log('Message List => ', messageList.value);
}

function loadNextProgress(issue: Object) {
  console.log('Loading next process for issue:', issue);
  if (issue.nextProcess) {
    deepProgress.value = true;
    const nextProcess = issue.nextProcess;
    switch (issue.category) {
      case 'order':
        facingIssues.value = loadOrderFunction(nextProcess);
        console.log('NEXT PRCESS => ', facingIssues.value);
        break;
    }
  } else if (deepProgress.value) {
    facingIssues.value = [];
    deepProgress.value = false;
    issueDialog.value = false;
    messages.value.push(...messageList.value);
    console.log('Messages after deep progress:', messages.value);
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

const categories = [
  'text',
  'issue',
  'order',
  'voucher',
];

const messages = ref(Array.from({ length: 1 }, (_, index) => ({
  id: index + 1,
  text: faker.lorem.sentence(),
  timestamp: faker.date.recent().toISOString(),
  type: 'receiver',
  category: 'text'
})));

watch(isReceiverTurn, (newValue) => {
  console.log('isReceiverTurn changed:', newValue);
  if (newValue) {
    setTimeout(() => {
      messages.value.push({
        id: new Date().getTime(),
        text: faker.lorem.sentence(),
        timestamp: new Date().toISOString(),
        type: 'receiver',
        category: Math.random() > 0.5 ? 'text' : 'voucher'
      });
    }, 3000);
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