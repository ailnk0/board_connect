import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('store', () => {
  const username = ref('')
  function setName(name: string) {
    username.value = name
  }
  return { username, setName }
})
