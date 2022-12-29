<template>
  <NuxtLayout>
    <div>
      <div class="flashcard-title my-progress">
        <h1>Titlen hver emner</h1>
        <div class="my-bar"></div>
      </div>
      <div class="quit-and-report">
        <div>
          <button class="quit">Quit</button>
        </div>
        <div>
          <button class="report">Report et Problem</button>
        </div>
      </div>
      <div class="quiz-wrapper">
        <h1>Start Quizzen</h1>
          <section v-if="!quizCompleted" class="quiz">
            <div class="quiz-info">
              <span class="question">{{ getCurrentQuestion.question }}</span>
              <span class="score"> Score {{ score }} / {{ questions.length }}</span>
            </div>
            <div class="options">
              <label v-for="(option, index) in getCurrentQuestion.options" :key="index"
              :for="'option' + index" :class="`option ${getCurrentQuestion.selected == index
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
                v-model="getCurrentQuestion.selected" :disabled="getCurrentQuestion.selected"
                @change="SetAnswer">
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
                </section>
                <section v-else>
                    <h2>Du har aflsutted spillet</h2>
                    <p>Du fik {{ score }} / {{ questions.length }} rigtige</p>
                </section>
        </div>
        <!-- <div>
          <p>
          <nav></nav>
          </p>
        </div>
          <p>
            {{ subjectId }}
            {{ subjectsQuestions._embedded.content[0].question }}
            {{ subjectsQuestions._totalItems}}
          </p> -->
      </div>
      <div class="arrow-left">
      <NuxtLink to="/flashcards/">
        <font-awesome-icon style="color:black" icon="fa fa-arrow-left" />
      </NuxtLink>
    </div>
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "false",
});

// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value
if(!token){ navigateTo('/member/loginpage')}

const { subjectId } = useRoute().params
const totalQuestions = ref()
const uriQuestions = `https://cdn.umbraco.io/content/${subjectId}/children?`
const { data: subjectsQuestions } = await useFetch(uriQuestions, {
    headers: { 'Umb-Project-Alias': 'nicole-ba-test', 'Api-Key': 'BC2nwQgvNxNvZuoL4c6K' }
})


const umbracoQuestions = ref([])
console.log(totalQuestions)

for (let i = 0; i < totalQuestions; i++) {
    // umbracoQuestions.push({
    //     question:`${i} item`
    // })
    console.log('yes')

}
console.log(totalQuestions)
console.log('hello world')
// console.log(umbracoQuestions)
const questions = ref([
    {
        question: 'hvad er enzymet der spalter glykogen',
        answer: 0,
        options: [
            'glykogen phosphorylase',
            'forkert 1',
            'forkert 2',
            'forkert 3'
        ],
        selected: null
    },
    {
        question: 'hvad er navnet på produktet for glykogen phosphorylase',
        answer: 0,
        options: [
            'glykose-1-fosfat',
            'forkert 1',
            'forkert 2',
            'forkert 3'
        ],
        selected: null
    },
    {
        question: 'Hvor findes type II Kollagene Fibre primært',
        answer: 0,
        options: [
            'Brusk',
            'forkert 1',
            'forkert 2',
            'forkert 3'
        ],
        selected: null
    }

])

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
.quit-and-report{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
button{
  padding: 10px;
  border-radius: 4px;
}
.quit{
  background-color: var(--success-color);
}
.report{
  background: var(--failed-color);
}
.arrow-left{
  text-align: left;
  margin-top: 20px;
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
h1{
  text-align: center;
  padding-bottom: 10px;
}
.quiz-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
.quiz{
  margin: 30px 20px;
  background: var(--secondary-color);
  padding: 20px 10px;
  height: 400px;
  border-radius: 10px;
}
.quiz-info{
  display: flex;
  flex-direction:column;
  text-align: center;
}
.question{
  font-size: 20px;
  margin-bottom: 10px;
}
.score{
  margin-bottom: 10px;
}
.options{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
label{
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  background: rgb(244, 239, 239);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  text-align: center;
  margin: 10px 0;
}

.btn-next{
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
  margin-top: 35px;
  color: black;
}
.label:hover input ~ .option {
  background-color: var(--success-color);
}

</style>