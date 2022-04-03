<template>
  <div class="current-card">
    <div class="header">
      <img :src="img" alt="icon"/>
      <h1>{{ date }}</h1>
    </div>
    <div class="data">
      <ul class="left">
        <li>Jour - {{dayTemp}}°C</li>
        <li>Nuit - {{nightTemp}}°C</li>
        <li>Humidité - {{humidity}}%</li>
      </ul>
      <ul class="right">
        <li>Pression - {{pressure}}hPa</li>
        <li>Vent - {{wind}} Km/h</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentCard",
  props: {
    datetime: null,
    icon: null,
    pressure: 0,
    humidity: 0,
    wind: 0,
    dayTemp: 0,
    nightTemp: 0
  },
  data() {
    let date = new Date(this.datetime);
    return {
      img: 'https://openweathermap.org/img/wn/' + this.icon + '@4x.png',
      date: date.toLocaleString('default', { weekday:"long", month:"long", day:"numeric"})
    }
  },
  watch: {
    icon: function() {
      this.img = 'https://openweathermap.org/img/wn/' + this.icon + '@4x.png';
    },
    datetime: function() {
      let date = new Date(this.datetime);
      this.date = date.toLocaleString('default', { weekday:"long", month:"long", day:"numeric"});
    }
  }
}
</script>

<style scoped lang="scss">
.current-card {
  max-width: 30rem;
  padding: 0.5rem 1rem;;
  border-radius: 0.8rem;
  background-color: #134601;
  display: flex;
  color: white;
  font-size: 1rem;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 6rem;
    text-transform: capitalize;

    img {
      height: 100%;
    }
  }

  .data {
    display: flex;
    font-weight: bold;
    font-size: 1rem;

    ul {
      padding: 0;
      margin-left: 2rem
    }

    li {
      list-style-type: none;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
