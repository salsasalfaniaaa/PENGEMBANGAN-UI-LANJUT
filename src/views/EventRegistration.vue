<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Data reaktif event sesuai dengan gambar referensi
const eventData = reactive({
  category: 'WORKSHOP',
  title: 'Design to Employ: Bridging Academia and the Creative Industry!',
  dateTime: 'Oct 23, 2026 • 10:30 AM',
  location: 'Jakarta Convention Center',
  availableSeats: 1000,
  description: 'Bawa Karya Kampusmu ke Panggung Industri Nyata! ⚡ Sering merasa ada jarak antara apa yang dipelajari di kelas dengan apa yang diminta oleh klien atau agensi? Saatnya menutup celah tersebut di Design to Employ: Bridging Academia and the Creative Industry!'
})

// Form State
const formData = reactive({
  fullName: 'Nadia',
  email: 'Nadiadia@gmail.com',
  phone: '09876545678',
  dob: '2004-11-11',
  reason: 'Saya ingin menghadiri acara ini untuk menjembatani pengetahuan akademis saya dengan realitas industri kreatif saat ini. Sebagai calon desainer profesional, saya butuh memahami ekspektasi nyata dari para Creative Director, cara mengemas portofolio yang menjual, dan...'
})

const bookingRef = ref('GTH-4983')
const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const handleBack = () => {
  router.push('/event-detail')
}

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    showSuccessModal.value = true
  }, 600)
}

const handleGoToCatalog = () => {
  showSuccessModal.value = false
  router.push('/')
}

const handleGoToYourEvents = () => {
  showSuccessModal.value = false
  router.push('/event-detail')
}
</script>

<template>
  <div class="gatherly-app">
    <!-- 1. Header Navigation Bar -->
    <header class="navbar">
      <div class="navbar-container">
        <div class="brand-logo" @click="router.push('/')">
          <span class="logo-icon">G</span>
          <span class="logo-text">Gatherly</span>
        </div>

        <nav class="nav-links">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/event-detail" class="nav-item">About</router-link>
          <router-link to="/event-registration" class="btn-browse">
            Browse <span class="chevron">ˇ</span>
          </router-link>
          <a href="#" class="nav-item" @click.prevent>Contact</a>
          <a href="#" class="nav-item font-semibold" @click.prevent>Organizer Dashboard</a>
        </nav>

        <div class="nav-right">
          <button type="button" class="lang-selector">
            🌐 EN <span class="chevron">ˇ</span>
          </button>
          <button type="button" class="mobile-menu-btn" aria-label="Toggle Menu">
            ☰
          </button>
        </div>
      </div>
    </header>

    <!-- 2. Main Container -->
    <main class="page-container">
      <div class="back-link-wrapper">
        <button type="button" class="btn-back" @click="handleBack">
          &larr; Back to Event Detail
        </button>
      </div>

      <div class="registration-grid">
        <!-- KOLOM KIRI: Registration Summary Card -->
        <aside class="summary-card">
          <span class="category-pill">{{ eventData.category }}</span>

          <h2 class="event-title">{{ eventData.title }}</h2>

          <div class="meta-section">
            <div class="meta-group">
              <span class="meta-label">DATE & TIME</span>
              <span class="meta-value">{{ eventData.dateTime }}</span>
            </div>

            <div class="meta-group">
              <span class="meta-label">LOCATION</span>
              <span class="meta-value">{{ eventData.location }}</span>
            </div>

            <div class="meta-group">
              <span class="meta-label">AVAILABLE SEATS</span>
              <span class="meta-value text-green">{{ eventData.availableSeats }} seats remaining</span>
            </div>
          </div>

          <div class="description-section">
            <p class="desc-text">{{ eventData.description }}</p>

            <div class="desc-stickers">
              <span class="sticker-item">📍 Lokasi: {{ eventData.location }} (JCC)</span>
              <span class="sticker-item">📅 Tahun Ini (2026) Apa yang akan kamu</span>
            </div>
          </div>
        </aside>

        <!-- KOLOM KANAN: Registration Form Card -->
        <section class="form-card">
          <div class="form-header">
            <h1 class="form-title">Registration Form</h1>
            <p class="form-subtitle">Fill out the attendee information below to confirm your participation.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="form-body">
            <div class="form-group">
              <label for="fullName">Full Name <span class="required">*</span></label>
              <input
                id="fullName"
                v-model="formData.fullName"
                type="text"
                required
                placeholder="Enter your full name"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address <span class="required">*</span></label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                placeholder="Enter your email address"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number <span class="required">*</span></label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                required
                placeholder="08xxxxxxxxxx"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="dob">Date of Birth <span class="required">*</span></label>
              <div class="date-input-wrapper">
                <input
                  id="dob"
                  v-model="formData.dob"
                  type="date"
                  required
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="reason">Reason for Attending <span class="required">*</span></label>
              <textarea
                id="reason"
                v-model="formData.reason"
                rows="4"
                required
                placeholder="Tell us why you want to attend this event..."
                class="form-textarea"
              ></textarea>
            </div>

            <div class="form-actions">
              <button
                type="submit"
                class="btn-submit"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Processing...</span>
                <span v-else>Complete Registration</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>

    <!-- 3. Modal Pop-Up Konfirmasi Pendaftaran (Hanya dirender saat showSuccessModal true) -->
    <div v-if="showSuccessModal" class="modal-overlay" @click.self="showSuccessModal = false">
      <div class="modal-card-custom">
        
        <div class="modal-badge-wrapper">
          <span class="badge-success-tag">SUCCESS</span>
        </div>

        <h2 class="modal-title-custom">Registration Confirmed</h2>

        <p class="modal-desc-custom">
          Thank you, <strong>{{ formData.fullName }}</strong>! Your registration for <strong>{{ eventData.title }}</strong> has been officially confirmed.
        </p>

        <div class="receipt-box">
          <div class="receipt-row">
            <span class="receipt-label">Booking Reference</span>
            <span class="booking-ref-badge">{{ bookingRef }}</span>
          </div>

          <div class="receipt-row">
            <span class="receipt-label">Attendee Email</span>
            <span class="receipt-val val-bold">{{ formData.email }}</span>
          </div>

          <div class="receipt-row">
            <span class="receipt-label">Event Schedule</span>
            <span class="receipt-val val-bold">{{ eventData.dateTime }}</span>
          </div>

          <div class="receipt-row">
            <span class="receipt-label">Venue / Location</span>
            <span class="receipt-val val-bold">{{ eventData.location }}</span>
          </div>
        </div>

        <div class="modal-divider"></div>

        <div class="modal-action-buttons">
          <button type="button" class="btn-modal-outline" @click="handleGoToCatalog">
            Back to Event Catalog
          </button>
          <button type="button" class="btn-modal-purple" @click="handleGoToYourEvents">
            Go to Your Events
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.gatherly-app {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

.navbar {
  background-color: #2b2b52;
  color: #ffffff;
  padding: 14px 32px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
}

.logo-icon {
  background-color: #ffffff;
  color: #2b2b52;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 16px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-item {
  color: #d1d5db;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-item:hover {
  color: #ffffff;
}

.btn-browse {
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-selector {
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.mobile-menu-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 16px;
  cursor: pointer;
}

.page-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 24px 24px 64px;
  position: relative;
  z-index: 1;
}

.back-link-wrapper {
  margin-bottom: 20px;
}

.btn-back {
  background: none;
  border: none;
  color: #64748b;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.btn-back:hover {
  color: #4f46e5;
}

.registration-grid {
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}

.summary-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.category-pill {
  display: inline-block;
  background-color: #f3e8ff;
  color: #7e22ce;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 20px;
}

.event-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.35;
  margin: 0 0 20px;
}

.meta-section {
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.meta-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-size: 11px;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.05em;
}

.meta-value {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
}

.text-green {
  color: #16a34a;
}

.description-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.desc-text {
  font-size: 13.5px;
  color: #64748b;
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
  color: #475569;
  font-weight: 500;
}

.form-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 36px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.form-header {
  margin-bottom: 28px;
}

.form-title {
  font-size: 26px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 8px;
}

.form-subtitle {
  font-size: 14px;
  color: #64748b;
  margin: 0;
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 13.5px;
  font-weight: 700;
  color: #1e293b;
}

.required {
  color: #ef4444;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #1e293b;
  background-color: #f8fafc;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  background-color: #ffffff;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 110px;
}

.btn-submit {
  width: 100%;
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 14px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: #4f46e5;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 9999;
  box-sizing: border-box;
}

.modal-card-custom {
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 32px;
  max-width: 500px;
  width: 100%;
  text-align: left;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  position: relative;
  z-index: 10000;
}

.modal-badge-wrapper {
  display: flex;
  margin-bottom: 12px;
}

.badge-success-tag {
  background: #dcfce7;
  color: #16a34a;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #bbf7d0;
}

.modal-title-custom {
  font-size: 22px;
  font-weight: 800;
  color: #15143d;
  margin: 0 0 12px 0;
}

.modal-desc-custom {
  font-size: 13.5px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0 0 18px 0;
}

.modal-desc-custom strong {
  color: #15143d;
  font-weight: 700;
}

.receipt-box {
  background: #f9fafb;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.receipt-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.receipt-label {
  color: #6b7280;
  font-weight: 500;
}

.receipt-val {
  color: #15143d;
}

.val-bold {
  font-weight: 700;
}

.booking-ref-badge {
  background: #ede9fe;
  color: #6644ff;
  font-weight: 800;
  font-size: 12.5px;
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 0.03em;
}

.modal-divider {
  height: 1px;
  background: #f3f4f6;
  margin: 20px 0 18px 0;
}

.modal-action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.btn-modal-outline {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  color: #374151;
  font-size: 13.5px;
  font-weight: 700;
  padding: 11px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-modal-outline:hover {
  background: #f9fafb;
}

.btn-modal-purple {
  background: #6644ff;
  border: none;
  color: #ffffff;
  font-size: 13.5px;
  font-weight: 700;
  padding: 11px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-modal-purple:hover {
  background: #5233ea;
}

@media (max-width: 900px) {
  .registration-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }

  .modal-action-buttons {
    grid-template-columns: 1fr;
  }
}
</style>