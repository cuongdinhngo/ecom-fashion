<template>
  <div :class="expireSoon ? 'expire-vouchers' : 'vouchers'">
    <span
      v-if="expireSoon"
      class="text-caption text-red-lighten-1"
      style="position: absolute; top: 10px; right: 180px;"
    >{{ daysLeft }} days left</span>
    <span
      :class="[
        expireSoon ? 'bg-red-lighten-5' : 'bg-grey-lighten-3',
        'valid-date text-caption px-2 rounded-lg'
      ]"
      style="position: absolute; top: 10px; right: 25px;"
    >Valid Unitl {{ voucher.expiredDate }}</span>
    <span
      class="voucher-title text-h6 font-weight-bold d-flex align-center"
      style="position: absolute; top: 60px; left: 40px;"
    >
      <v-icon size="25" color="primary" class="mr-2">{{ voucher.icon }}</v-icon>
      {{ voucher.title }}
    </span>
    <span
      class="voucher-desc text-subtitle-2"
      style="position: absolute; top: 90px; left: 40px;"
    >{{ `${voucher.value}% ${voucher.description}` }}</span>
    <v-btn
      v-if="selectedVoucher"
      :variant="selectedVoucher?.value === voucher.value ? 'tonal' : 'flat'"
      class="text-none rounded-lg px-10"
      :color="selectedVoucher?.value === voucher.value ? 'grey' : 'primary'"
      style="position: absolute; bottom: 10px; right: 30px;"
      @click="applyVoucher"
    >
      {{ selectedVoucher?.value === voucher.value ? 'Applied' : 'Apply' }}
    </v-btn>
    <v-btn
      v-else
      class="text-none rounded-lg px-5"
      color="primary"
      style="position: absolute; bottom: 10px; right: 30px;"
      @click="applyVoucher"
    >Collected</v-btn>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  voucher: {
    type: Object,
    required: true
  }
});

const selectedVoucher = defineModel('selectedVoucher', {
  type: Object,
  default: null
});

const daysLeft = ref(0);

const expireSoon = computed(() => {
  const today = new Date();
  const expiryDate = parseExpiredDate(props.voucher.expiredDate);
  const timeDiff = expiryDate.getTime() - today.getTime();
  daysLeft.value = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysLeft.value <= 7;
});

// Parse expiredDate like "Jul 25th, 25" to a Date object
function parseExpiredDate(dateStr: string): Date {
  // Remove ordinal suffix (st, nd, rd, th)
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
  // Add 20 prefix to year if year is 2 digits
  const withFullYear = cleaned.replace(/, (\d{2})$/, (_, y) => `, 20${y}`);
  return new Date(withFullYear);
}

function applyVoucher() {
  selectedVoucher.value = props.voucher;
  console.log('Voucher applied:', props.voucher);
}
</script>
<style scoped>
.vouchers {
  background-image: url('/public/images/voucher.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 120px;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
}

.expire-vouchers {
  background-image: url('/public/images/expire-voucher.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 120px;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
}
</style>