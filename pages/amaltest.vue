<template>
    <div>
        <div class="settings-box">
            <form @submit.prevent="sendReport">
                <label for="option">Valgt Muligheder</label>
                <select name="reportOptions" v-model="reportOptions">
                    <option value="Spørgsmål/svar: Forkert rigtigt svar">Spørgsmål/svar: Forkert rigtigt svar</option>
                    <option value="Spørgsmål/svar: Formulering af spørgsmål og/eller svar">Spørgsmål/svar: Formulering
                        af spørgsmål og/eller svar</option>
                    <option value="Andet">Andet</option>
                </select>
                <label for="option">Uddyb Problemet</label>
                <textarea name="reportMessage" v-model="reportMessage" rows="8" cols="50"></textarea>
                <input placeholder="Send Report" type="submit" v-on:click="sendReport()" />
            </form>
        </div>
    </div>
</template>

<script setup>
// //https://caleb-smith.dev/blog/adding-font-awesome-to-nuxt-3
// definePageMeta({
//     layout: "false",
// });

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
        async sendReport() {
        axios.post('https://api.umbraco.io/member', {
            "email": this.email,
            "isApproved": true,
            "isLockedOut": false,
            "memberTypeAlias": "Member",
            "username": this.username,
            "name": this.name,
            "memberPicture": this.image,
            "memberEducationInstitution": [this.memberEducationInstitution]
        },
            {
                headers: {
                    "umb-project-alias": umbracoProjectAlias,
                    "api-key": umbracoApiKey,
                },
            },
        ),
            axios.get('https://api.umbraco.io/member/{{this.username}}', {
                "email": this.email,
                "isApproved": true,
                "isLockedOut": false,
                "memberTypeAlias": "Member",
                "username": this.username,
                "name": this.name,
                // "memberPicture": this.image,
                "memberEducationInstitution": [this.memberEducationInstitution]
            })
    },
},
}
</script>
