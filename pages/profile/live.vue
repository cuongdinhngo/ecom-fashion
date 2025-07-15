<template>
  <v-card class="pa-0 elevation-0 bg-transparent" tile density="compact" max-width="100%">
    <div style="position: relative; display: inline-block; width: 100%">
      <v-img
        src="https://picsum.photos/id/58/400/700"
        height="750"
        width="100%"
        class="rounded-lg"
        cover
      ></v-img>

      <!-- Hotspot markers -->
      <template v-for="(hotspot, idx) in hotspots" :key="idx">
        <div
          class="hotspot-dot"
          :style="{
            position: 'absolute',
            top: hotspot.y + '%',
            left: hotspot.x + '%',
            transform: 'translate(-50%, -50%)',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,0,0,0.8)',
            cursor: 'pointer'
          }"
          @click="openHotspot(hotspot)"
        />
      </template>
      <!-- Hotspot detail dialog -->
      <v-dialog v-model="showDialog" max-width="300">
        <v-card>
          <v-card-title v-if="activeHotspot">{{ activeHotspot?.title }}</v-card-title>
          <v-card-text v-if="activeHotspot">{{ activeHotspot?.description }}</v-card-text>
          <v-card-actions>
            <v-btn text @click="showDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <v-card-actions class="pa-0 ma-0 d-flex justify-space-between align-center">
      <v-chip prepend-icon="mdi-eye-outline" variant="text" size="large">
        1234
      </v-chip>

      <v-chip
        variant="flat"
        color="green"
        prepend-icon="mdi-circle-medium"
        label
        size="small"
      >
        Live
      </v-chip>

      <v-chip variant="text" size="x-large" color="primary" v-ripple>
        <v-icon size="x-large">mdi-skip-forward</v-icon>
      </v-chip>

      <v-btn color="primary" variant="flat" class="text-none" width="30%" rounded="lg" @click="navigateTo({ name: 'shop' })">Shop</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Hotspot shape
interface Hotspot {
  x: number;
  y: number;
  title: string;
  description: string;
}

// Define hotspots on the image: x/y in percent, with title and description
const hotspots = ref<Hotspot[]>([
  { x: 25, y: 40, title: 'Watch', description: 'Luxury watch with leather strap' },
  { x: 60, y: 30, title: 'Bag', description: 'Spacious tote bag for everyday use' },
  { x: 45, y: 65, title: 'Hat', description: 'Stylish fedora hat' }
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