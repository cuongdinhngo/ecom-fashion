<template>
  <v-card-title class="text-h5 font-weight-bold px-1">
    Recently viewed
  </v-card-title>

  <v-card-title class="pa-0">
    <v-item-group selected-class="text-primary font-weight-bold" class="ga-2" v-model="selectedDate">
      <v-row no-gutters>
        <v-col cols="5" class="px-1">
            <v-item v-slot="{ isSelected, selectedClass, toggle }" :value="today">
            <!-- Today -->
            <v-list-item
              @click="toggle();"
              rounded="pill"
              :class="[
                'text-center',
                isSelected ? 'bg-blue-lighten-5' : 'bg-grey-lighten-3',
                selectedClass
              ]"
            >
              <template #title>
                <span :class="isSelected ? 'font-weight-bold' : ''">Today</span>
              </template>

              <template #append>
                <v-btn
                  v-if="isSelected"
                  icon
                  variant="flat"
                  color="primary"
                  size="25"
                ><v-icon size="17">mdi-check-bold</v-icon></v-btn>
              </template>
            </v-list-item>
          </v-item>
        </v-col>

        <v-col cols="5" class="px-1">
          <!-- Past Date -->
          <v-item v-slot="{ isSelected, selectedClass, toggle }" :value="pastDate">
            <v-list-item
              @click="toggle()"
              rounded="pill"
              :class="[
                'text-center',
                isSelected ? 'bg-blue-lighten-5' : 'bg-grey-lighten-3', 
                selectedClass
              ]"
            >
              <template #title>
                <span :class="isSelected ? 'font-weight-bold' : ''">{{ pastDate === yesterday ? 'Yesterday' : pastDate }}</span>
              </template>

              <template #append>
                <v-btn
                  v-if="isSelected"
                  icon
                  variant="flat"
                  color="primary"
                  size="25"
                ><v-icon size="17">mdi-check-bold</v-icon></v-btn>
              </template>
            </v-list-item>
          </v-item>
        </v-col>

        <v-col cols="2" class="d-flex justify-center align-center">
          <!-- Date Picker -->
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
            <v-btn
              icon
              color="primary"
              size="small"
            >
              <v-icon>mdi-calendar</v-icon>
              <v-menu activator="parent" :close-on-content-click="false">
                <v-date-picker
                  v-model="datePicker"
                  show-adjacent-months
                  color="primary"
                ></v-date-picker>
              </v-menu>
            </v-btn>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-card-title>

  <!-- Recently Viewed -->
  <v-card class="pa-0 elevation-0 bg-white" tile min-height="100vh">
    <ItemsContainerCard>
      <v-row no-gutters>
        <v-col
          v-for="(item, index) in products"
          :key="index"
          cols="6"
          class="px-1"
        >
          <ItemsProductCard
            :item="item"
          />
        </v-col>
      </v-row>
    </ItemsContainerCard>
  </v-card>
</template>
<script setup lang="ts">
const { products } = useProducts({ quantity: 6 });

const today = useDateFormat(new Date(), 'YYYY-MM-DD');
const selectedDate = ref(today.value);
const yesterday = useDateFormat(new Date(Date.now() - 86400000), 'YYYY-MM-DD');
const pastDate = ref(yesterday.value);
const datePicker = ref('');

watch(datePicker, (newValue) => {
  console.log('new datePicker', useDateFormat(new Date(newValue), 'YYYY-MM-DD').value);
  pastDate.value = useDateFormat(new Date(newValue), 'MMM, DD').value;
  selectedDate.value = pastDate.value;
});
</script>