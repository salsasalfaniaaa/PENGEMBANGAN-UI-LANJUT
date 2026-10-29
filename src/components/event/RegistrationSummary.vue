<script setup>
import { computed } from 'vue'
import AppCard from '@/components/ui/AppCard.vue'

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})

defineEmits(['back'])

// Mengambil bagian awal deskripsi agar ringkas sesuai referensi
const shortDescription = computed(() => {
  if (!props.event.desc) return ''
  // Mengambil teks sebelum emoji petir atau memotong teks secukupnya
  const parts = props.event.desc.split('Bawa Karya Kampusmu')
  if (parts.length > 1) {
    return "Bawa Karya Kampusmu ke Panggung Industri Nyata! ⚡ Sering merasa ada jarak antara apa yang dipelajari di kelas dengan apa yang diminta oleh klien atau agensi? Saatnya menutup celah tersebut di Design to Employ: Bridging Academia and the Creative Industry!"
  }
  return props.event.desc.slice(0, 240) + '...'
})
</script>

<template>
  <div class="summary-wrapper">
    <!-- Tombol Kembali -->
    <button type="button" class="btn-back" @click="$emit('back')">
      &larr; Back to Event Detail
    </button>

    <!-- Kartu Putih Ringkasan Event -->
    <AppCard class="summary-card">
      <!-- Badge Kategori -->
      <span class="category-pill">{{ event.cat || 'WORKSHOP' }}</span>
      
      <!-- Judul Event -->
      <h3 class="event-name">{{ event.title }}</h3>

      <!-- Detail Informasi -->
      <div class="summary-details">
        <div class="summary-item">
          <span class="item-label">DATE & TIME</span>
          <span class="item-value">{{ event.date }}</span>
        </div>

        <div class="summary-item">
          <span class="item-label">LOCATION</span>
          <span class="item-value">{{ event.loc }}</span>
        </div>

        <div class="summary-item">
          <span class="item-label">AVAILABLE SEATS</span>
          <span class="item-value text-accent">{{ event.quota }} seats remaining</span>
        </div>
      </div>

      <!-- DESKRIPSI & STIKER IKON (Dibuat ringkas persis referensi) -->
      <div class="summary-desc-box">
        <p class="summary-desc">{{ shortDescription }}</p>
        
        <div class="desc-stickers">
          <span class="sticker-item">📍 Lokasi: {{ event.loc }} (JCC)</span>
          <span class="sticker-item">📅 Tahun Ini (2026) Apa yang akan kamu pelajari</span>
        </div>
      </div>
    </AppCard>
  </div>
</template>

<style scoped>
.summary-wrapper {
  width: 100%;
  min-width: 0;
}

.btn-back {
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #737373;
  cursor: pointer;
  padding: 0;
  margin-bottom: 16px;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s;
  font-family: inherit;
}

.btn-back:hover {
  color: #6644ff;
}

.summary-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 28px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.category-pill {
  display: inline-block;
  background: #ede9fe;
  color: #6d28d9;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 5px 12px;
  border-radius: 50px;
  margin-bottom: 16px;
}

.event-name {
  font-size: 22px;
  color: #15143d;
  margin: 0 0 20px 0;
  line-height: 1.3;
  font-weight: 700;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 18px;
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.item-label {
  font-size: 11px;
  color: #737373;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.item-value {
  font-size: 14px;
  font-weight: 600;
  color: #15143d;
}

.text-accent {
  color: #15803d;
  font-weight: 700;
}

.summary-desc-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.summary-desc {
  font-size: 13.5px;
  color: #737373;
  line-height: 1.6;
  margin: 0;
}

.desc-stickers {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 4px;
}

.sticker-item {
  font-size: 13px;
  color: #4b5563;
  font-weight: 500;
}
</style>