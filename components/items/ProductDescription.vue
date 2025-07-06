<template>
  <div class="product-description">
    <p class="text-caption">{{ description }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  description: {
    type: String,
    required: true,
    default: ''
  }
});
</script>
<style scoped>
.product-description {
  font-size: 1.2rem;
  min-height: 40px;
  overflow: hidden;
  margin-top: 5px
}

.product-description p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
</style>