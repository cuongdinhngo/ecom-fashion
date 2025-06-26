<template>
  <div
    class="avatar-frame elevation-1"
    :style="{ width: frameSize.width, height: frameSize.height }"
  >
    <v-avatar
      :size="size"
      :image="avatar"
    >
    </v-avatar>
  </div>
</template>
<script setup lang="ts">
defineProps({
  size: {
    type: [String, Number],
    default: 91
  },
  avatar: {
    type: String,
    default: imagePath('avatar.png')
  },
  frameSize: {
    type: Object,
    default: {
      width: '105px',
      height: '105px'
    }
  }
});
</script>
<style scoped>
.avatar-frame {
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>