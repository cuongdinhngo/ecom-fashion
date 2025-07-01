<template>
  <ItemsTopDataCard title="Most Popular" :see-all="true">
    <v-slide-group
      v-model="model"
      center-active
      :show-arrows="false"
    >
      <v-slide-group-item
        v-for="item in products"
        :key="item.id"
        v-slot="{ isSelected, toggle }"
      >
        <ItemsPopularItemCard
          :item="item"
          :toggle="toggle"
        />
      </v-slide-group-item>
    </v-slide-group>
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
const model = ref(null)

const { products } = useProducts({ quantity: 15});
</script>
