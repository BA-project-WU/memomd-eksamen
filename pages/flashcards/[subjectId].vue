<template>
    <NuxtLayout>
        <div>
            <div>
                <p>header</p>
            </div>
            <div>
                <p>quit</p>
            </div>
            <div>
                <p>report an issue</p>
            </div>
            <div>
                <h1>the quiz</h1>
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
                    <button @click="GetNextQuestion" :disabled="!getCurrentQuestion.selected">
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
            <div>
                <p>
                <nav></nav>
                </p>
            </div>
            <p>
                {{ subjectId }}
                {{ subjectsQuestions._embedded.content[0].question }}
                {{ subjectsQuestions._totalItems}}
            </p>
        </div>
    </NuxtLayout>

</template>

<script setup>

const { subjectId } = useRoute().params
definePageMeta({
    layout: false,
});
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
.container {
    padding: 30px;
}
</style>