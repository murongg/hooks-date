<script setup lang="ts">
import { useHours } from '.'
const { hours, date } = useHours()
function setHours() {
  hours.value = 13
  setTimeout(() => {
    date.value.setHours(10)
  }, 1000)
}
</script>

<template>
  <p>
    hour: {{ hours }}
  </p>
  <p>
    date: {{ date }}
  </p>
  <button class="text-20px font-bold text-emerald-500" @click="setHours()">
    set hour
  </button>
</template>
