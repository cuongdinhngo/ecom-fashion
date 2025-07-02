<template>
  <ItemsTopDataCard title="My Orders">
    <ItemsChipLabel
      :show-badge="true"
      :label="{
        title: 'To Pay',
        to: { name: 'profile' }
      }"
      :options="labelOptions"
    />

    <ItemsChipLabel
      :show-badge="true"
      :options="labelOptions"
      :label="{
        title: 'To Receive ',
        to: { name: 'profile-to-receive' }
      }"
    />

    <ItemsChipLabel
      :options="labelOptions"
      :label="{
        title: 'To Review',
        to: { name: 'profile' }
      }"
    />
  </ItemsTopDataCard>
</template>
<script setup lang="ts">
const labelOptions = {
  chipColor: 'primary',
  badgeColor: 'green',
  size: 'x-large'
};
</script>