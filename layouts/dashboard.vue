<!-- ~/layouts/admin.vue -->
<template>
  <div class="admin-layout">
    <main class="main-content">
      <Navbar />

      <NuxtPage />
    </main>
  </div>
</template>
  
<script setup>
import Navbar from './navbar.vue'
// Import necessary components if any
</script>
  
<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
  /* Full viewport height */
}

.sidebar {
  width: 250px;
  /* Fixed width for the sidebar */
  background-color: #f4f4f4;
  /* Light background color */
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  /* Optional shadow effect */
}

.main-content {
  flex: 1;
  /* Takes up the remaining space */
  padding: 1rem;
  overflow-y: auto;
  /* Allows scrolling if content overflows */
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 0.5rem 0;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.sidebar a:hover {
  color: #007bff;
  /* Highlight color on hover */
}
</style>
  