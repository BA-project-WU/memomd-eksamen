<template>
    <div>
        <h1>Opret bruger</h1>
        <!-- <div v-for="post in posts">
            <h2>{{ post.id }}</h2>
        </div> -->
        <div v-for="post in posts">
            <h2>{{ post.id }}</h2>
        </div>
        <progress value="50" max="100"></progress>
        <form @submit.prevent="createMember">
            <input type="text" autocomplete="on" name="name-input" placeholder="Navn" required v-model="name" />
            <input type="text" minlength="5" name="username-input" placeholder="Bugernavn" required
                v-model="username" />
            <input type="email" autocomplete="on" name="email-input" placeholder="E-mail" required v-model="email" />
            <!-- <input type="password" minlength="8" name="password-input" placeholder="Adgangskode" required v-model="password" /> -->
            <!-- <input type="password" minlength="8" name="passwordrepeat-input" placeholder="Gentag adgangskode" required /> -->
            <input type="file" name="file-input" />
            <select id="options" name="memberEducationInstitution" v-model="memberEducationInstitution">
                <!-- <option value="Uddannelsesinstution" disabled hidden selected>Vælg uddannelsesinstution</option> -->
                <option value="Aalborg Universitet">Aalborg Universitet</option>
                <option value="Aarhus Universitet">Aarhus Universitet</option>
                <option value="Københavns Universitet, Nørre Campus">Københavns Universitet, Nørre Campus
                </option>
                <option value="Syddansk Universitet, Esbjerg">Syddansk Universitet, Esbjerg</option>
                <option value="Syddansk Universitet, Odense">Syddansk Universitet, Odense</option>
            </select>

            <select id="memberTesting" name="memberTesting" v-model="memberTesting">
                <option value="Aalborg Universitet">Aalborg Universitet</option>
                <option value="Aarhus Universitet">Aarhus Universitet</option>
                <option value="Københavns Universitet, Nørre Campus">Københavns Universitet, Nørre Campus
                </option>
                <option value="Syddansk Universitet, Esbjerg">Syddansk Universitet, Esbjerg</option>
                <option value="Syddansk Universitet, Odense">Syddansk Universitet, Odense</option>
            </select>
            <input type="submit" value="Opret" v-on:click="createMember()" />
        </form>
        <button onclick="history.back()">Annuler</button>
    </div>
</template>

<script setup>
const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts')
// const { data: posts } = await useFetch('https://cdn.umbraco.io/content/6e4dafc5-3689-4126-9f4d-9ebf77e808b9/children?umb-project-alias=nicole-ba-test&&Accept-Language=da')
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
const email = ref();
const name = ref();
const username = ref();
// const memberEducationInstitution = ref('Syddansk Universitet, Odense');
const memberEducationInstitution = ref();
const memberPicture = ref();
const memberTesting = ref('Hvad drejer dit problem sig om?');
async function createMember() {
    await useFetch('https://api.umbraco.io/member', {
        method: 'POST',
        headers: {
            "umb-project-alias": umbracoProjectAlias,
            "api-key": umbracoApiKey,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: {
            email: email,
            username: username,
            name: name,
            isApproved: true,
            isLockedOut: false,
            memberTypeAlias: "Member",
            memberPicture: memberPicture,
            memberEducationInstitution: memberEducationInstitution,
            memberTesting: memberTesting,
            comments: "Student",
        }
    })
}
</script>

<!-- <script>
// import axios from "axios";
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
export default {
    data() {
        return {
            name: "",
            username: "",
            email: "",
            password: "",
            image: "",
            memberEducationInstitution: "",
        };
    },
    methods: {
        async createMember() {
            axios.post('https://api.umbraco.io/member', {
                "email": this.email,
                "username": this.username,
                "name": this.name,
                "isApproved": true,
                "isLockedOut": false,
                "memberTypeAlias": "Member",
                "memberPicture": this.image,
                "memberEducationInstitution": [this.memberEducationInstitution],
            },
                {
                    headers: {
                        "umb-project-alias": umbracoProjectAlias,
                        "api-key": umbracoApiKey,
                    },
                },
            )
        },
    },
}
</script> -->

<style scoped>

</style>