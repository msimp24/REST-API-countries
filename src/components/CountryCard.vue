<script setup>
defineProps(['country'])
</script>

<template>
  <router-link class="event-link" :to="{ name: 'Details', params: { country: country.name } }">
    <div class="card">
      <img :src="country.flags.png" alt="" />
      <div class="card-info">
        <h3>{{ country.name }}</h3>
        <p>Population: {{ country.population }}</p>
        <p>Region: {{ country.region }}</p>
        <p>Capital: {{ country.capital }}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  max-width: 400px;
  width: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  font-size: 12px;
  min-height: 380px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: padding 0.2s;
}
.card-info {
  padding: 1rem;
}
.card-info p {
  margin-top: 0.5rem;
}
img {
  width: 100%;
  height: 180px;
}
h3 {
  font-weight: bold;
  margin: 1rem 0;
}

.card:hover {
  padding: 0.5rem;
}

@media (width < 846px) {
  .card {
    min-height: 350px;
  }
  img {
    height: 200px;
  }
}
</style>
