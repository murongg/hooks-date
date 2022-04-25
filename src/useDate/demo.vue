<script setup lang="ts">
import { useDate } from '.'
const date = useDate(new Date())
</script>

<template>
  <p>
    {{ date }}
  </p>
</template>
