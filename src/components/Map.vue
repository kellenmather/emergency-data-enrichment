<template>
  <gmapsMap
    :options="mapOptions">
    <gmapsMarker v-for="(accident, index) in populateAccidents()" :key="index" :position="{ lat: accident.address.latitude, lng: accident.address.longitude }" />
  </gmapsMap>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'
import Records from '@/accidentRecords/records'

export default {
  name: 'Map',
  components: { gmapsMap, gmapsMarker },
  data: function () {
    return {
      mapOptions: {
        center: { lat: 37.541885, lng: -77.440624 },
        zoom: 14,
        fullscreenControl: false,
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false
      },
      accidents: null
    }
  },
  methods: {
    populateAccidents() {
      return Records.record;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
