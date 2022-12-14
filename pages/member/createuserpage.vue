<template>
    <div>
        <h1>Opret bruger</h1>
        <!-- https://www.w3schools.com/w3css/w3css_progressbar.asp -->
        <progress value="50" max="100"></progress>
        <form @submit.prevent="createMember">
            <input type="text" autocomplete="on" name="name-input" placeholder="Navn" required v-model="name" />
            <input type="text" minlength="5" name="username-input" placeholder="Bugernavn" required
                v-model="username" />
            <input type="email" autocomplete="on" name="email-input" placeholder="E-mail" required v-model="email" />
            <input type="password" minlength="8" name="password-input" placeholder="Adgangskode" required
                v-model="password" />
            <input type="password" minlength="8" name="passwordrepeat-input" placeholder="Gentag adgangskode"
                required />
            <input type="file" name="file-input" />
            <select id="education-institutions" name="education-institutions" v-model="memberEducationInstitution">
                <option disabled hidden selected value="test">test</option>
                <option value="Aalborg Universitet">Aalborg Universitet</option>
                <option value="Aarhus Universitet">Aarhus Universitet</option>
                <option value="Københavns Universitet, Nørre Campus">Københavns Universitet, Nørre Campus</option>
                <option value="Syddansk Universitet, Esbjerg">Syddansk Universitet, Esbjerg</option>
                <option value="Syddansk Universitet, Odense">Syddansk Universitet, Odense</option>
            </select>
            <input type="submit" value="Opret" v-on:click="createMember()" />
        </form>
        <button onclick="history.back()">Annuler</button>
    </div>
</template>

<script>
import axios from "axios";
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
</script>

<style scoped>

</style>
