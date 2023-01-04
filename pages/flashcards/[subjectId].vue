<template>
  <NuxtLayout>
    <div>
      <TheConfettis></TheConfettis>
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
        <section v-if="!quizCompleted" class="quiz">
          <div class="quiz-info">
            <span class="question">{{ getCurrentQuestion.question }}</span>
            <span class="score"> Score {{ score }} / {{ questions.length }}</span>
          </div>
          <div class="options">
<<<<<<< Updated upstream
            <label
              v-for="(option, index) in getCurrentQuestion.options"
              :key="index"
              :for="'option' + index"
              :class="`option ${
                getCurrentQuestion.selected == index
                  ? index == getCurrentQuestion.answer
                    ? 'correct'
                    : 'wrong'
                  : ''
              } ${
                getCurrentQuestion.selected != null &&
                index != getCurrentQuestion.selected
                  ? 'disabled'
                  : ''
              }`"
            >
              <input
                type="radio"
                :id="'option' + index"
                :name="getCurrentQuestion.index"
                :value="index"
                v-model="getCurrentQuestion.selected"
                :disabled="getCurrentQuestion.selected"
                @change="SetAnswer"
              />
              <span>{{ option }}</span>
            </label>
          </div>
          <button
            class="btn-next"
            @click="GetNextQuestion"
            :disabled="!getCurrentQuestion.selected"
          >
            {{
              getCurrentQuestion.index == questions.length - 1
                ? "Afslut"
                : getCurrentQuestion.selected == null
                ? "Vælg et svar"
                : "Næste spørgsmål"
            }}
=======
            <label v-for="(option, index) in getCurrentQuestion.options" :key="index" :for="'option' + index"
              :class="`option ${getCurrentQuestion.selected == index ? index == getCurrentQuestion.answer ? 'correct' : 'wrong' : ''} ${getCurrentQuestion.selected != null && index != getCurrentQuestion.selected ? 'disabled' : ''}`">
              <input type="radio" :id="'option' + index" :name="getCurrentQuestion.index" :value="index"
                v-model="getCurrentQuestion.selected" :disabled="getCurrentQuestion.selected" @change="SetAnswer" />
              <span>{{ option }}</span>
            </label>
          </div>
          <button class="btn-next" @click="GetNextQuestion" :disabled="!getCurrentQuestion.selected">
            {{ getCurrentQuestion.index == questions.length - 1 ? 'Afslut' : getCurrentQuestion.selected == null
    ? 'Vælg et svar' : 'Næste spørgsmål'
}}
>>>>>>> Stashed changes
          </button>
        </section>
        <section class="finish-game" v-else>
          <h2>Du har gennemført spillet</h2>
          <h3 class="user-score">Du fik {{ score }} / {{ questions.length }} rigtige</h3>
          <div>
            <NuxtLink to="/flashcards/">
              <button class="back-to-game">Tilbage til spiloversigt</button>
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
//import { allowedNodeEnvironmentFlags } from 'process';
<<<<<<< Updated upstream
import TheConfettis from "~~/components/TheConfettis.vue";

definePageMeta({
  layout: "flashcards",
});

// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value;
if (!token) {
  navigateTo("/member/loginpage");
}

const { subjectId } = useRoute().params;

let questions = ref([]);
=======
import TheFireworks from '~~/components/TheFireworks.vue';
definePageMeta({ layout: "flashcards" });
const { flashcardHeading } = defineProps(["flashcardHeading"]);
const { subjectId } = useRoute().params
const totalQuestions = ref()
>>>>>>> Stashed changes
//fetch the flascards memo game api from umbraco heartcore
const uri = `https://cdn.umbraco.io/content/${subjectId}/children?`;
let title = ref('')
let questions = ref([])
// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value
if (!token) { navigateTo('/member/loginpage') }

await useFetch(uri, {
  headers: {
    "Umb-Project-Alias": "nicole-ba-test",
    "Api-Key": "BC2nwQgvNxNvZuoL4c6K",
    Authorization: "Bearer " + token,
  },
  method: "get",
  onResponse({ request, response, options }) {
<<<<<<< Updated upstream
    response._data._embedded.content.forEach((element) => {
      const test = Math.floor(Math.random() * 4);
      if (test == 0)
        questions.value.push({
          answer: 0,
          question: element.question,
          options: [element.option1, element.option2, element.option3, element.option4],
          selected: null,
        });
      else if (test == 1)
        questions.value.push({
          answer: 1,
          question: element.question,
          options: [element.option2, element.option1, element.option3, element.option4],
          selected: null,
        });
      else if (test == 2)
        questions.value.push({
          answer: 2,
          question: element.question,
          options: [element.option3, element.option2, element.option1, element.option4],
          selected: null,
        });
      else if (test == 3)
        questions.value.push({
          answer: 3,
          question: element.question,
          options: [element.option4, element.option2, element.option3, element.option1],
          selected: null,
        });
    });
  },
});

const quizCompleted = ref(false);
const currentQuestion = ref(0);
=======
    response._data._embedded.content.forEach(element => {
      const test = Math.floor(Math.random() * 4)
      if (test == 0) questions.value.push({ answer: 0, question: element.question, options: [element.option1, element.option2, element.option3, element.option4], selected: null })
      else if (test == 1) questions.value.push({ answer: 1, question: element.question, options: [element.option2, element.option1, element.option3, element.option4], selected: null })
      else if (test == 2) questions.value.push({ answer: 2, question: element.question, options: [element.option3, element.option2, element.option1, element.option4], selected: null })
      else if (test == 3) questions.value.push({ answer: 3, question: element.question, options: [element.option4, element.option2, element.option3, element.option1], selected: null })
    });
  },
})
const currentQuestion = ref(0)
const quizCompleted = ref(false)
const umbracoQuestions = ref([])
>>>>>>> Stashed changes
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected == q.answer) {
      value++;
    }
  });
  return value;
});

const getCurrentQuestion = computed(() => {
<<<<<<< Updated upstream
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});
const SetAnswer = (evt) => {
  questions.value[currentQuestion.value].selected = evt.target.value;
  evt.target.value = null;
};

=======
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})
const SetAnswer = evt => {
  questions.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}
>>>>>>> Stashed changes
const GetNextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
  } else {
    quizCompleted.value = true;
  }
};
function reportProblem() {
  alert("Sorry, This function is not yet ready!");
}
</script>

<style scoped>
.quit-and-report {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  padding-bottom: 10px;
}

button {
  border-radius: 4px;
  padding: 10px;
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

.quiz-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
}

.quiz {
  background: var(--game-bg-color);
  border-radius: 10px;
  height: 450px;
  padding: 40px 20px;
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
  color: var(--success-color);
  font-weight: 700;
<<<<<<< Updated upstream
  color: var(--success-color);
=======
  margin-bottom: 10px;
>>>>>>> Stashed changes
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

label {
  background: white;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(77, 232, 225, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
}

.label:hover input~.option {
  background-color: var(--success-color);
}

<<<<<<< Updated upstream
.label:hover input ~ .option {
=======
input[type="radio"] {
  visibility: hidden;
}

.correct {
>>>>>>> Stashed changes
  background-color: var(--success-color);
}

.wrong {
  background-color: var(--failed-color);
}

.btn-next {
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  color: black;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
}

.finish-game {
  background: white;
  border: 20px solid var(--primary-color);
  border-radius: 10px;
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  padding: 2rem;
  text-align: center;
  width: 90%;
}

.user-score {
  color: var(--success-color);
  margin-top: 20px;
}

.back-to-game {
  background: var(--primary-color);
  margin-top: 20px;
}

.arrow-left {
  margin-left: 20px;
  margin-top: 20px;
  text-align: left;
}

h1 {
  padding-bottom: 20px;
  text-align: center;
}

.flashcard-title {
  align-content: space-between;
  background-color: var(--secondary-color);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: -18px;
  padding: 50px 50px;
  text-align: center;
}

.my-bar {
  background-color: rgb(252, 250, 250);
  height: 10px;
  width: 15%;
}

.my-progress {
  background-color: var(--primary-color);
  width: 100%;
}
<<<<<<< Updated upstream
.user-score {
  margin-top: 20px;
  color: var(--success-color);
}

input[type="radio"] {
  visibility: hidden;
}
</style>
=======

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
  border: 20px solid var(--primary-color);
  border-radius: 10px;
  height: 300px;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  z-index: 0;
}
#anim-border::before {
  animation: rotate 4s linear infinite;
  background-color: var(--primary-color);
  background-image: linear-gradient(#2cb093, #ef5392);
  background-repeat: no-repeat;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-size: 50% 50%, 50% 50%;
  content: "";
  height: 200%;
  left: -50%;
  position: absolute;
  top: -50%;
  width: 200%;
  z-index: -2;
  -webkit-animation: rotate 4s linear infinite;
}
#anim-border::after {
  background: white;
  border-radius: 5px;
  content: "";
  height: calc(100% - 12px);
  left: 6px;
  position: absolute;
  top: 6px;
  width: calc(100% - 12px);
  z-index: -1;
} 
#anim-border img {
    width: 100%;
}  */
</style>
>>>>>>> Stashed changes
