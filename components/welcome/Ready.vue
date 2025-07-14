<template>
  <WelcomeCard
    :data="{
      image: productImg(),
      slogon: 'Ready',
      description: 'You are ready to start your journey with our application! We are here to support you every step of the way.'
    }"
  >
    <template #action>
      <FormBigButton
        width="70%"
        title="Get Started"
        :to="{ name: 'shop' }"
      />
    </template>
  </WelcomeCard>
</template>