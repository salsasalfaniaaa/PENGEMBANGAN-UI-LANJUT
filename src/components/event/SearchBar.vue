<script setup>
defineProps({
  modelValue: String
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="search-bar-container">
    <input 
      type="text"
      class="search-input"
      placeholder="Search events by title or location..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.search-bar-container {
  width: 100%;
}

.search-input {
  width: 100%;
  max-width: 550px; /* Lebar maksimal disesuaikan agar pas seperti di gambar contoh */
  padding: 12px 18px;
  font-size: 15px;
  border: 1px solid #c7d2fe; /* Warna border sedikit keunguan seperti referensi */
  border-radius: 12px;
  outline: none;
  background-color: #ffffff;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-input:focus {
  border-color: #6644ff;
  box-shadow: 0 0 0 3px rgba(102, 68, 255, 0.15);
}
</style>