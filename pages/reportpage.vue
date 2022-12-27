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
          rows="8"
          placeholder="Uddyb Problemet"
          v-model="reportMessage"
        ></textarea>
        <div class="save-btn"  @click="showModal = true"
            @close-modal="showModal = false">
          <button
            class="btn-send-report"
            type="submit"
            v-on:click="sendReport()">Send Report</button>
        </div>
        <ModalPopup v-show="showModal" @close-modal="showModal = false" />
      </form>
      <div class="arrow-left">
      <NuxtLink to="/settingspage">
        <font-awesome-icon style="color:black" icon="fa fa-arrow-left" />
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

<script setup>
  var showModal = ref(false)
  const reportTitle = ref('')
  const reportOptions = ref('Hvad drejer dit problem sig om?')
  const reportMessage = ref('')
  const { umbracoProjectAlias } = useRuntimeConfig()
  const { umbracoApiKey } = useRuntimeConfig()

  async function sendReport() {
  await useFetch('https://api.umbraco.io/forms/e644a504-a515-4974-ac9a-b8a9be734edc/entries', {
  method: 'post',
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
  })
}

const token = useCookie("token").value
if(!token){ navigateTo('/member/loginpage')}

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
  padding: 12px 12px;
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: var(--secondary-color);
}
select {
  margin-top: 20px;
}
form {
  display: table-cell;
  width: 100%;
}
.btn-send-report {
  background: var(--primary-color);
  padding: 14px 20px;
  margin: 8px 30;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
textarea {
  margin: 20px 0;
  background: var(--secondary-color);
  padding-left: 2px;
  padding-top: 10px;
  width: 100%;
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
  margin-left: 30px;
  margin-right: 30px;
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
.arrow-left{
  text-align: left;
  margin-top: 20px;
}
</style>
