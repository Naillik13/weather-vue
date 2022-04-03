<template>
  <div class="search-view">
    <DayCard v-for="day in days" :key="day.date" :icon="day.icon" :datetime="day.date" :temp="day.temp.day" />
  </div>
</template>

<script>

import DayCard from "@/components/DayCard";
export default {
  name: 'SearchView',
  components: {DayCard},
  data() {
    return {
      days: []
    }
  },
  mounted() {
      let url = 'http://localhost:3000/api/weather?lat=' + this.$route.query.lat + '&lon=' + this.$route.query.lon;
      fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.days = this.days = responseJson;
          })
          .catch((error) =>{
            alert("An error has occurred while fetching weather for next 7 days");
            console.error(error);
          });
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

  h1 {
    margin-top: 0;
    font-size: 3rem;
    background: -webkit-linear-gradient(#25C35E, #E7E9A0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>

