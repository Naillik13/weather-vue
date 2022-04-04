<template>
  <div class="weather-view">
    <div class="left-section">
      <BackButton />
      <CurrentCard v-if="currentDay !== null"
          :icon="currentDay.icon"
          :datetime="currentDay.date"
          :pressure="currentDay.pressure"
          :wind="currentDay.wind"
          :humidity="currentDay.humidity"
          :day-temp="currentDay.temp.day"
          :night-temp="currentDay.temp.night"
      />
    </div>
    <div class="right-section">
      <DayCard v-for="day in days"
         :key="day.date"
         :icon="day.icon"
         :datetime="day.date"
         :temp="day.temp.day"
         :selected="currentDay === day"
         @click="changeCurrentDay(day)"
      />
    </div>
  </div>
</template>

<script>

import DayCard from "@/components/DayCard";
import BackButton from "@/components/BackButton";
import CurrentCard from "@/components/CurrentCard";
export default {
  name: 'SearchView',
  components: {CurrentCard, BackButton, DayCard},
  data() {
    return {
      days: [],
      currentDay: null
    }
  },
  methods: {
    changeCurrentDay(day) {
      if (this.currentDay === day) {
        this.currentDay = this.days[0];
      } else {
        this.currentDay = day;
      }
    }
  },
  mounted() {
      let url = process.env.VUE_APP_API_URL + '/api/weather?lat=' + this.$route.query.lat + '&lon=' + this.$route.query.lon;
      fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.days = responseJson;
            this.currentDay = this.days[0];
          })
          .catch((error) =>{
            alert("An error has occurred while fetching weather for next 7 days");
            console.error(error);
          });
  }
}
</script>

<style scoped lang="scss">
.weather-view {
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .left-section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 2;
    padding: 2rem;
  }
  .right-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>

