<script setup>
import { reactive, ref } from 'vue'
import { useEvents } from '@/composables/useEvents'

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['success', 'cancel'])

const { registerEvent } = useEvents()

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  dob: '',
  reason: ''
})

const errorMessage = ref('')
const isSubmitting = ref(false)

const handleSubmit = () => {
  if (!form.fullName || !form.email || !form.phone || !form.dob || !form.reason) {
    errorMessage.value = 'Please fill in all required fields.'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const record = registerEvent(props.event.id, {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      dob: form.dob,
      reason: form.reason
    })
    emit('success', record)
  } catch (err) {
    errorMessage.value = err.message || 'Failed to register. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="form-wrapper-outer">
    <!-- Kotak Putih Utama (Hanya Berisi Header & Form Input) -->
    <div class="form-card-box">
      <div class="form-header">
        <h3>Registration Form</h3>
        <p class="form-subtitle">Fill out the attendee information below to confirm your participation.</p>
      </div>

      <div v-if="errorMessage" class="alert-error">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleSubmit" id="event-reg-form" class="reg-form">
        <div class="form-group">
          <label>Full Name *</label>
          <input v-model="form.fullName" type="text" placeholder="e.g. John Doe" class="form-input" />
        </div>

        <div class="form-group">
          <label>Email Address *</label>
          <input v-model="form.email" type="email" placeholder="e.g. name@example.com" class="form-input" />
        </div>

        <div class="form-group">
          <label>Phone Number *</label>
          <input v-model="form.phone" type="tel" placeholder="e.g. 081234567890" class="form-input" />
        </div>

        <div class="form-group">
          <label>Date of Birth *</label>
          <input v-model="form.dob" type="date" class="form-input" />
        </div>

        <div class="form-group">
          <label>Reason for Attending *</label>
          <textarea
            v-model="form.reason"
            rows="4"
            placeholder="Please describe your background, interests, or what you hope to achieve by joining this event..."
            class="form-input textarea-input"
          ></textarea>
        </div>
      </form>
    </div>

    <!-- Tombol Aksi Diletakkan di Luar Kotak Putih (Persis seperti contoh) -->
    <div class="form-actions-external">
      <button type="button" class="btn-cancel-custom" @click="$emit('cancel')">
        Cancel
      </button>
      <button type="submit" form="event-reg-form" class="btn-submit-custom" :disabled="isSubmitting">
        {{ isSubmitting ? 'Processing...' : 'Submit Registration' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper-outer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Kotak putih utama */
.form-card-box {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 36px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.form-header {
  margin-bottom: 24px;
}

.form-header h3 {
  font-size: 24px;
  color: #15143d;
  margin: 0 0 6px 0;
  font-weight: 700;
}

.form-subtitle {
  color: #737373;
  font-size: 14px;
  margin: 0;
}

.alert-error {
  background: #ffe3e3;
  color: #c92a2a;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 20px;
  border: 1px solid #ffa8a8;
}

.reg-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.form-group label {
  font-size: 13px;
  font-weight: 600;
  color: #15143d;
}

.form-input {
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  background: white;
  width: 100%;
  box-sizing: border-box;
  color: #15143d;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus {
  border-color: #6644ff;
  box-shadow: 0 0 0 3px rgba(102, 68, 255, 0.15);
}

.textarea-input {
  resize: vertical;
  min-height: 120px;
}

/* Area tombol di luar kotak putih, posisi di kanan bawah */
.form-actions-external {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
  padding: 0 4px;
}

.btn-cancel-custom {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  color: #25234f;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  transition: background 0.2s;
}

.btn-cancel-custom:hover {
  background: #f3f4f6;
}

.btn-submit-custom {
  background: #6644ff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  transition: background 0.2s;
}

.btn-submit-custom:hover {
  background: #5032d6;
}
</style>