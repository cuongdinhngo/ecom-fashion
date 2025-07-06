<template>
  <v-card
    :class="[
      'mr-3 rounded-lg elevation-0 pa-0 my-0 bg-transparent',
    ]"
    max-width="150"
    @click="toggle(); navigateTo(item.to)"
  >
    <v-card class="rounded-lg elevation-4 pa-1">
      <v-responsive :aspect-ratio="3/4">
        <v-img
          :src="item.image"
          class="rounded-lg"
          cover
          width="100%"
          height="100%"
        />
      </v-responsive>
    </v-card>

    <ItemsProductDescription
      :description="item.description"
    />

    <v-card-title class="ma-0 pa-0">
      <span class="text-subtitle font-weight-bold">{{ item.price }}</span>
    </v-card-title>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      description: '',
      price: 0,
      image: ''
    })
  },
  toggle: {
    type: Function,
    required: true
  }
});
</script>
<style scoped>
.photo-frame {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px; /* Add padding for the frame effect */
  box-sizing: border-box;
}

.photo-img {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>