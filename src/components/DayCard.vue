<template>
  <div class="day-card" :class="{selected: selected}">
    <img :src="img" alt="icon">
    <p><strong class="day">{{day}}</strong><br>{{date}}</p>
    <strong class="temp">{{temp}}°C</strong>
  </div>
</template>

<script>
export default {
  name: "DayCard",
  props: {
    icon: null,
    datetime: null,
    temp: null,
    selected: false
  },
  data() {
    let date = new Date(this.datetime);
    return {
      img: 'https://openweathermap.org/img/wn/' + this.icon + '@4x.png',
      day: date.toLocaleDateString('default', { weekday: 'long' }),
      date: date.getDate() + ' ' + date.toLocaleString('default', { month: 'long' })
    }
  }
}
</script>

<style scoped lang="scss">
.day-card {
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  padding: 0.5rem 1rem;;
  border-radius: 0.8rem;
  background-color: #134601;
  border: none;
  display: flex;
  color: white;
  height: 5rem;
  font-size: 1rem;

  &.selected {
    background-color: #134601b5;
  }

  p {
    flex: 3;
    text-align: center;
    .day {
      font-size: 1.5rem
    }
  }

  .temp {
    flex: 1;
    font-size: 2.2rem
  }

  img {
    height: 100%;
  }
}
</style>
