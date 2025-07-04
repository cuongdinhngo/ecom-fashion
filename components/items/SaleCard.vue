<template>
  <v-card class="rounded-lg elevation-4 bg-white pa-1">
    <v-responsive :aspect-ratio="4/5">
      <v-img
        :src="item.image"
        class="rounded-lg"
        cover
        width="100%"
        height="100%"
      >
        <span class="discount">-{{ item.discount }}</span>
      </v-img>
    </v-responsive>
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