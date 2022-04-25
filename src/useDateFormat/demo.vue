<script setup lang="ts">
import { ref } from 'vue'
import { useDateFormat } from '.'
const formatter = ref('YYYY-MM-DD HH:mm:ss')
const date = useDateFormat(new Date(), formatter)
</script>

<template>
  <p class="text-20px font-bold text-emerald-500">
    {{ date }}
  </p>
</template>
