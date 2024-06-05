<script setup>
import { ref, watchEffect } from 'vue'
import CountryCard from '@/components/CountryCard.vue'
import countryData from './../assets/data/data.json'

import { toggleColorStore } from '@/stores/counter'
const toggleStore = toggleColorStore()

console.log(toggleStore.toggle)

const selectedRegion = ref('')
const searchInput = ref('')

const regions = ref([
  { value: 'Africa' },
  { value: 'America' },
  { value: 'Asia' },
  { value: 'Europe' },
  { value: 'Oceania' }
])

const dataRef = ref(countryData)

const filteredData = () => {
  dataRef.value = countryData.filter((country) =>
    country.name.toLowerCase().includes(searchInput.value.toLowerCase())
  )
  return dataRef.value
}

watchEffect(() => {
  dataRef.value = filteredData()
})
</script>

<template>
  <div :class="[toggleStore.toggle ? 'light-mode' : 'dark-mode']">
    <div class="container row">
      <div class="search-nav">
        <input
          class="search-input"
          :class="[toggleStore.toggle ? 'light-elements' : 'dark-elements']"
          type="text"
          placeholder="Search for a country..."
          required
          v-model="searchInput"
        />

        <!-- <select
          v-model="selectedRegion"
          :class="[toggleStore.toggle ? 'light-elements' : 'dark-elements']"
        >
          <option v-for="option in regions" :value="option.value" :key="option">
            {{ option.value }}
          </option>
        </select> -->
      </div>
    </div>

    <section>
      <div class="container">
        <div class="card-wrapper">
          <div v-for="country in dataRef" :key="country">
            <CountryCard :country="country" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
