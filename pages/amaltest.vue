<template>
    <div>
        <div class="settings-box">
            <form @submit.prevent="sendReport">
                <input type="text" name="title-input" placeholder="report-title" v-model="reportTitle" />
                <select name="reportOptions" v-model="reportOptions">
                    <option value="Hvad drejer dit problem sig om?">Hvad drejer dit problem sig om?</option>
                    <option value="Spørgsmål/svar: Forkert rigtigt svar">Spørgsmål/svar: Forkert rigtigt svar</option>
                    <option value="Spørgsmål/svar: Formulering af spørgsmål og/eller svar">Spørgsmål/svar: Formulering af spørgsmål og/eller svar</option>
                    <option value="Andet">Andet</option>
                </select>
                <textarea name="reportMessage" v-model="reportMessage" rows="8" cols="50"></textarea>
                <input placeholder="Send Report" type="submit" v-on:click="sendReport()" />
            </form>
        </div>
    </div>
</template>

<script>
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
            reportTitle: "",
            reportOptions: "",
            reportMessage: "",
        };
    },
    methods: {
        async sendReport() {
            axios.post('https://api.umbraco.io/forms/e644a504-a515-4974-ac9a-b8a9be734edc/entries', {
                "reportTitle": this.reportTitle,
                "reportOptions": [this.reportOptions],
                "reportMessage": this.reportMessage
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
