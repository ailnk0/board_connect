import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const uid = ref('')

  function init(_uid: string) {
    uid.value = _uid
  }

  function reset() {
    uid.value = ''
  }

  return { uid, init, reset }
})
