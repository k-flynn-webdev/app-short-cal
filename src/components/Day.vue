<script setup>
defineProps({
  day: {
    type: Number,
    required: true,
  },
});

// Days need:
// - to be aware of what group of days its a apart of so it blends together correctly
</script>

<template>
  <div class="day">
    <p>{{ day }}</p>
  </div>
</template>

<style>
/*.day {*/
/*  padding: 0.5rem;*/
/*  border: 2px solid #2c3e50;*/
/*}*/
</style>
