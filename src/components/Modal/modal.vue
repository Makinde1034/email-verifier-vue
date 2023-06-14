<template>
  <div>
    <div :class="[isModalOpen ? 'modal-active modal' : 'modal']">
      <div  class="close">
        <p @click="closeModal">X</p>
      </div>
      <header style="margin-bottom: 30px">
        <h3 style="text-align: center;" >Result for {{ emailVerificationResponse.email }}</h3>
      </header>
      <ResultListComponent title="Valid" :value="emailVerificationResponse.isValid" />
      <ResultListComponent
        title="Exchange server"
        link="https://www.cloudflare.com/learning/dns/dns-records/dns-mx-record/"
        :value="emailVerificationResponse.hasMX"
      />
      <ResultListComponent
        title="SPF record"
        link="https://www.cloudflare.com/learning/dns/dns-records/dns-spf-record/"
        :value="emailVerificationResponse.hasSpf"
      />
      <ResultListComponent
        title="DMARC record"
        link="https://www.cloudflare.com/learning/dns/dns-records/dns-dmarc-record/"
        :value="emailVerificationResponse.hasDMARC"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useModalStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import ResultListComponent from '../Result/result-list.vue'

export default defineComponent({
  components: { ResultListComponent },
  data() {
    return {}
  },
  setup() {
    const store = useModalStore()
    const { isModalOpen, emailVerificationResponse } = storeToRefs(store)
    const { closeModal } = store

    return { isModalOpen, emailVerificationResponse, closeModal }
  }
})
</script>

<style scoped>
.modal {
  width: 400px;

  background-color: black;
  position: absolute;
  transform: translate(-50%, -50%) scale(0.8);
  left: 50%;
  top: 50%;
  border-radius: 30px;
  visibility: hidden;
  transition: 0.5s ease;
  opacity: 0;
  padding: 20px;
}

.modal-active {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.modal header {
  display: flex;
  justify-content: center;
}

.modal header h3 {
  color: white;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
}

.close p {
  color: white;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}

@media screen and (max-width:768px) {
  .modal{
    max-width: 300px;
  }
}
</style>
