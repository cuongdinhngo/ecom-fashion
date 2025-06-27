<template>
  <div class="icon-wrapper">
    <v-icon
      :icon="menu.icon"
      :size="menu.size"
      class="pa-8 rounded-circle"
      :color="isActive ? 'black' : menu.color"
      v-ripple
      @click="navigateTo(menu.to)"
    >
    </v-icon>
    <span v-if="isActive" class="active-indicator"></span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  menu: {
    type: Object,
    default: () => ({
      icon: 'mdi-home',
      to: { name: 'index' },
      page: 'index',
      size: 'x-large',
      color: 'primary'
    })
  }
});

const route = useRoute();
const page = route.name || 'index';

const isActive = computed(() => {
  return route.name === props.menu.page;
});
console.log('Current page:', page);
</script>
<style scoped>
.icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active-indicator {
  position: absolute;
  bottom: 10px;
  width: 15px;
  height: 4px;
  background-color: #000000;
  border-radius: 5px;
}
</style>