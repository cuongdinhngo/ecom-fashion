<template>
  <WelcomeCard
    :data="{
      image: productImg(),
      slogon: 'Enjoy',
      description: 'Enjoy your experience with our application! We hope you find it useful and enjoyable.'
    }"
  >
    <template #action>
      <FormBigButton
        width="70%"
        title="Explore Now"
        :to="{ name: 'shop' }"
      />
    </template>
  </WelcomeCard>
</template>