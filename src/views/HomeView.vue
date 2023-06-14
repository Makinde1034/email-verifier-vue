<template>
  <div class="home">
    <ModalComponent />
    <NavComponent />
    <div class="home__verifier"><EmailVerifierComponent /></div>
  </div>
</template>

<script lang="ts">
import NavComponent from '@/components/icons/Nav/nav.vue'
import EmailVerifierComponent from '@/components/icons/EmailVerify/email-verifier.vue'
import ModalComponent from '@/components/Modal/modal.vue'
import { defineComponent } from 'vue'


export default defineComponent({
  components: {NavComponent, EmailVerifierComponent, ModalComponent },
  data() {
    return {
    
    }
  },

})
</script>

<style scoped>
.home {
  padding: 20px;
  background-color: #111319;
  height: 100vh;
}

.home__verifier {
  display: flex;
  justify-content: center;
  padding-top: 200px;
}
</style>
