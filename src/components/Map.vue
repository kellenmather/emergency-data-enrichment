<template>
  <gmapsMap>
    <gmapsMarker :position="{ lat: -27, lng: 153 }" />
  </gmapsMap>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'

export default {
  name: 'Map',
  components: { gmapsMap, gmapsMarker }
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
