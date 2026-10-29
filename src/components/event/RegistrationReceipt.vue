<script setup>
defineProps({
  confirmedData: {
    type: Object,
    default: () => ({
      name: 'Nadia',
      email: 'Nadiadia@gmail.com',
      bookingRef: 'GTH-4983'
    })
  },
  event: {
    type: Object,
    default: () => ({
      title: 'Design to Employ: Bridging Academia and the Creative Industry!',
      date: 'Oct 23, 2026 • 10:30 AM',
      loc: 'Jakarta Convention Center'
    })
  }
})
</script>

<template>
  <div class="receipt-wrapper">
    <p class="receipt-text">
      Thank you, <strong>{{ confirmedData?.name || 'Nadia' }}</strong>! Your registration for
      <strong>{{ event?.title || 'Design to Employ: Bridging Academia and the Creative Industry!' }}</strong>
      has been officially confirmed.
    </p>

    <!-- Kotak Rincian Tiket / Detail Grey Box -->
    <div class="details-box">
      <div class="detail-row">
        <span class="detail-label">Booking Reference</span>
        <span class="ref-badge">{{ confirmedData?.bookingRef || 'GTH-4983' }}</span>
      </div>

      <div class="detail-row">
        <span class="detail-label">Attendee Email</span>
        <span class="detail-value text-bold">{{ confirmedData?.email || 'Nadiadia@gmail.com' }}</span>
      </div>

      <div class="detail-row">
        <span class="detail-label">Event Schedule</span>
        <span class="detail-value text-bold">{{ event?.date || 'Oct 23, 2026 • 10:30 AM' }}</span>
      </div>

      <div class="detail-row">
        <span class="detail-label">Venue / Location</span>
        <span class="detail-value text-bold">{{ event?.loc || 'Jakarta Convention Center' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.receipt-wrapper {
  text-align: left;
}

.receipt-text {
  font-size: 13.5px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0 0 18px 0;
}

.receipt-text strong {
  color: #15143d;
  font-weight: 700;
}

.details-box {
  background: #f9fafb;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.detail-label {
  color: #6b7280;
  font-weight: 500;
}

.detail-value {
  color: #15143d;
}

.text-bold {
  font-weight: 700;
}

.ref-badge {
  background: #ede9fe;
  color: #6644ff;
  font-weight: 800;
  font-size: 12.5px;
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 0.03em;
}
</style>