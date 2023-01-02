<template>
  <NuxtLayout>
    <div>
      <!-- <div class="flashcard-title my-progress">
        <h1></h1>
        <div class="my-bar"></div>
      </div> -->
      <div class="quit-and-report">
        <div>
          <NuxtLink to="/flashcards/">
            <button class="quit">Afslut spil</button>
          </NuxtLink>
        </div>
        <div>
          <button @click="reportProblem" class="report">Rapporter et problem</button>
        </div>
      </div>
      <div class="quiz-wrapper">
        <!-- <h1>Start Quizzen</h1> -->
        <section v-if="!quizCompleted" class="quiz">
          <div class="quiz-info">
            <span class="question">{{ getCurrentQuestion.question }}</span>
            <span class="score"> Score {{ score }} / {{ questions.length }}</span>
          </div>
          <div class="options">
            <label v-for="(option, index) in getCurrentQuestion.options" :key="index" :for="'option' + index" :class="`option ${getCurrentQuestion.selected == index
  ? index == getCurrentQuestion.answer
    ? 'correct'
    : 'wrong'
  : ''
  } ${getCurrentQuestion.selected != null &&
    index != getCurrentQuestion.selected
    ? 'disabled'
    : ''
  }`">
              <input type="radio" :id="'option' + index" :name="getCurrentQuestion.index" :value="index"
                v-model="getCurrentQuestion.selected" :disabled="getCurrentQuestion.selected" @change="SetAnswer">
              <span>{{ option }}</span>
            </label>
          </div>
          <button class="btn-next" @click="GetNextQuestion" :disabled="!getCurrentQuestion.selected">
            {{
    getCurrentQuestion.index == questions.length - 1
      ? 'Afslut'
      : getCurrentQuestion.selected == null
        ? 'Vælg et svar'
        : 'Næste spørgsmål'
}}
          </button>
          <TheFireworks></TheFireworks>
        </section>
        <section class="finish-game" v-else>
          <h2>Du har afslutted spillet.</h2>
          <h3 class="user-score">Du fik {{ score }} / {{ questions.length }} rigtige</h3>
          <div>
            <NuxtLink to="/flashcards/">
              <button class="back-to-game">Tilbage</button>
            </NuxtLink>
          </div>
          <TheBackground />
        </section>
      </div>
    </div>
    <div class="arrow-left">
      <NuxtLink to="/flashcards/">
        <font-awesome-icon style="color:black" icon="fa fa-arrow-left" />
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup>
//import { allowedNodeEnvironmentFlags } from 'process';
import TheFireworks from '~~/components/TheFireworks.vue';
const { flashcardHeading } = defineProps(["flashcardHeading"]);
definePageMeta({
  layout: "flashcards",
});

// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value
if (!token) { navigateTo('/member/loginpage') }

const { subjectId } = useRoute().params
const totalQuestions = ref()
let title = ref('')

let questions = ref([])
//fetch the flascards memo game api from umbraco heartcore
const uri = `https://cdn.umbraco.io/content/${subjectId}/children?`;
await useFetch(uri, {
  headers: { "Umb-Project-Alias": "nicole-ba-test", "Api-Key": "BC2nwQgvNxNvZuoL4c6K" },
  method: "get",
  onResponse({ request, response, options }) {
    response._data._embedded.content.forEach(element => {
      const test = Math.floor(Math.random() * 4)
      if (test == 0)
        questions.value.push({ answer: 0, question: element.question, options: [element.option1, element.option2, element.option3, element.option4], selected: null })
      else if (test == 1)
        questions.value.push({ answer: 1, question: element.question, options: [element.option2, element.option1, element.option3, element.option4], selected: null })
      else if (test == 2)
        questions.value.push({ answer: 2, question: element.question, options: [element.option3, element.option2, element.option1, element.option4], selected: null })
      else if (test == 3)
        questions.value.push({ answer: 3, question: element.question, options: [element.option4, element.option2, element.option3, element.option1], selected: null })
    });
  },
})

const umbracoQuestions = ref([])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
  let value = 0
  questions.value.map(q => {
    if (q.selected == q.answer) {
      value++
    }
  })
  return value
})

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})
const SetAnswer = evt => {
  questions.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}

const GetNextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
  } else {
    quizCompleted.value = true
  }
}
function reportProblem() {
  alert('Sorry, This function is not yet ready!')
}
</script>

<style scoped>
.flashcard-title {
  background-color: var(--secondary-color);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-top: -18px;
  padding: 50px 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}

.quit-and-report {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 10px;
}

button {
  padding: 10px;
  border-radius: 4px;
}

.back-to-game {
  margin-top: 20px;
  background: var(--primary-color);
}

.quit {
  background-color: var(--success-color);
}

.quit:hover {
  background-color: var(--primary-color);
}

.report {
  background: var(--failed-color);
}

.arrow-left {
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
}

.my-progress {
  width: 100%;
  background-color: var(--primary-color);
}

.my-bar {
  width: 15%;
  height: 10px;
  background-color: rgb(252, 250, 250);
}

h1 {
  text-align: center;
  padding-bottom: 20px;
}

.quiz-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}

.quiz {
  background: var(--game-bg-color);
  padding: 40px 20px;
  height: 450px;
  border-radius: 10px;
  width: 90%;
}

.quiz-info {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.question {
  font-size: 18px;
  margin-bottom: 10px;
}

.score {
  margin-bottom: 10px;
  font-weight: 700;
  color: var(--success-color)
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

label {
  border: 1px solid white;
  border-radius: 20px;
  box-sizing: border-box;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(77, 232, 225, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  text-align: center;
  margin: 10px 0;
}

.btn-next {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
  margin-top: 20px;
  color: black;
}

.label:hover input~.option {
  background-color: var(--success-color);
}

.wrong {
  background-color: var(--failed-color);
}

.correct {
  background-color: var(--success-color);
}

.finish-game {
  background: white;
  height: 300px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  border: 20px solid var(--primary-color);
}

/* @-webkit-keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
#anim-border {
    position: relative;
    z-index: 0;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;
    border: 20px solid var(--primary-color);
}
#anim-border::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: var(--primary-color);
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#2cb093, #ef5392);
    -webkit-animation: rotate 4s linear infinite;
    animation: rotate 4s linear infinite;
}
#anim-border::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 6px;
  top: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  background: white;
  border-radius: 5px;
} 
#anim-border img {
    width: 100%;
}  */
.user-score {
  margin-top: 20px;
  color: var(--success-color);
}

input[type="radio"] {
  visibility: hidden;
}
</style>