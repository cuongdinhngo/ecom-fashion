<template>
  <ItemsTopDataCard title="Stories">
    <v-slide-group
      v-model="model"
      center-active
      :show-arrows="false"
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          class="mr-4 rounded-lg elevation-0 pa-0 my-0"
          height="200"
          width="110"
          @click="toggle"
        >
          <v-img
            :src="`https://picsum.photos/110/200?random=${n}`"
            height="200"
            width="110"
            cover
          >
            <v-card-title class="ma-0 pa-0">
              <span class="text-caption bg-green text-white pa-1 rounded-lg ml-1">Live</span></v-card-title>
            <v-card-title></v-card-title>
            <v-card-title></v-card-title>
            <v-card-title></v-card-title>
            <v-card-text class="text-center">
              <v-avatar
                size="40"
                class="circle-target"
                @click="navigateTo({ name: 'index' })"
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