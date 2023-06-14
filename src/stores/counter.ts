import { ref } from 'vue'
import { defineStore } from 'pinia'

interface responseType {
  hasMX: boolean
  hasDMARC: boolean
  hasSpf: boolean
  email: string
  isValid: boolean
}

export const useModalStore = defineStore('counter', () => {        
  const isModalOpen = ref(false)

  const emailVerificationResponse = ref({
    hasMX: false,
    hasDMARC: false,
    hasSpf: false,
    email: '',
    isValid: false
  })

  function openModal() {
    isModalOpen.value = true
  }

  function closeModal() {
    isModalOpen.value = false
  }

  function setEmailVerificationResponse(data: responseType) {
    emailVerificationResponse.value = data
  }

  return {
    openModal,
    isModalOpen,
    closeModal,
    setEmailVerificationResponse,
    emailVerificationResponse
  }
})
