<template>
  <div>
    <div class="result">
      <p>{{ title }} : {{ value }}</p>
      <a v-if="link" target="_blank" :href="link">Read more on {{ title }}</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    value: Boolean,
    link: String
  },
  components: {}
})
</script>

<style scoped>
.result {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.result p {
  color: white;
  font-family: 'Poppins', sans-serif;

}

.result a {
  color: blue;
  text-decoration: underline;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>
