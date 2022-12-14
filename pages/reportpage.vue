<template>
  <div>
    <TheFlashcardHeader flashcard-heading="Reporter Et Problem"></TheFlashcardHeader>
    <div class="settings-box">
      <form @submit.prevent="sendReport">
        <input
          type="text"
          name="title"
          placeholder="Report Titlen"
          v-model="reportTitle"
        />
        <select name="reportOptions" v-model="reportOptions">
          <option value="Hvad drejer dit problem sig om?">
            Hvad drejer dit problem sig om?
          </option>
          <option value="Spørgsmål/svar: Forkert rigtigt svar">
            Spørgsmål/svar: Forkert rigtigt svar
          </option>
          <option value="Spørgsmål/svar: Formulering af spørgsmål og/eller svar">
            Spørgsmål/svar: Formulering af spørgsmål og/eller svar
          </option>
          <option value="Andet">Andet</option>
        </select>
        <textarea
          name="reportMessage"
          v-model="reportMessage"
          rows="8"
          cols="50"
        ></textarea>
        <input placeholder="Send Report" type="submit" v-on:click="sendReport()" />
      </form>
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
          <NuxtLink to="/settingspage"
            ><font-awesome-icon icon="fa-solid fa-cog"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profilepage"
            ><font-awesome-icon icon="fa-solid fa-user"
          /></NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
//https://caleb-smith.dev/blog/adding-font-awesome-to-nuxt-3
definePageMeta({
  layout: "false",
});

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
      axios.post(
        "https://api.umbraco.io/forms/e644a504-a515-4974-ac9a-b8a9be734edc/entries",
        {
          reportTitle: this.reportTitle,
          reportOptions: [this.reportOptions],
          reportMessage: this.reportMessage,
        },
        {
          headers: {
            "umb-project-alias": umbracoProjectAlias,
            "api-key": umbracoApiKey,
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
}
.heading-overview {
  background: rgb(168, 228, 192);
  background: radial-gradient(
    circle,
    rgba(168, 228, 192, 1) 35%,
    rgba(78, 210, 202, 1) 100%
  );
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-top: -18px;
  padding: 50px 50px;
  text-align: center;
}
.settings-box {
  /* background: var(--secondary-color); */
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 150px;
  min-width: -webkit-fill-available;
  margin: 0px 30px auto;
}
input[type="text"],
select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: var(--secondary-color);
  background: var(--secondary-color);
}

input[type="submit"] {
  background: var(--primary-color);
  padding: 14px 20px;
  margin: 8px 30;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
textarea {
  margin: 20px 0;
  background: var(--secondary-color);
  padding: 12px 20px;
}
footer {
  background: rgb(168, 228, 192);
  background: radial-gradient(
    circle,
    rgba(168, 228, 192, 1) 35%,
    rgba(78, 210, 202, 1) 100%
  );
  bottom: 0; /* Height of the footer */
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0 auto;
  min-width: 280px;
  width: 100%;
}
.footer-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  list-style-type: none;
  position: relative;
  top: -20px;
}
li {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
a {
  color: var(--text-color);
  text-decoration: none;
}
.start-the-game {
  text-align: center;
  position: relative;
  top: -18px;
}
button {
  padding: 10px 10px;
  border-radius: 20px;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
