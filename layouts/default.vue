<template>
  <div>
    <header>
      <h1>{{title}} working on it</h1>
    </header>
    <!--underneath is the page content-->
    <div>
      <slot/>
    </div>
    <footer>
      <button>dynamically changing btn</button>
    </footer>
    <div class="back">
      <NuxtLink to="/account">
      <img 
        class="back-icon" 
        src="~/assets/images/back-icon.png" 
        alt="this is back icon" 
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subHeading: String,
  text: String,
})
//https://www.google.com/search?q=how+to+use+props+in+nuxt3&sxsrf=ALiCzsbBZ3kfyzJ-o5jE72alpE332xgMGw%3A1670619329702&ei=waCTY-XHKoKNrwSJ8q-4Dw&ved=0ahUKEwilrM79te37AhWCxosKHQn5C_cQ4dUDCA8&uact=5&oq=how+to+use+props+in+nuxt3&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjoKCAAQRxDWBBCwAzoECCMQJzoFCAAQgAQ6CggAEIAEEIcCEBQ6CAgAEBYQHhAPOgYIABAWEB46BQgAEIYDOggIABAWEB4QCkoECEEYAEoECEYYAFDlBVj9EmCrFWgBcAF4AIABeogBjwSSAQM1LjGYAQCgAQHIAQjAAQE&sclient=gws-wiz-serp#fpstate=ive&vld=cid:3231eea6,vid:Sm9JFI5Z6RU
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
html, body{
  display: flex;
  flex-direction: column;
  min-width: 280px;
  margin: 0 auto;
}
header{
  margin-top: 100px;
  margin-bottom: 10px;
}
h1 {
  color: var(--text-color);
  font-weight: var(--bold-text);
  font-family: var(--fonts);
  text-align: center;
  font-size: var(--font-heading-size);
}
footer{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
}
button{
  background-color: var(--cta-bg-color);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: var(--bold-text);
  padding: 10px;
  width: 300px;
  
}
.back{
  margin: 0 auto;

  width: 300px;
}

</style>
