<template>
  <StoryCard>
    <div style="position: relative; display: inline-block; width: 100%">
      <v-img
        :src="'https://picsum.photos/id/20/600/1170'"
        height="100%"
        cover
        aspect-ratio="16/9"
      ></v-img>

      <!-- Hotspot markers -->
      <v-btn icon
        v-for="(hotspot, idx) in hotspots" :key="idx"
        variant="text"
        color="primary"
        size="x-small"
        :style="{
          position: 'absolute',
          top: hotspot.y + '%',
          left: hotspot.x + '%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          backgroundColor: '#FFFFFF',
          border: '2px solid rgba(0, 0, 0, 0.1)',
        }"
      >
        <v-icon size="x-large">mdi-star</v-icon>
        <v-menu activator="parent" open-on-click>
          <v-list class="rounded-lg">
            <v-list-item width="100%" class="product-spot">
              <v-list-item-title>
                <v-img
                  :src="hotspot.image"
                  height="100%"
                  width="150"
                  cover
                  aspect-ratio="16/9"
                  class="rounded-lg mb-4"
                ></v-img>
              </v-list-item-title>
              <v-list-item-action>
                <v-btn color="primary" variant="flat" class="text-none" width="100%" rounded="lg">Shop</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </div>
  </StoryCard>
</template>
<script setup lang="ts">

// Hotspot shape
interface Hotspot {
  x: number;
  y: number;
  title: string;
  description: string;
  image: string;
}

// Define hotspots on the image: x/y in percent, with title and description
const hotspots = ref<Hotspot[]>([
  { x: 25, y: 40, title: 'Watch', description: 'Luxury watch with leather strap', image: 'https://picsum.photos/seed/11/150/150' },
  { x: 70, y: 20, title: 'Shoes', description: 'Trendy sneakers for casual wear', image: 'https://picsum.photos/seed/22/150/150' },
  { x: 30, y: 70, title: 'Dress', description: 'Elegant summer dress', image: 'https://picsum.photos/seed/33/150/150' },
  { x: 50, y: 50, title: 'Jacket', description: 'Stylish leather jacket', image: 'https://picsum.photos/seed/44/150/150' },
]);

// Dialog state for hotspot details
const showDialog = ref(false);
const activeHotspot = ref<Hotspot | null>(null);

// Open hotspot detail dialog
function openHotspot(hotspot: Hotspot): void {
  activeHotspot.value = hotspot;
  showDialog.value = true;
}
</script>

<style scoped>
.hotspot-dot:hover {
  background-color: rgba(255,0,0,1);
}
</style>