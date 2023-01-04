<template>
  <div>
    <TheHeader heading="Reporter et problem"></TheHeader>
    <div class="settings-box-report">
      <form @submit.prevent="sendReport">
        <input type="text" name="title" placeholder="Titel" v-model="reportTitle" />
        <select name="reportOptions" v-model="reportOptions">
          <option disabled hidden value="">Hvad drejer dit problem sig om?</option>
          <option value="Spørgsmål/svar: Forkert rigtigt svar">
            Spørgsmål/svar: Forkert rigtigt svar
          </option>
          <option value="Spørgsmål/svar: Formulering af spørgsmål og/eller svar">
            Spørgsmål/svar: Formulering af spørgsmål og/eller svar
          </option>
          <option value="Andet">Andet</option>
        </select>
        <textarea name="reportMessage" rows="8" placeholder="Uddyb problemet" v-model="reportMessage"></textarea>
        <div class="save-btn" @click="showModal = true" @close-modal="showModal = false">
          <button class="btn-send-report" type="submit" v-on:click="sendReport()">
            Send rapportering
          </button>
        </div>
        <ModalPopup v-show="showModal" @close-modal="showModal = false" />
      </form>
      <div class="arrow-left">
        <NuxtLink to="/settingspage">
          <font-awesome-icon style="color: black" icon="fa fa-arrow-left" />
        </NuxtLink>
      </div>
    </div>
    <footer>
      <div class="start-the-game">
        <button>
          <NuxtLink to="/">
            <font-awesome-icon style="color: white" icon="fa-solid fa-home" />
          </NuxtLink>
        </button>
      </div>
      <ul class="footer-list">
        <li>
          <NuxtLink to="/settingspage"><font-awesome-icon icon="fa-solid fa-cog" /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profilepage"><font-awesome-icon icon="fa-solid fa-user" /></NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
var showModal = ref(false);
const reportTitle = ref("");
const reportOptions = ref("");
const reportMessage = ref("");
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
async function sendReport() {
  await useFetch(
    "https://api.umbraco.io/forms/e644a504-a515-4974-ac9a-b8a9be734edc/entries",
    {
      method: "POST",
      headers: {
        "umb-project-alias": umbracoProjectAlias,
        "api-key": umbracoApiKey,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        reportTitle: reportTitle,
        reportOptions: reportOptions,
        reportMessage: reportMessage,
      },
    }
  );
}
const token = useCookie("token").value;
if (!token) { navigateTo("/member/loginpage"); }
</script>

<style scoped>
body {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: flex-start;
}

form {
  display: table-cell;
  margin-top: 30px;
  width: 100%;
}

input,
select,
textarea {
  background: var(--secondary-color);
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 20px;
  padding: 12px 12px;
  width: 100%;
}

button {
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 10px;
}

.btn-send-report {
  background: var(--primary-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 8px 30;
  padding: 14px 20px;
  width: 100%;
}

.arrow-left {
  margin-top: 20px;
  text-align: left;
}

/* textarea {
  background: var(--secondary-color);
  margin: 20px 0;
  padding-left: 2px;
  padding-top: 10px;
  width: 100%;
} */

footer {
  background: rgb(168, 228, 192);
  background: radial-gradient(circle, rgba(168, 228, 192, 1) 35%, rgba(78, 210, 202, 1) 100%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 280px;
  position: absolute;
  width: 100%;
}

.start-the-game {
  position: relative;
  text-align: center;
  top: -18px;
}

.footer-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  position: relative;
  text-decoration: none;
  top: -20px;
}

li {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
}

a {
  color: var(--text-color);
  text-decoration: none;
}
</style>