<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>

<template>
<div class="app-layout">
  <Navbar />
  <main class="main-content">
    <router-view />
  </main>
</div>
</template>

<style scoped>
.app-layout {
min-height: 100vh;
display: flex;
flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

</style>