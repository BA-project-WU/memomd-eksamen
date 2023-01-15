<template>
  <div>
    <TheHeader heading="Rapporter et problem"></TheHeader>
    <div class="settings-box-report">
      <form>
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
        <div class="save-btn">
          <button class="btn-send-report" type="submit" @click="sendReport()">
            Send rapportering
          </button>
        </div>
      </form>
      <NuxtLink to="/settingspage" class="goback-arrow">
        <font-awesome-icon icon="fa fa-arrow-left" />
      </NuxtLink>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
const reportTitle = ref("");
const reportOptions = ref("");
const reportMessage = ref("");
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();

async function sendReport() {
  if (reportTitle.value != "" && reportOptions.value != "" && reportMessage.value != "") {
    alert("Din rapportering er blevet afsendt. Tak!")
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

  } else {
    alert("Udfyld alle felter.")
  }

}
const token = useCookie("token").value;
if (!token) { navigateTo("/member/loginpage"); }
</script>

<style scoped>
.settings-box-report {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 50%;
  min-height: 100%;
  position: absolute;
  transform: translateX(-50%);
  width: 75%;
}

.save-btn {
  text-align: center;
}

.goback-arrow {
  left: 0;
  transform: translateX(0);
}
</style>