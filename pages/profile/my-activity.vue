<template>
  <v-card-title
    width="100%"
    class="text-primary rounded-pill bg-grey-lighten-4 text-center font-weight-bold mt-5 mb-10"
  >{{ currentMonth }}</v-card-title>

  <v-carousel
    v-model="currentMonth"
    hide-delimiters
    height="300"
    class="my-2"
  >
    <v-carousel-item
      v-for="(item, i) in statistics"
      :key="item.month"
      :value="item.month"
    >
      <v-sheet style="position: relative;">
        <DonutChart
          :data="item.items.map((i) => i.value)"
          :height="265"
          :labels="item.items"
          :hide-legend="true"
          :radius="10"
        >
        </DonutChart>
        <v-sheet
          class="circle-block elevation-5 d-flex flex-column align-center justify-center text-center"
        >
            <p>Total</p>
            <p class="font-weight-bold">${{ item.totalAmount }}</p>
        </v-sheet>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-card-title>
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in currentData?.items"
        :key="index"
        cols="6"
        class="my-1 text-center"
      >
        <v-chip
          class="text-capitalize"
          size="large"
          :class="`bg-${item.colorName}`"
        >
          {{ item.name }} ${{ item.value }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card-title>

  <v-card-title>
    <v-row no-gutters>
      <v-col
        v-for="(stat, index) in currentData?.stats"
        :key="index"
        cols="4"
      >
        <v-sheet class="d-flex flex-column align-center pa-2 bg-white">
          <div class="frame elevation-3">
            <v-btn
              icon
              variant="flat"
              color="primary"
              size="x-large"
              class="ma-1"
            >{{ stat.value }}</v-btn>
          </div>
          <v-card-title class="text-subtitle-2 px-0 text-center font-weight-bold">{{ stat.name }}</v-card-title>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card-title>

  <v-card-title>
    <v-btn
      variant="flat"
      color="primary"
      class="text-none rounded-lg"
      width="100%"
      size="large"
      :to="{ name: 'profile-history' }"
    >Order History</v-btn>
  </v-card-title>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'profile',
  pageTitle: 'My Activity',
  pageDetail: null,
})

// Static data to prevent memory leaks - replaced faker.js calls
const statistics = [
  {
    month: 'January',
    totalAmount: 45000,
    stats: [
      {
        name: 'Orders',
        value: 75,
      },
      {
        name: 'Received',
        value: 35,
      },
      {
        name: 'To Receive',
        value: 40,
      },
    ],
    items: [
      {
        name: 'Clothing',
        value: 5500,
        color: '#D81B60',
        colorName: 'pink-darken-1',
      },
      {
        name: 'Shoes',
        value: 3200,
        color: '#1E88E5',
        colorName: 'blue-darken-1',
      },
      {
        name: 'Bags',
        value: 2800,
        color: '#43A047',
        colorName: 'green-darken-1',
      },
      {
        name: 'Watches',
        value: 4100,
        color: '#FFB300',
        colorName: 'orange-darken-1',
      },
    ],
  },
  {
    month: 'February',
    totalAmount: 52000,
    stats: [
      {
        name: 'Orders',
        value: 68,
      },
      {
        name: 'Received',
        value: 42,
      },
      {
        name: 'To Receive',
        value: 26,
      },
    ],
    items: [
      {
        name: 'Clothing',
        value: 6200,
        color: '#D81B60',
        colorName: 'pink-darken-1',
      },
      {
        name: 'Shoes',
        value: 3800,
        color: '#1E88E5',
        colorName: 'blue-darken-1',
      },
      {
        name: 'Bags',
        value: 3100,
        color: '#43A047',
        colorName: 'green-darken-1',
      },
      {
        name: 'Watches',
        value: 4500,
        color: '#FFB300',
        colorName: 'orange-darken-1',
      },
    ],
  },
  {
    month: 'March',
    totalAmount: 38000,
    stats: [
      {
        name: 'Orders',
        value: 55,
      },
      {
        name: 'Received',
        value: 48,
      },
      {
        name: 'To Receive',
        value: 7,
      },
    ],
    items: [
      {
        name: 'Clothing',
        value: 4200,
        color: '#D81B60',
        colorName: 'pink-darken-1',
      },
      {
        name: 'Shoes',
        value: 2800,
        color: '#1E88E5',
        colorName: 'blue-darken-1',
      },
      {
        name: 'Bags',
        value: 2200,
        color: '#43A047',
        colorName: 'green-darken-1',
      },
      {
        name: 'Watches',
        value: 3600,
        color: '#FFB300',
        colorName: 'orange-darken-1',
      },
    ],
  },
  {
    month: 'April',
    totalAmount: 63000,
    stats: [
      {
        name: 'Orders',
        value: 82,
      },
      {
        name: 'Received',
        value: 56,
      },
      {
        name: 'To Receive',
        value: 26,
      },
    ],
    items: [
      {
        name: 'Clothing',
        value: 7200,
        color: '#D81B60',
        colorName: 'pink-darken-1',
      },
      {
        name: 'Shoes',
        value: 4800,
        color: '#1E88E5',
        colorName: 'blue-darken-1',
      },
      {
        name: 'Bags',
        value: 3500,
        color: '#43A047',
        colorName: 'green-darken-1',
      },
      {
        name: 'Watches',
        value: 5200,
        color: '#FFB300',
        colorName: 'orange-darken-1',
      },
    ],
  },
];

const currentMonth = ref('April');
const currentData = ref(statistics.find((stat) => stat.month === currentMonth.value));

watch(currentMonth, (newMonth) => {
  const monthIndex = statistics.findIndex((stat) => stat.month === newMonth);
  if (monthIndex !== -1) {
    currentData.value = statistics[monthIndex];
  }
});


</script>
<style scoped>
.frame {
  width: 94px;
  height: 94px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>