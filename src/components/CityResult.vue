<template>
  <router-link :to="{ path: '/weather', query: { lon: lon, lat: lat, city: name }}" class="result">
    <p>{{ name }}</p>
    <img alt="Chevron right icon" src="../assets/chevron-right.png">
  </router-link>
</template>

<script>
export default {
  name: "CityResult",
  props: {
    lon: null,
    lat: null,
    name: ""
  }
}
</script>

<style scoped lang="scss">
.result {
  margin-top: 1rem;
  justify-content: space-between;
  max-width: 70%;
  min-width: 50%;
  padding: 0.5rem 1rem;;
  border-radius: 0.8rem;
  background-color: white;
  border: none;
  display: flex;
  color: #134601;
}
</style>
