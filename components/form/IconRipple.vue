<template>
  <div class="icon-wrapper">
    <v-icon
      :icon="menu.icon"
      :size="menu.size"
      class="pa-8 rounded-circle"
      :color="isActive ? 'black' : menu.color"
      v-ripple
      @click="directTo(menu)"
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

function directTo(menu) {
  if (menu.to) {
    navigateTo(menu.to);
  } else {
    console.warn('No route defined for this menu item:', menu);
  }
}

const isActive = computed(() => {
  const name = route.name || '';
  const pageKey = props.menu.page;
  return name.includes(pageKey);
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