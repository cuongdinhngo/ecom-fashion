<template>
  <v-card class="elevation-0 bg-transparent my-3">
    <v-card-title class="d-flex justify-space-between px-0">
      <span class="text-h6 font-weight-bold">{{ title }}</span>
      <SaleCountDown 
        color="primary"
        bgColor="pink-lighten-5"
        :duration="duration"
      />
    </v-card-title>
    <v-card-text class="d-flex justify-space-between px-0">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Top Data'
  },
  duration: {
    type: [String, Number],
    default: 3700
  }
})

const hour = ref(0)
const minute = ref(0)
const second = ref(0)
const remaining = ref(Number(props.duration))
let timer: ReturnType<typeof setInterval> | null = null

function pad(num: number) {
  return num.toString().padStart(2, '0')
}

function updateTime() {
  const h = Math.floor(remaining.value / 3600)
  const m = Math.floor((remaining.value % 3600) / 60)
  const s = remaining.value % 60
  hour.value = h
  minute.value = m
  second.value = s
}

function startCountdown() {
  updateTime()
  timer = setInterval(() => {
    if (remaining.value > 0) {
      remaining.value--
      updateTime()
    } else {
      clearInterval(timer!)
      timer = null
    }
  }, 1000)
}

onMounted(() => {
  remaining.value = Number(props.duration)
  startCountdown()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

watch(() => props.duration, (newVal) => {
  remaining.value = Number(newVal)
  if (timer) clearInterval(timer)
  startCountdown()
})
</script>