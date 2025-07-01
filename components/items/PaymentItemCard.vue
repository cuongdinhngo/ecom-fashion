<template>
  <v-list-item
    class="px-0 py-2"
  >
    <template #prepend>
      <div class="product-image mr-1" style="position: relative;">
        <ItemsAvatar
          :avatar="product.image"
          size="50"
          :frame-size="{ width: '60px', height: '60px' }"
        ></ItemsAvatar>
        <span class="item-counts bg-blue-lighten-4 text-caption">{{ product.quantity }}</span>
      </div>
    </template>
    <template #title>
      <span class="text-wrap text-caption">{{ product.shortDescription }}</span>
    </template>
    <template #append>
      <p class="text-h6 text-black font-weight-bold">${{ Number(product.price) * Number(product.quantity) }}</p>
    </template>
  </v-list-item>
</template>
<script lang="ts" setup>
const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true
  }
});

console.log('Product in PaymentItemCard:', props.product);
</script>
<style scoped>
.item-counts {
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>