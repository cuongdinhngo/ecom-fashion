<template>
  <v-row no-gutters>
    <v-col
      v-for="(voucher, index) in vouchers"
      :key="index"
      cols="6"
    >
      <v-card class="elevation-0 py-2 d-flex flex-column align-center justify-center text-center bg-transparent" tile>
        <div
          class="frame-wrapper"
          :style="{
            '--progress-angle': voucher.value * 3.6 + 'deg'
          }"
        >
          <v-avatar
            class="icon-frame"
            size="70"
          >
            <v-icon color="primary" size="x-large">{{ voucher.icon }}</v-icon>
          </v-avatar>
          <v-btn
            v-if="voucher.isChecked"
            color="primary"
            size="25"
            icon
            style="position: relative; top: -25px; right: -20px;"
          >
            <v-icon size="15">mdi-check-bold</v-icon>
          </v-btn>
        </div>
        <v-card-title class="text-subtitle-1 font-weight-bold text-wrap">
          {{ voucher.title }}
        </v-card-title>
        <v-card-text>{{ voucher.description }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
const vouchers = Array.from({ length: 6 }, () => {
  const randomValue = getRandomElement([0, 25, 50, 75, 100]);
  return {
    title: 'Gift Voucher',
    description: 'Special discount voucher for your purchase',
    isChecked: randomValue === 0,
    value: randomValue,
    icon: getRandomElement(['mdi-ticket-percent', 'mdi-gift-outline', 'mdi-star-outline', 'mdi-cake-variant', 'mdi-heart', 'mdi-cash-multiple']),
  }
});
</script>
<style scoped>
.frame-wrapper {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  box-shadow: 0 20px 16px 0 rgba(44, 62, 80, 0.10), 0 6px 4px 0 rgba(44, 62, 80, 0.08);
}
.frame-wrapper::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 50%;
  background: conic-gradient(
    #004CFF 0deg var(--progress-angle, 0deg),
    transparent var(--progress-angle, 0deg) 360deg
  );
  -webkit-mask-image: radial-gradient(circle, #000 99%, transparent 100%);
  mask-image: radial-gradient(circle, #000 99%, transparent 100%);
  z-index: 0;
}

.icon-frame {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #004CFF;
  background-color: #ffffff;
}
</style>