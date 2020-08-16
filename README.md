# emergency-data-enrichment

## Project setup

You'll need:
- [Node.js](https://nodejs.org/en/)
- [Git Bash](https://gitforwindows.org/) If using a Windows system
- Terminal will work if using a Mac

clone the repository to your desired location:
```
git clone https://github.com/kellenmather/emergency-data-enrichment.git
```
cd into the cloned repository and run:
```
npm install
```
then, to start the website run:
```
npm run serve
```
You can now find the website at localhost:8080

### State of the website

Currently all accidents added to the array located in accidentRecords/records.js will display on the map.
When hovering you will see the common place name of the accident.
An Api call goes out to meteostat to get the location of the nearest weather station. A response is received with the id of the weather station.
An Api call goes out to retrieve the hourly data but a 400 response comes back. 
(this happened with my data as well as the sample data given on the website, I left in the websites sample api call in line 76 of Map.vue)
Line 68 is how I had planne don taking the weather data and adding it to the accident record.

### If I had double the time

I'd try more to figure out why Meteostat Hourly and Daily API calls all returned 400 response codes (even their samples)
I'd also have spent more time figuring out how x5-gmaps infoWindow worked: https://vuejsexamples.com/a-lightweight-google-maps-plugin-for-vue/ (which is how i planned on showing the weather data after it was added to the incident records
I'd also abstract out the api keys as they are vulnerable in this state

Techincally, depending on how this app is meant to be used, I'd want to have the data enrichment done on a cron job then use the map website to display the accidents.


### Time spent

I spent about 4.5 hours on the effort, however I should note, as this was my first time using a map pack, about an hour was wasted figuring out i could put in a google key that didn't have billing set up to get a 'developer mode' of the map (which was suitable for this effort)


