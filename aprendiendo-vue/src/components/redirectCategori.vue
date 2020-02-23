<template>
    <h1>Redirigiendo...</h1>
</template>
<script>
export default {
    name:"RedirectCategori", 
    mounted(){
        var searchString = this.$route.params.searchString;
        this.$router.push('/categoria/'+searchString);
    }
}
</script>