<script setup>
import { ref, computed } from 'vue';
import SearchBar from '@/components/event/SearchBar.vue';
import CategoryFilter from '@/components/event/CategoryFilter.vue';


const searchQuery = ref('');
const selectedCategory = ref('All');


const categories = [
  'All',
  'Workshop',
  'Meetup',
  'Competition',
  'Seminar',
  'Conference'
];


const events = ref([
  {
    id: 1,
    date: 'Oct 12, 2026',
    category: 'Workshop',
    title: 'Vue.js Mastery Workshop',
    location: 'Tech Hub, Jakarta',
    description:
      'Learn advanced Vue 3 concepts, Composition API, and state management to build high-performance web applications interactively.'
  },
  {
    id: 2,
    date: 'Oct 15, 2026',
    category: 'Meetup',
    title: 'National Tech Meetup',
    location: 'Main Auditorium, City Center',
    description:
      'A gathering of developers and tech enthusiasts to share the latest industry trends and expand professional networks.'
  },
  {
    id: 3,
    date: 'Nov 02, 2026',
    category: 'Competition',
    title: 'Startup Pitch Competition',
    location: 'Innovation Center',
    description:
      'Watch startup founders pitch their innovative ideas in front of investors.'
  },
  {
    id: 4,
    date: 'Nov 10, 2026',
    category: 'Workshop',
    title: 'UI/UX Design Sprint',
    location: 'Creative Studio',
    description:
      'A hands-on session about designing user interfaces and visual hierarchy.'
  },
  {
    id: 5,
    date: 'Nov 20, 2026',
    category: 'Seminar',
    title: 'Digital Marketing Seminar',
    location: 'Grand Hotel Hall',
    description:
      'Learn modern digital marketing strategies from SEO to conversion.'
  },
  {
    id: 6,
    date: 'Dec 05, 2026',
    category: 'Conference',
    title: 'Community Leaders Summit',
    location: 'Gatherly HQ',
    description:
      'Conference for community leaders to build sustainable ecosystems.'
  }
]);



const filteredEvents = computed(() => {

  return events.value.filter(event => {

    const keyword = searchQuery.value.toLowerCase();


    const matchSearch =
      event.title.toLowerCase().includes(keyword) ||
      event.location.toLowerCase().includes(keyword);


    const matchCategory =
      selectedCategory.value === 'All' ||
      event.category.toLowerCase() ===
      selectedCategory.value.toLowerCase();


    return matchSearch && matchCategory;

  });

});

</script>



<template>

<div class="event-list-page">


  <!-- HEADER -->

  <div class="page-header">

    <h1>
      Upcoming Events
    </h1>

    <p>
      Discover workshops, seminars, tech meetups, and competitions near you.
    </p>

  </div>



  <!-- SEARCH FILTER -->

  <div class="filter-section">


    <SearchBar
      v-model="searchQuery"
    />


    <CategoryFilter
      :categories="categories"
      v-model="selectedCategory"
    />


  </div>




  <!-- EMPTY STATE -->

  <div
    v-if="filteredEvents.length === 0"
    class="empty-state"
  >

    No events found matching your criteria.

  </div>




  <!-- EVENTS -->

  <div
    v-else
    class="event-grid"
  >


    <div
      v-for="event in filteredEvents"
      :key="event.id"
      class="event-card"
    >


      <div class="event-top">


        <span class="event-date">
          {{ event.date }}
        </span>


        <span class="event-category">
          {{ event.category }}
        </span>


      </div>




      <h3>
        {{ event.title }}
      </h3>




      <p class="event-location">
        📍 {{ event.location }}
      </p>




      <p class="event-description">

        {{ event.description }}

      </p>




      <div class="event-footer">

        <router-link :to="`/browse/events/${event.id}`">

          View Event Details →

        </router-link>

      </div>



    </div>



  </div>


</div>


</template>



<style scoped>


.event-list-page {

  padding: 10px 0;

}



/* HEADER */

.page-header {

  margin-bottom: 25px;

}


.page-header h1 {

  font-size: 32px;

  font-weight: 800;

  color:#16162c;

  margin:0 0 8px;

}


.page-header p {

  color:#667085;

  font-size:15px;

}



/* FILTER */

.filter-section {

  display:flex;

  flex-direction:column;

  gap:12px;

  margin-bottom:25px;

}



/* EMPTY */

.empty-state {

  height:160px;

  background:white;

  border:1px solid #e5e7eb;

  border-radius:12px;

  display:flex;

  justify-content:center;

  align-items:center;

  color:#667085;

  font-size:14px;

}



/* GRID */

.event-grid {

  display:grid;

  grid-template-columns:repeat(4,1fr);

  gap:18px;

}



/* CARD */

.event-card {

  background:white;

  border:1px solid #e5e7eb;

  border-radius:12px;

  padding:18px;

  min-height:260px;

  display:flex;

  flex-direction:column;

}



/* TOP */

.event-top {

  display:flex;

  justify-content:space-between;

  align-items:center;

  margin-bottom:18px;

}



.event-date {

  background:#eeebff;

  color:#6246ff;

  padding:5px 10px;

  border-radius:6px;

  font-size:12px;

  font-weight:600;

}



.event-category {

  font-size:11px;

  font-weight:700;

  color:#667085;

}



/* TEXT */

.event-card h3 {

  font-size:17px;

  color:#111827;

  margin:0 0 12px;

  line-height:1.3;

}



.event-location {

  font-size:12px;

  color:#667085;

  margin-bottom:14px;

}



.event-description {

  font-size:12px;

  line-height:1.5;

  color:#667085;

  flex:1;

}



/* FOOTER */

.event-footer {

  border-top:1px solid #eeeeee;

  padding-top:12px;

}



.event-footer a {

  font-size:12px;

  font-weight:700;

  text-decoration:none;

  color:#111827;

}




@media(max-width:1200px){

.event-grid{

grid-template-columns:repeat(3,1fr);

}

}



@media(max-width:800px){

.event-grid{

grid-template-columns:repeat(2,1fr);

}

}



@media(max-width:500px){

.event-grid{

grid-template-columns:1fr;

}

}


</style>