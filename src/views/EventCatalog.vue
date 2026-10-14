<script setup>
import EventCard from '@/components/event/EventCard.vue'
import SearchBar from '@/components/event/SearchBar.vue'
import CategoryFilter from '@/components/event/CategoryFilter.vue'

import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = [
  'all',
  'Music',
  'Sport',
  'Education'
]

const events = ref([
  {
    id: 1,
    title: 'Konser Musik',
    category: 'Music'
  },
  {
    id: 2,
    title: 'Seminar',
    category: 'Education'
  }
])


const filteredEvents = computed(() => {
  return events.value.filter(event => {

    const matchSearch =
      event.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())

    const matchCategory =
      selectedCategory.value === 'all' ||
      event.category === selectedCategory.value


    return matchSearch && matchCategory
  })
})


function handleViewDetail(event){
  console.log(event)
}

</script>


<template>

<SearchBar 
  v-model="searchQuery"
/>


<CategoryFilter
  :categories="categories"
  v-model="selectedCategory"
/>


<div class="event-grid">

  <EventCard
    v-for="event in filteredEvents"
    :key="event.id"
    :event="event"
    @view-detail="handleViewDetail"
  />

</div>

</template>