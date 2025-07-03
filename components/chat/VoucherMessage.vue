<template>
  <div class="vouchers">
    <span
      class="valid-date text-caption bg-grey-lighten-3 px-2 rounded-lg"
      style="position: absolute; top: 7px; right: 35px;"
    >Valid Unitl {{ voucher.expiredDate }}</span>
    <span
      class="voucher-desc text-subtitle-2"
      style="position: absolute; top: 50px; left: 60px;"
    >{{ `${voucher.value}% ${voucher.description}` }}</span>
    <v-btn
      variant="outlined"
      class="text-none rounded-lg"
      color="primary"
      width="30%"
      style="position: absolute; bottom: 10px; transform: translateX(110%);"
    >
      Collect
    </v-btn>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  voucher: {
    type: Object,
    required: true,
    default: () => ({
      description: 'off on your next purchase',
      value: 15,
      expiredDate: 'Aug 31, 25',
    })
  }
});

</script>
<style scoped>
.vouchers {
  background-image: url('/public/images/chat-voucher.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 120px;
  width: 100%;
  position: relative;
}
</style>