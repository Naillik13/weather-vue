<template>
  <div class="search-bar">
    <input
        id="search"
        v-model="value"
        @input="this.$emit('update', value)"
        placeholder="Search">
    <label for="search">
      <img alt="Search picto" src="../assets/search.png">
    </label>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      value: "",
      timer: null
    }
  },
  watch: {
    value: function () {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.search, 1000)
    },
  },
  methods: {
    search() {
      this.$emit('search');
    }
  }
}
</script>

<style scoped lang="scss">
.search-bar {
  max-width: 70%;
  min-width: 50%;
  padding: 0.5rem 1rem;;
  border-radius: 0.8rem;
  background-color: white;
  border: none;
  display: flex;

  input {
    flex: 1;
    border: none;
    font-weight: bold;
    color: #134601;
    font-size: 1rem;

    &:focus {
      outline: none;
      color: #134601;
    }
  }
}
</style>
