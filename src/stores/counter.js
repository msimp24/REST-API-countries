import { ref } from 'vue'
import { defineStore } from 'pinia'

export const toggleColorStore = defineStore('toggle', () => {
  const toggle = ref(false)
  function changeMode() {
    toggle.value = !toggle.value
  }

  return { toggle, changeMode }
})
