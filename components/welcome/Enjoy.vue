<template>
  <WelcomeCard
    :data="{
      image: 'https://picsum.photos/600/600',
      slogon: 'Enjoy',
      description: 'Enjoy your experience with our application! We hope you find it useful and enjoyable.'
    }"
  >
    <template #action>
      <FormBigButton
        width="70%"
        title="Explore Now"
      />
    </template>
  </WelcomeCard>
</template>