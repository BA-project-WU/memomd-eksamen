<template>
    <section>
        <div>
            <h2>Login</h2>
            <p>Users can login with their username (or e-mail) and password.</p>
            <form>
                <input name="csrfToken" type="hidden" v-model="credentials.csrfToken" />
                <input v-model="credentials.username" type="text" name="email" placeholder="Email" />
                <div>
                    <input v-model="credentials.password" type="password" name="password" placeholder="Password" />
                </div>
                <button @click="logIn">Sign in (Credential Flow)</button>
            </form>
        </div>
        <div>
            <h3>Authentication Overview</h3>
            <pre v-if="status"><span>Status:</span> {{ status }}</pre>
            <pre v-if="data"><span>Data:</span> {{ data }}</pre>
            <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useSession } from "#imports";
const {
    signIn,
    signOut,
    data,
    status,
    getSession,
    getCsrfToken,
    getProviders,
} = await useSession({ required: false });
const providers = await getProviders();
const crsf = await getCsrfToken();
const headers = useRequestHeaders(["cookie"]);
await $fetch("https://api.umbraco.io/member", {
    method: "GET",
    headers: {
        "umb-project-alias": "nicole-ba-test",
        "api-key": "3wvrfahXVBS0vPH3YqBv",
        Accept: "application/json",
        "Content-Type": "application/json",
        cookie: headers.cookie,
    },
});
let credentials = reactive({
    username: "",
    password: "",
});
const logIn = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
        callbackUrl: "/protected",
        redirect: true,
        username: loginForm.username,
        password: loginForm.password,
    });
};
</script>
