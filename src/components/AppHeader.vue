<script setup>
    import '../views/scss/AppHeader.scss'
</script>

<template>
    <header>
        <span class="tittle">Vue Trello</span>
        <router-link class="btn-header" to="/">Mis Paneles</router-link>
    </header>
</template>

<script>
export default {
    name:'app-header'
}
</script>

<!--
<style lang="scss" scoped>
header{
    box-sizing: border-box;
    background-color: #36464e;
    display: flex;
    flex-direction: row;
    justify-content: flex-start ;
    margin: 0;
    padding: 1rem;

        .tittle{
            align-self: center;
            color: white;
            font-size: 1.2rem;
            font-weight: bold;
            margin-right: 1rem;
        }
}
.btn-header{
    background-color: #d2e0e7;
    border: none;
    border-radius: 3px;
    box-shadow: 
    0 0 0 0.5px rgba(49, 49, 93, .03),
    0 2px 5px 0 rgba(49, 49, 93, .1),
    0 1px 2px 0 rgba(0, 0, 0, .08);
    color: black;
    cursor: pointer;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0 0.5rem;
}
</style>

-->