<template>
  <ItemsTopDataCard title="My Orders">
    <ItemsChipLabel
      :show-badge="true"
      badge-color="green"
      label="To Pay"
    />

    <ItemsChipLabel
      :show-badge="true"
      badge-color="green"
      label="To Receive"
    />

    <ItemsChipLabel
      badge-color="green"
      label="To Review"
    />
  </ItemsTopDataCard>
</template>
<script setup lang="ts">

</script>