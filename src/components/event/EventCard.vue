<script setup>
defineProps({
  event: Object
});
defineEmits(['view-detail']);
</script>

<template>
  <AppCard>
    <h3>{{ event.title }}</h3>
    <button @click="$emit('view-detail', event.id)">
      View Details
    </button>
  </AppCard>
</template>