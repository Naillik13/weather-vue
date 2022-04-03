<template>
  <a class="back-button" @click="$router.back()"><img src="../assets/arrow-left.png" alt="back arrow"></a>
</template>

<style scoped lang="scss">
.back-button {
  display: flex;
  width: 5rem;
  height: 5rem;
  background-color: #134601;
  border-radius: 5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
</style>