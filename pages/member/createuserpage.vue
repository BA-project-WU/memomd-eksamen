<template>
    <div>
        <h1>Opret bruger</h1>
        <progress value="50" max="100"></progress>
        <form @submit.prevent="createMember">
            <input type="text" autocomplete="on" name="name-input" placeholder="Navn" required v-model="name" />
            <input type="text" minlength="5" name="username-input" placeholder="Bugernavn" required
                v-model="username" />
            <input type="email" autocomplete="on" name="email-input" placeholder="E-mail" required v-model="email" />
            <input type="password" minlength="8" name="password-input" placeholder="Adgangskode" required
                v-model="password" />
            <!-- <input type="password" minlength="8" name="passwordrepeat-input" placeholder="Gentag adgangskode" required /> -->
            <input type="file" name="file-input" />
            <select id="options" name="memberEducationInstitution" v-model="memberEducationInstitution">
                <!-- <option value="Uddannelsesinstution" disabled hidden selected>Vælg uddannelsesinstution</option> -->
                <option value="Aalborg Universitet">Aalborg Universitet</option>
                <option value="Aarhus Universitet">Aarhus Universitet</option>
                <option value="Københavns Universitet, Nørre Campus">
                    Københavns Universitet, Nørre Campus
                </option>
                <option value="Syddansk Universitet, Esbjerg">
                    Syddansk Universitet, Esbjerg
                </option>
                <option value="Syddansk Universitet, Odense">
                    Syddansk Universitet, Odense
                </option>
            </select>
            <input type="submit" value="Opret" v-on:click="createMember()" />
        </form>
        <button onclick="history.back()">Annuler</button>
    </div>
</template>

<script setup>
// const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts');
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
const email = ref();
const name = ref();
const username = ref();
const password = ref();
const memberEducationInstitution = ref();
const memberPicture = ref();
async function createMember() {
    await useFetch("https://api.umbraco.io/member", {
        method: "POST",
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
            password: password,
            isApproved: true,
            isLockedOut: false,
            memberTypeAlias: "Member",
            memberPicture: memberPicture,
            memberEducationInstitution: memberEducationInstitution,
            comments: "Student",
        },
    });
}
</script>
<style scoped>

</style>