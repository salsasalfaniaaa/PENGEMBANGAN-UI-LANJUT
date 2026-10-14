<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="category-filter">
    <button
      v-for="category in categories"
      :key="category"
      class="filter-btn"
      :class="{ active: modelValue === category }"
      @click="$emit('update:modelValue', category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<style scoped>
.category-filter {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 20px;
  color: #555;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background: #f4f4f5;
  border-color: #d4d4d8;
}

.filter-btn.active {
  background: #6644ff;
  color: #ffffff;
  border-color: #6644ff;
}
</style>