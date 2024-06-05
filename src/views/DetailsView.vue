<script setup>
import { onMounted, ref } from 'vue'
import countryData from './../assets/data/data.json'
import { toggleColorStore } from '@/stores/counter'

let name = defineProps(['country'])

const toggleStore = toggleColorStore()

const currCountry = ref(null)

const getCurrCountry = (country) => {
  countryData.forEach((element) => {
    if (element.name === country) currCountry.value = element
  })
}

onMounted(() => {
  getCurrCountry(name.country)
})
</script>

<template>
  <div v-if="currCountry" class="background">
    <section class="det-container">
      <div class="btn-spacing">
        <router-link
          class="back-button"
          :class="[toggleStore.toggle ? 'light-elements' : 'dark-elements']"
          to="/"
          >Back</router-link
        >
      </div>

      <div class="det-row">
        <div class="det-col">
          <img :src="currCountry.flags.png" alt="" />
        </div>
        <div class="det-col">
          <h1>{{ currCountry.name }}</h1>
          <div class="det-row-2">
            <div class="det-col">
              <p>Native name: {{ currCountry.nativeName }}</p>
              <p>Population: {{ currCountry.population }}</p>
              <p>Region: {{ currCountry.region }}</p>
              <p>Sub-region: {{ currCountry.subregion }}</p>
              <p>Capital: {{ currCountry.capital }}</p>
            </div>
            <div class="det-col">
              <p v-for="domain in currCountry.topLevelDomain" :key="domain">
                Top level domain: {{ domain }}
              </p>
              <p v-for="currency in currCountry.currencies" :key="currency">
                Currencies: {{ currency.name }}
              </p>
              <p v-for="languages in currCountry.languages" :key="languages">
                Languages: {{ languages.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.back-button {
  text-decoration: none;
  margin-top: 50px;
  background-color: inherit;
  padding: 6px 30px;
  margin: 2rem 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.btn-spacing {
  margin: 3rem 0;
}
.background {
  height: 100vh;
  background-color: inherit;
}
.link {
  text-decoration: none;
  color: inherit;
}

.det-container {
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
}
.det-row {
  display: flex;
  gap: 2rem;
  align-self: center;
}
.det-col {
  width: 100%;
  margin: 1rem 0;
}

.det-row-2 {
  display: flex;
  gap: 2rem;
  justify-content: center;
}
p {
  padding: 2px 0;
}

@media (width < 700px) {
  .det-row {
    display: block;
  }
}
</style>
