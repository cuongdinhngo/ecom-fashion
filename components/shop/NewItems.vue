<template>
  <ItemsTopDataCard title="NewItems" :see-all="true">
    <v-slide-group
      v-model="model"
      center-active
      :show-arrows="false"
    >
      <v-slide-group-item
        v-for="item in newItems"
        :key="item.id"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          class="mr-3 rounded-lg elevation-0 pa-0 my-0 bg-transparent"
          height="240"
          width="150"
          @click="toggle"
        >
          <div class="photo-frame elevation-5">
            <v-img
              :src="item.image"
              width="100%"
              height="100%"
              cover
              class="rounded-lg photo-img"
            />
          </div>
          <v-card-subtitle class="pa-0 my-2 subtitle-two-lines">
            <span class="text-caption">{{ item.description }}</span>
          </v-card-subtitle>
          <v-card-title class="ma-0 pa-0">
            <span class="text-subtitle font-weight-bold">${{ item.price }}</span>
          </v-card-title>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
const model = ref(null)
const newItems = Array.from({ length: 15 }, () => ({
  id: faker.string.uuid(),
  description: faker.lorem.sentence({ min: 5, max: 10 }),
  price: faker.commerce.price(),
  image: `https://picsum.photos/130/130?random=${Math.floor(Math.random() * 1000)}`,
}));
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