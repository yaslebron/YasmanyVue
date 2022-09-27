<template>
    <section>
        <h3> <span>Mis Paneles</span> ▶ {{ name}} </h3>
   
        <input 
            type="text"
            placeholder="Agrega una lista"
            v-model= 'listname'
            @keyup.enter="add()" >
    </section>
</template>

<script>

import '../views/scss/Board.scss'

    export default{
        name: 'board-view',
        components:{},

        props:{
            name: String,
            id: String
        }
    }
</script>
<!--
<style lang="scss" scoped>
section{
    text-align: left;
}
h3{
    color: #37474f;
    text-align: left;
    margin: 1.5rem;

    span{
        color: #546e7a;
    }
}
</style>   -->