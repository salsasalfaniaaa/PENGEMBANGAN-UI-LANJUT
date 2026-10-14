<template>
  <div class="browse-page">
    <!-- Breadcrumb tunggal yang sejajar dengan judul -->
    <nav class="breadcrumb">
      <router-link to="/">Home</router-link> / 
      <router-link to="/browse">Browse</router-link> / 
      <span class="current">Event List</span>
    </nav>

    <!-- Header Judul & Subjudul -->
    <div class="browse-header">
      <h1>Browse & Discover</h1>
      <p>Discover workshops, seminars, tech meetups, and competitions near you.</p>
    </div>

    <!-- Konten anak (EventList akan muncul di sini) -->
    <div class="browse-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.browse-page {
  animation: fadeIn 0.4s ease;
  padding: 40px 80px;
  max-width: 1300px;
  margin: 0 auto;
}

/* Styling Breadcrumb */
.breadcrumb {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.breadcrumb a {
  color: #6644ff;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb .current {
  color: #1c1948;
  font-weight: 600;
}

.browse-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.browse-header h1 {
  font-size: 2.5rem;
  color: #1c1948;
  margin-bottom: 0.5rem;
  font-weight: 800;
}

.browse-header p {
  color: #666;
  font-size: 1.1rem;
  margin: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .browse-page {
    padding: 20px;
  }
}
</style>