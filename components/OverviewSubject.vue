<template>
  <div class="wrapper">
    <ul v-if="subjects._totalItems > 0" class="cards">
      <li v-for="item in subjects._embedded.content" class="card">
        <div class="card-content">
          <h4 class="card-title">{{ item.name }}</h4>
          <p>Emnets beskrivelse</p>
        </div>
        <!-- <NuxtLink :to="`/flashcards/${item._id}`">Spil</NuxtLink> -->
        <div class="start-the-game">
          <button class="btn-start-spil">
            <NuxtLink :to="`/flashcards/${item._id}`">Start spil</NuxtLink>
          </button>
        </div>
      </li>
    </ul>
    <div v-else>
      <p class="soon">Færdighedstræning kommer snart!</p>
    </div>
  </div>
</template>

<script setup>
const { course } = defineProps(["course"]);
const uriSubject = `https://cdn.umbraco.io/content/${course._id}/children?`;
const { data: subjects } = await useFetch(uriSubject, {
  headers: { "Umb-Project-Alias": "nicole-ba-test", "Api-Key": "BC2nwQgvNxNvZuoL4c6K" },
});
console.log(uriSubject);
</script>

<style scoped>
.wrapper {
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;
}

h2 {
  font-size: 32px;
  margin-bottom: 1em;
}

.cards {
  display: flex;
  padding: 25px 0px;
  list-style: none;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  height: 280px;
}

.card {
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  padding: 20px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  scroll-snap-align: start;
  transition: all 0.2s;
}

li.card {
  background-image: url(~/assets/images/aminosyrer.jpg);
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
}

.card:not(:last-child) {
  margin-right: 10px;
}

.card:hover {
  color: var(--white);
  background: var(--red);
}

.card .card-title {
  font-size: 20px;
}

.card .card-content {
  margin: 20px 0;
  max-width: 85%;
}

.card .card-link-wrapper {
  margin-top: auto;
}

.cards::-webkit-scrollbar {
  height: 12px;
}

.cards::-webkit-scrollbar-thumb,
.cards::-webkit-scrollbar-track {
  border-radius: 92px;
}

.cards::-webkit-scrollbar-thumb {
  background: var(--darkred);
}

.cards::-webkit-scrollbar-track {
  background: var(--thumb);
}

@media (min-width: 500px) {
  .card {
    flex-basis: calc(50% - 10px);
  }

  .card:not(:last-child) {
    margin-right: 20px;
  }
}

@media (min-width: 700px) {
  .card {
    flex-basis: calc(calc(100% / 3) - 20px);
  }

  .card:not(:last-child) {
    margin-right: 30px;
  }
}

@media (min-width: 1100px) {
  .card {
    flex-basis: calc(25% - 30px);
  }

  .card:not(:last-child) {
    margin-right: 40px;
  }
}

.start-the-game {
  text-align: center;
  position: relative;
  top: 100px;
}

.btn-start-spil {
  padding: 10px 20px;
  border-radius: 20px;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.soon {
  text-align: center;
  font-weight: bold;
  color: var(--failed-color);
  margin-top: 20px;
}
</style>
