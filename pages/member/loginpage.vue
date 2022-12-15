<template>
  <div v-for="reviewer in reviewers.results" :key="reviewer.login.uui">
    <p>{{ reviewer.uui }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewers: []
    };
  },
  async fetch() {
    this.reviewers = await fetch('https://randomuser.me/api?results=5').then(res => res.json());
  },
}
</script>

<style lang="scss" scoped>

</style>