<script setup>
import { computed } from 'vue';

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
});

defineEmits(['view-detail']);

// Menggabungkan tanggal dan waktu
const formattedDateTime = computed(() => {
  const date = props.event.date || 'Oct 15, 2026';
  const time = props.event.time || '10:00 AM';
  return `${date} • ${time}`;
});
</script>

<template>
  <div class="event-card" @click="$emit('view-detail', event.id)">
    <!-- Header: Date Badge & Category Tag -->
    <div class="card-header">
      <span class="date-badge">
        {{ formattedDateTime }}
      </span>
      <span class="category-tag">
        {{ (event.cat || 'WORKSHOP').toUpperCase() }}
      </span>
    </div>

    <!-- Title -->
    <h3 class="event-title">
      {{ event.title }}
    </h3>

    <!-- Location dengan Ikon Pin Merah -->
    <div class="event-location">
      <span class="location-icon">📍</span>
      <span class="location-text">
        {{ event.loc || event.location }}
      </span>
    </div>

    <!-- Description -->
    <p class="event-description">
      {{ event.desc || event.description }}
    </p>
  </div>
</template>

<style scoped>
.event-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.event-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* Header Section */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.date-badge {
  background-color: #f0ebff;
  color: #6c5ce7;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
}

.category-tag {
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* Title */
.event-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.3;
  margin: 0;
}

/* Location Section */
.event-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: #64748b;
}

.location-icon {
  font-size: 0.9rem;
}

.location-text {
  font-weight: 500;
  color: #64748b;
}

/* Description Section */
.event-description {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>