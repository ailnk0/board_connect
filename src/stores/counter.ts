import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function getRating(ratings: number[]) {
    let result = '---'
    if (ratings && ratings.length != 0) {
      let total = 0.0
      let count = 0
      for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] === 0) continue
        count += ratings[i]
        total += ratings[i] * i
      }
      if (count != 0) {
        result = (total / count).toFixed(2)
      }
    }
    return result
  }
  return { count, doubleCount, increment, getRating }
})
