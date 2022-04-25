<script setup lang="ts">
import { useNow } from '.';

const { now, year, seconds, month, day, hours, minutes, milliseconds, week } = useNow({ isExtend: true })
</script>

<template>
  <p>
    now： {{ now }}
  </p>
  <p>
    year：{{ year }}
  </p>
  <p>
    month：{{ month }}
  </p>
  <p>
    day：{{ day }}
  </p>
  <p> hours：{{ hours }}</p>
  <p> minutes：{{ minutes }}</p>
  <p> secound：{{ seconds }}</p>
  <p> milliseconds：{{ milliseconds }}</p>
  <p>week：{{ week }}</p>
</template>
