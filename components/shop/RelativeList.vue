<template>
  <ItemsContainerCard
    :hidden-header="true"
  >
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in relatives"
        :key="index"
        cols="2"
        class="d-flex flex-column align-center justify-center"
      >
        <ItemsAvatar
          :avatar="item.image"
          :size="50"
          :frame-size="{ width: '60px', height: '60px' }"
        />
          <v-list-item-title class="text-caption text-center text-wrap mt-1" style="height: 36px;">
            {{ item.title }}
          </v-list-item-title>
      </v-col>
    </v-row>
  </ItemsContainerCard>
</template>
<script setup lang="ts">
defineProps({
  relatives: {
    type: Array as () => Object[],
    default: () => []
  }
});
</script>