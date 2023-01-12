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
          <button @click="reportProblem()" class="report">Rapporter et problem</button>
        </div>
      </div>
      <div class="quiz-wrapper">
        <section v-if="!quizCompleted" class="quiz">
          <div class="quiz-info">
            <span class="score">Question: {{ getCurrentQuestion.index + 1 }} / {{ questions.length }} </span>
            <span class="score">Score: {{ score }} </span>
            <span class="question">{{ getCurrentQuestion.question }}</span>
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
                v-model="getCurrentQuestion.selected" :disabled="getCurrentQuestion.selected" @change="SetAnswer" />
              <span>{{ option }}</span>
            </label>
          </div>
          <button class="btn-next" @click="GetNextQuestion" :disabled="!getCurrentQuestion.selected">
            {{
              getCurrentQuestion.index == questions.length - 1
                ? "Afslut"
                : getCurrentQuestion.selected == null
                  ? "Vælg et svar"
                  : "Næste spørgsmål"
            }}
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
import TheConfettis from "~~/components/TheConfettis.vue";

definePageMeta({ layout: "flashcards", });

// declaring and initializing constant variables
const { subjectId } = useRoute().params;
const uri = `https://cdn.umbraco.io/content/${subjectId}/children?`;
let questions = ref([])

// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value
if (!token) { navigateTo('/member/loginpage') }

//fetching resources from umbraco heartcore
await useFetch(uri, {
  headers: {
    "Umb-Project-Alias": "nicole-ba-test",
    "Api-Key": "BC2nwQgvNxNvZuoL4c6K",
    Authorization: "Bearer " + token,
  },
  method: "get",
  // It returns a Promise that resolves to a Response object, which contains the response from the server.
  onResponse({ request, response, options }) {
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
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

const SetAnswer = (evt) => {
  questions.value[currentQuestion.value].selected = evt.target.value;
  evt.target.value = null;
};

const GetNextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
  } else {
    quizCompleted.value = true;
  }
};

function reportProblem() {
  alert("Denne funktion virker ikke endnu");
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
  background-color: var(--primary-color);
}

.quit:hover {
  background-color: var(--primary-color);
}

.report {
  background: var(--primary-color);
}

.quiz-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
}

.quiz {
  background: var(--secondary-color);
  border-radius: 10px;
  /* height: 450px; */
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
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 10px;
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input {
  margin: 0;
  padding: 0;
}

label {
  background: var(--white-color);
  border: 1px solid var(--white-color);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(77, 232, 225, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
}

.label:hover input~.option {
  background-color: var(--primary-color);
}

.correct {
  background-color: var(--green-color);
}

.wrong {
  background-color: var(--red-color);
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
  background: var(--white-color);
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
  color: var(--primary-color);
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

.user-score {
  margin-top: 20px;
  color: var(--primary-color);
}

input[type="radio"] {
  visibility: hidden;
}
</style>