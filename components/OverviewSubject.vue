<template>
  <div class="wrapper">
    <ul v-if="subjectsGraph.subjectCourse.children.items.length > 0" class="cards">
      <li v-for="subjectgql in subjectsGraph.subjectCourse.children.items" :key="subjectgql.id" class="card">
        <div class="card-content">
          <h4 class="card-title">{{ subjectgql.name }}</h4>
        </div>
        <div class="start-the-game">
          <NuxtLink :to="`/flashcards/${subjectgql.id}`">
            <button class="btn-start-spil">Start spil</button>
          </NuxtLink>
        </div>
      </li>
    </ul>
    <div v-else>
      <p class="soon">Færdighedstræning kommer snart!</p>
    </div>
  </div>
</template>

<script setup>
// declaring and initializing constant variables
const { course } = defineProps(["course"]);


const query = gql`
  query getAllSubjects($courseid: ID!){
    subjectCourse(id:$courseid) {
      children {
      items{
        name
        id
    }}
    }
  }
`
const variables = {courseid:course.id}
const { data: subjectsGraph} = await useAsyncQuery(query, variables)
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 20px;
}

.cards {
  display: flex;
  /* height: 280px; */
  list-style: none;
  overflow-x: scroll;
  padding: 20px 0px;
  scroll-snap-type: x mandatory;
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

li.card {
  background-image: url(~/assets/images/aminosyrer.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.card {
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 20%);
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  padding: 20px;
  scroll-snap-align: start;
  transition: all 0.2s;
}

.card:not(:last-child) {
  margin-right: 10px;
}

.card .card-content {
  margin: 20px 0;
  max-width: 85%;
}

.card .card-title {
  font-size: 20px;
}

.card .card-link-wrapper {
  margin-top: auto;
}

h2 {
  font-size: 32px;
  margin-bottom: 1em;
}

.start-the-game {
  position: relative;
  text-align: center;
  top: 50%;
}

.btn-start-spil {
  position: relative;
  text-align: center;
  top: 50%;
}

.soon {
  color: var(--secondary-color);
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
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
    margin: 0 20px;
  }
}
</style>
