<template>
    <div>
        <div v-if="subjects._totalItems > 0" class="container">
            <div v-for="item in subjects._embedded.content" class="card">
                <p>{{ item.name }}</p>
                <p>beskrivelse</p>
                <p></p>
                <NuxtLink to="/flashcards/questionpage">Spil</NuxtLink>
            </div>
        </div>
        <div v-else>
            <p>Coming soon!</p>
        </div>
    </div>
</template>

<script setup>
const { course } = defineProps(['course'])

const uriSubject = `https://cdn.umbraco.io/content/${course._id}/children?`
const { data: subjects } = await useFetch(uriSubject, {
    headers: { 'Umb-Project-Alias': 'nicole-ba-test', 'Api-Key': 'BC2nwQgvNxNvZuoL4c6K' }
})
console.log(uriSubject)
</script>

<style scoped>
.container {
    column-gap: 20px;
    display: inline-flex;
    overflow-x: scroll;
    padding: 10px;
    width: 100%;
}
.card {
    border-radius: 25px;
    min-width: 100px;
    padding: 30px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
</style>