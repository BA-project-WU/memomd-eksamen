<template>
    <div>
        <h1>Opret bruger</h1>
        <progress value="50" max="100"></progress>
        <form @submit.prevent="createMember">
            <input type="text" autocomplete="on" name="name-input" placeholder="Navn" required v-model="name" />
            <input type="text" minlength="5" name="username-input" placeholder="Bugernavn" required
                v-model="username" />
            <input type="email" autocomplete="on" name="email-input" placeholder="E-mail" required v-model="email" />
            <input type="password" minlength="10" name="password-input" placeholder="Adgangskode" required
                v-model="password" />
            <input type="file" name="file-input" />
            <select id="options" name="memberEducationInstitution" v-model="memberEducationInstitution">
                <option disabled hidden selected>Vælg din uddannelsesinstution</option>
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
const { status, data, signIn } = useSession()
// definePageMeta({
//     auth: false
// });

const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
const comments = ref("");
const email = ref("");
// const memberEducationInstitution = [""];
const memberEducationInstitution = ["Syddansk Universitet, Odense"];
const memberPicture = ref();
const name = ref("");
const password = ref("");
const username = ref("");

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
            comments: comments,
            email: email,
            isApproved: true,
            isLockedOut: false,
            memberEducationInstitution: memberEducationInstitution,
            memberPicture: memberPicture,
            memberTypeAlias: "Member",
            name: name,
            password: password,
            username: username,
        },
    });
    await signIn(undefined, { callbackUrl: '/settingspage' })
}
</script>
<style scoped>

</style>
