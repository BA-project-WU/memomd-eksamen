<template>
    <div>
        Page visits: {{ count }}
        <label>Enter Company Name</label>
        <input type="text" v-model="name" placeholder="name">
        <label>Select Header Image</label>
        <input type="file" multiple @change="handleFileSelection($event)" />
    </div>
</template>

<script setup>
const { data: count } = await useFetch('https://cdn.umbraco.io/content?umb-project-alias=nicole-ba-test')
const files = ref([]);
const name = ref('');
const handleFileSelection = (event) => {
    let uploadedFiles = event.target.files;
    for (let i = 0; i < uploadedFiles.length; i++) {
        files.value.push(uploadedFiles[i]);
    }
}
async function submit() {
    let formData = new FormData();
    formData.append('name', name.value);
    for (let i = 0; i < files.value.length; i++) {
        formData.append('images[' + i + ']', files.value[i]);
    }
    await $fetch('https://cdn.umbraco.io/content?umb-project-alias=nicole-ba-test', {
        method: 'POST',
        body: formData
    });
}
</script>

<style scoped>

</style>