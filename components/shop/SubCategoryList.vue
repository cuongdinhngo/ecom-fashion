<template>
  <ItemsContainerCard
    :hidden-header="true"
  >
    <v-item-group
      selected-class="bg-primary" multiple
      v-model="searchQuery.subCategories"
    >
      <v-row no-gutters>
        <v-col
          v-for="(item, index) in subCategories"
          :key="index"
          cols="2"
          class="d-flex flex-column align-center justify-center"
        >
          <v-item v-slot="{ isSelected, selectedClass, toggle }" :value="item.title">
            <div
              class="avatar-frame elevation-1"
              :style="{ width: '60px', height: '60px', position: 'relative' }"
            >
              <v-avatar
                :size="50"
                :image="item.image"
                @click="toggle()"
              ></v-avatar>
              
              <!-- Check Signal-->
              <v-avatar
                v-if="isSelected"
                size="20"
                color="primary"
                style="position: absolute;top: 2px; right: 2px;"
              >
                <v-icon size="10">mdi-check-bold</v-icon>
              </v-avatar>
            </div>
            <v-list-item-title class="text-caption text-center text-wrap mt-1" style="height: 36px;">
              {{ item.title }}
            </v-list-item-title>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </ItemsContainerCard>
</template>
<script setup lang="ts">
defineProps({
  subCategories: {
    type: Array as () => Object[],
    default: () => []
  }
});

const searchQuery = useSearchQuery();
</script>