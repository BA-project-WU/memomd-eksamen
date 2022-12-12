<template>
    <div>
        <h1>Opret bruger</h1>
        <!-- https://www.w3schools.com/w3css/w3css_progressbar.asp -->
        <progress value="50" max="100"></progress>
        <form @submit.prevent="createMember">
            <input type="text" name="name-input" placeholder="Navn" v-model="name" />
            <input type="text" name="username-input" placeholder="Bugernavn" v-model="username" />
            <input type="text" name="email-input" placeholder="E-mail" v-model="email" />
            <input type="password" name="password-input" placeholder="Adgangskode" v-model="password" />
            <input type="password" name="passwordrepeat-input" placeholder="Gentag adgangskode" />
            <input type="submit" value="Opret" v-on:click="createMember()" />
        </form>
        <button onclick="history.back()">Annuler</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async createMember() {
            axios
                .post(
                    'https://api.umbraco.io/member',
                    {
                        "email": this.email,
                        "isApproved": true,
                        "isLockedOut": false,
                        "memberTypeAlias": "Member",
                        "username": this.username,
                        "name": this.name,
                        // "comments": "",
                        // "email": this.email,
                        // "isApproved": true,
                        // "isLockedOut": false,
                        // "memberTypeAlias": "Member",
                        // "username": this.email,
                        // "name": this.email
                    },
                    {
                        headers: {
                            "umb-project-alias": "nicole-ba-test",
                            "api-key": "3wvrfahXVBS0vPH3YqBv"
                            // "umb-project-alias": "nicole-ba-test",
                            // "api-key": "3wvrfahXVBS0vPH3YqBv"
                        },
                    }
                )
                .then((response) => {
                    console.log(response)
                })
        },
    },
};
</script>

<style scoped>

</style>
