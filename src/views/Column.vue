<template>
   <section>
    <header>
        <h3>{{ name }}</h3>
    </header>
    <TasksList
    :listid="ListId"
    :tasks="TasksList">
    </TasksList>
   </section>
</template>

<script>
// import '../views/scss/Column.scss'
 import TasksList from '../components/TasksList.vue'

    export default{
        name:'column',
        components:{TasksList},
        props:{
            ListId: String,
            name: String
        },
    data (){
        return{
            TasksList:[
                {id:1, title:'aprender', completed:false},
                {id: 2, title:'practicar', completed:false}
            ]
        }
    }
    }

</script>

<style lang="scss" scoped>
section{
    box-sizing: border-box;
    background-color: #eceff1;
    border-radius: 3px;
    box-shadow: 
    0 0 0 0.5px rgba(49, 49, 93, .03),
    0 2px 5px 0 rgba(49, 49, 93, .1),
    0 1px 2px 0 rgba(0, 0, 0, .08);
    margin: 1rem;
    padding: 1rem;
    width: 100%;

    @media screen and (min-width: 600px) {
        width: calc(50% - 2rem - 2px);
    }
    @media screen and (min-width: 1024px) {
        width: calc(33% - 2rem - 2px);
    }
    @media screen and (min-width: 1200px) {
        width: calc(25% - 2rem - 2px);
    }
}

header{
    color: #37474f;
    margin: 0;
    padding-bottom: 1rem;
}

h3{
    margin: 0;
}
</style>