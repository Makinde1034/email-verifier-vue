<template>
  <nav class="nav">
    <h3>Surecheck</h3>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  data() {
    return {
      name: 'Geo'
    }
  }
})
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #323a4c;
  padding-bottom: 10px;
}

.nav h3 {
  color: white;
  font-size: 1.7rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;

}
</style>
