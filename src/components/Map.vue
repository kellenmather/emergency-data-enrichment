<template>
  <gmapsMap
    :options="mapOptions">
    <gmapsMarker v-for="(accident, index) in populateAccidents()" 
      :key="index"
      :position="{ lat: accident.address.latitude, lng: accident.address.longitude }" 
      :title="accident.address.common_place_name" 
      />
  </gmapsMap>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'
import ApiService from '@/services/apiService'
import Records from '@/accidentRecords/records'

export default {
  name: 'Map',
  components: { gmapsMap, gmapsMarker },
  data: function () {
    return {
      mapOptions: {
        center: { lat: Records.record[0].address.latitude, lng: Records.record[0].address.longitude },
        zoom: 14,
        fullscreenControl: false,
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false
      },
      selectionData: {},
      accidents: null
    }
  },
  methods: {
    populateAccidents() {
      return Records.record;
    },
    enrich() {

      let lat, 
          long, 
          time,
          response,
          station;

      for (let i = 0; i < Records.record.length; i++) {

        lat = Records.record[i].address.latitude
        long = Records.record[i].address.longitude

        console.log(lat, long)

        // send out a nearby request for nearest weather station per accident location
        ApiService.get("stations/nearby?lat=" + lat + "&lon=" + long + "&limit=1")
          .then(({data}) => {
            response = data.data[0];
            time = Records.record[0].description.event_opened.split('T')[0]
            station = response.id;

            console.log('nearby station', station)

            // now that we know the nearest station get weather of the hour of the accident (400 responses all the time)
            ApiService.get("stations/hourly?station=" + station + "&start=" + time + "&end=" + time)
              .then(({data}) => {
                console.log('response', data)
                // take weather and add it to accident records
                // Records.record[i]['weather'] = data.data
              })
          })        

      }

      // test case left below:
      // unable to get anything but 400 res with documentation sample item
      ApiService.get("stations/daily?station=68816&start=2019-06-01&end=2019-06-30")
        .then(({data}) => {
          console.log('test result of documenation sample', data)
        })
    }
  },
    created() {
      this.enrich();
  }
}
</script>
