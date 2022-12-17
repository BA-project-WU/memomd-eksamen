<template>
  <div class="user-info">
    <h3>Adminintrere din konto</h3>

    <button @click="showEmail = true">Ændre email</button>
    <div v-if="showEmail">
      <div class="modal-overlay">
        <div class="modal-email">
        <input type="text" v-model="email" placeholder="{{ email }}" />
        <button @click="showEmail = false">Gem</button>
      </div>
      </div>     
    </div>
    <button @click="showPassword = true">Ændre adgangskode</button> 
    <div v-if="showPassword">
      <div class="modal-overlay">
        <div class="modal-password">
          <input type="password" v-model="currentPassword" placeholder="Indtast nuværende adgangskode"/>
          <input type="newpassword" v-model="newPassword" placeholder="Indtast ny adgangskode"/>
          <button type="submit" @click="showPassword = false">Gem</button>
        </div>
      </div>
    </div>
    <button @click="deleteUser">Slet bruger</button>
  </div>
</template>
<script setup>
  const showEmail = ref(false)
  const showPassword = ref(false)
  const deleteUser = ref(true)

  let email = ''
  let currentPassword = ''
  let newPassword = ''
  const { umbracoProjectAlias } = useRuntimeConfig()
  const { umbracoApiKey } = useRuntimeConfig()
  await useFetch('https://api.umbraco.io/member/Emma', {
    method: 'put',
    headers: {
      "umb-project-alias": umbracoProjectAlias,
      "api-key": umbracoApiKey
    },
  
  onResponse({ request, response, options }) {
    // Process the response data
    email = response._data.email
    currentPassword = response._data.currentPassword
    newPassword = response._data.newPassword
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000da;
} 
.user-info{
  width: 100%;
  height: 400px;
}
.modal-email {
  position: fixed;
  z-index: 999;
  top: 20%;
  background: var(--circle-color);
  height: 200px;
  padding: 20px;
  width: 94%;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.modal-password {
  position: fixed;
  z-index: 999;
  top: 20%;
  background: var(--circle-color);
  height: 250px;
  padding: 20px;
  width: 94%;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
}
h3{
  padding: 10px 0px 0px 20px;
}
button{
  border: none;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  outline: 0;
  text-align: center;
  background: var(--primary-color);
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
input[type="text"], input[type="newpassword"] {
  padding: 12px 12px;
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: var(--secondary-color);
}

input[type="password"] {
  padding: 12px 12px;
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: var(--secondary-color);
  margin-bottom: 10px;
}
input[type="submit"] {
  background: var(--primary-color);
  padding: 14px 20px;
  margin: 8px 30;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
</style>
