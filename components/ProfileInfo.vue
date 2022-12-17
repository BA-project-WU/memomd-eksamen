<template>
  <div class="profile-info">
      <img src="~/assets/images/soccer-ball.jpg" alt=" just a soccer ball" />
      <h3>{{name}}</h3>
      <p>{{email}}</p> 
      <div class="edit-icon"><font-awesome-icon icon="fa-solid fa-edit" /></div>
  </div>
</template>

<script setup>
let email = ""
let name = ""
const { umbracoProjectAlias } = useRuntimeConfig()
  const { umbracoApiKey } = useRuntimeConfig()
 await useFetch('https://api.umbraco.io/member/Emma', {
    method: 'get',
  headers: {
    "umb-project-alias": umbracoProjectAlias,
        "api-key": umbracoApiKey
  },
  
  onResponse({ request, response, options }) {
    // Process the response data
    email = response._data.email
    name = response._data.name
  }
})
</script>

<style scoped>
.profile-info{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -60px;
}
img{
  height: 200px;
  width: 200px;
  border-radius: 20px;
}
h3, p{
  text-align: left;
  margin-bottom: 10px 10px;
}
.edit-icon{
  position: relative;
  left: 87px;
    top: -20px;
}
</style>
