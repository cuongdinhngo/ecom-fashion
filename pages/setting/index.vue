<template>
  <v-card-title class="text-h4 font-weight-bold px-0">Settings</v-card-title>

  <v-list class="bg-white">
    <template v-for="(item, index) in menu" :key="index">
      <v-card-title class="text-h6 font-weight-bold px-0 mt-2">{{ item.header }}</v-card-title>
      <v-list-item
        v-for="(subItem, subIndex) in item.subMenu"
        :key="subIndex"
        :to="subItem.to"
        variant="plain"
        class="px-0 border-b-thin"
      >
        <v-list-item-title class="text-subtitle-1 text-black">{{ subItem.title }}</v-list-item-title>
        <template #append>
          <v-icon class="text-grey-darken-1" size="large">mdi-chevron-right</v-icon>
        </template>
      </v-list-item>
    </template>
  </v-list>
</template>
<script lang="ts" setup>
const menu = [
  {
    header: 'Personal',
    subMenu: [
      { title: 'Profile', to: { name: 'setting-profile' } },
      { title: 'Shipping Address', to: { name: 'setting' } },
      { title: 'Payment methods', to: { name: 'setting' } }
    ]
  },
  {
    header: 'Shop',
    subMenu: [
      { title: 'Country', to: { name: 'setting' } },
      { title: 'Currency', to: { name: 'setting' } },
      { title: 'Sizes', to: { name: 'setting' } },
      { title: 'Terms and Conditions', to: { name: 'setting' } },
    ]
  },
  {
    header: 'Account',
    subMenu: [
      { title: 'Language', to: { name: 'setting' } },
      { title: 'Contact Us', to: { name: 'setting' } }
    ]
  }
];
</script>