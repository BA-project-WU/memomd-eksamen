<template>
    <div>
        <p>The name is {{ data?.overviewPage?.name || 0 }}</p>
    </div>
</template>

<script setup>
const query = gql`
  query {
    overviewPage(url: "/home/overview-page") {
      id
      name
      pageTitle
    }
  }
`

// const variables = { limit: 5 }
const { data } = await useAsyncQuery(query)
</script>

<style scoped>

</style>