<template>
  <form @submit.prevent="verifyEmail" class="wrap">
    <input :disabled="isLoading" v-model="email" placeholder="Enter email" required type="email" />
    <button :disabled="isLoading" >
      {{ isLoading ? '...' : 'Check' }}
    </button>
    <p class="note">Note : Checks are based on validity of domain.</p>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import api from '@/api'
import { useModalStore } from '@/stores/counter'

export default defineComponent({
  components: {},
  data() {
    return {
      email: '',
      isLoading: false
    }
  },

  setup() {
    const store = useModalStore()
    const { openModal, closeModal, setEmailVerificationResponse } = store

    return { openModal, closeModal, setEmailVerificationResponse }
  },
  methods: {
    async verifyEmail() {
      this.isLoading = true
      try {
        const response = await api.verifyEmail([this.email])
        const res = await response.json()
        this.isLoading = false
        this.email = ''
        this.setEmailVerificationResponse(res.data[0])
        this.openModal(true)
      } catch (err) {
        this.isLoading = false
      }
    }
  }
})
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  width: 300px;
  /* max-width: 300px; */
}

input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #323a4c;
  background: none;
  outline: none;
  transition: 0.5s ease;
  color: white;
  padding-left: 20px;
}

input:focus {
  border: 1px solid blue;
}

button {
  height: 50px;
  border-radius: 30px;
  margin-top: 15px;
  background-color: #4440ff;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  opacity: 0.5;
  transition: 0.5s ease;
}

.note{
  color: red;
  font-size: 0.6rem;
  margin-top: 5px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}
</style>
