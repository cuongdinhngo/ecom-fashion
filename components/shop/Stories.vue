<template>
  <ItemsTopDataCard title="Stories">
    <v-slide-group
      v-model="model"
      center-active
      :show-arrows="false"
    >
      <v-slide-group-item
        v-for="(story, index) in stories"
        :key="index"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          class="mr-4 rounded-lg elevation-2 px-0 my-2"
          height="200"
          width="110"
          @click="toggle"
        >
          <v-img
            :src="story.image"
            height="200"
            width="110"
            cover
            aspect-ratio="16/9"
          >
            <v-card-title class="ma-0 pa-0">
              <span
                :class="[{'hidden-block': !story.isLive},'text-caption bg-green text-white pa-1 rounded-lg ml-1']"
              >Live</span></v-card-title>
            <v-card-title></v-card-title>
            <v-card-title></v-card-title>
            <v-card-title></v-card-title>
            <v-card-text class="text-center">
              <v-avatar
                size="40"
                class="circle-target"
                @click="navigateTo(story.to)"
              >
                <v-icon>mdi-play</v-icon>
              </v-avatar>
            </v-card-text>
          </v-img>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
const stories = Array.from({ length: 15 }, (_, index) => {
  const isLive = index % 3 === 0;
  return {
    image: smallProductImg(),
    isLive: isLive,
    to: isLive ? { name: 'profile-live' } : { name: 'profile-story' }
  }
});
const model = ref(null)
</script>
<style scoped>
.circle-target {
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.6;
  cursor: pointer;
}
</style>