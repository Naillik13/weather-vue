<template>
  <div class="search-view">
    <h1>The Forecast<br>Weather App</h1>
    <SearchBar :value="cityName" @update="updateCityName" @search="getCities()" />
    <CityResult v-for="(city, index) in cities" :key="index" :lon="city.lon" :lat="city.lat" :name="city.name" />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import CityResult from "@/components/CityResult";

export default {
  name: 'SearchView',
  data () {
    return {
      cities: [],
      cityName: ""
    }
  },
  components: {
    CityResult,
    SearchBar
  },
  methods: {
    getCities () {
      let url = 'http://localhost:3000/api/cities?name=' + this.cityName;
      fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.cities = this.cities = responseJson;
          })
          .catch((error) =>{
            alert("An error has occurred while fetching cities");
            console.error(error);
          });
    },
    updateCityName (cityName) {
      this.cityName = cityName
    }
  }
}
</script>

<style scoped lang="scss">
.search-view {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #134601;

  h1 {
    margin-top: 0;
    font-size: 3rem;
    background: -webkit-linear-gradient(#25C35E, #E7E9A0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>

