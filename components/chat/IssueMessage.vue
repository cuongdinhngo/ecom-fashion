<template>
  <ChatIssueCard
    :issue="message"
    :is-selected="true"
  />
</template>
<script lang="ts" setup>
const props = defineProps({
  message: {
    type: Object,
    default: null
  }
});
</script>