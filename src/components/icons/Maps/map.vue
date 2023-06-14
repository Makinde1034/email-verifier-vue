<template>
  <MapboxMap
    style="height: 400px"
    access-token="pk.eyJ1IjoibWFraW5kZTEwMzQiLCJhIjoiY2xpM243NW1qMGc0NjNsbzlrbDlwMmJxYyJ9.HZrfmBjWNfQwfIKXRpaQXg"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="mapCenter"
    :zoom="1"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import 'mapbox-gl/dist/mapbox-gl.css'

export default defineComponent({
  components: {},
  data() {
    return {
      name: 'bob',
      showBox: true
    }
  },
  setup() {
    const center = { lat: 34.669228, lng: 135.475601 }
    const mapCenter = ref([0, 0])
    return { center, mapCenter }
  },
  methods: {
    track() {
      console.log('Here')
    }
  }
})
</script>

<style scoped>
.map {
  /* background-color: red; */
  height: 700px;
}
.box {
  height: 200px;
  width: 200px;
  background-color: green;
}
</style>
