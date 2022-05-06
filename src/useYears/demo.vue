<script setup lang="ts">
import { useYears } from '.'
const { years, date } = useYears()
function setFullYear() {
  years.value = 13
  setTimeout(() => {
    date.value.setFullYear(10)
  }, 1000)
}
</script>

<template>
  <p>
    years: {{ years }}
  </p>
  <p>
    date: {{ date }}
  </p>
  <button class="text-20px font-bold text-emerald-500" @click="setFullYear()">
    set hour
  </button>
</template>
