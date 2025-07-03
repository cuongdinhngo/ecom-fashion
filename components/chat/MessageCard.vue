<template>
  <ChatTextMessage
    v-if="message.category === 'text'"
    :message="message"
  />
  <ChatIssueMessage
    v-else-if="message.category === 'issue'"
    :message="message"
  />
  <ChatVoucherMessage
    v-else-if="message.category === 'voucher'"
    :message="message"
  />
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

console.log('MessageCard props:', props);
</script>