 

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDictionaryStore = defineStore('dictionary', () => {
  const dictionaryMap = ref({})

  const setDictionaryMap = (dictionaryRes) => {
    dictionaryMap.value = { ...dictionaryMap.value, ...dictionaryRes }
  }

  const getDictionary = async(type) => {
     
  }

  return {
    dictionaryMap,
    setDictionaryMap,
    getDictionary
  }
})
