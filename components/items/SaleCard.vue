<template>
  <v-card>
    <v-img
      :src="item.image"
      width="110"
      height="110"
      cover
      class="rounded-lg mx-auto my-2"
    >
      <span class="discount">-{{ item.discount }}</span>
    </v-img>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>
<style scoped>
.discount {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  background-color:rgb(231, 67, 122);
  padding: 2px 4px;
  border-radius: 4px;
}
</style>