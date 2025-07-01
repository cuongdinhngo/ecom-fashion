<template>
  <div class="vouchers">
    <span
      class="valid-date text-caption bg-red-lighten-5 px-2 rounded-lg"
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
    >{{ `${voucher.value} ${voucher.description}` }}</span>
    <v-btn
      variant="flat"
      class="text-none rounded-lg px-10"
      color="primary"
      style="position: absolute; bottom: 10px; right: 30px;"
    >Apply</v-btn>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  voucher: {
    type: Object,
    required: true
  }
});
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
</style>