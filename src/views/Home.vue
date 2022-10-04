<template>
    <div>
        <h1>Mis Paneles</h1>
        <div class="boards-colect">
            <input 
                type="text"
                placeholder="Añadir nuevo panel"
                v-model="boardname"
                @keyup.enter="add()"/>
            <board-card
                v-for ="(board, index) in boards"
                :key="index"
                :name="board.name"  
                :id="board.id">
            </board-card>
            
        </div>
    </div>
</template>

<script>
//import  '../views/scss/Home.scss'
import BoardCard from '../components/BoardCard.vue'

export default {
    name:'home-view',
    components:{BoardCard},
    data: function (){
        return{
            boardname:'',
            boards:
            [
                {id: '1', name:'Tareas' },
                {id: '2', name:'Lista de compras' }
            ]
        }
    },
    methods:{
        add: function (){
            this.boards.push({name: this.boardname, id: this.boards.length+1})
        }
    }
}
</script>


<style lang="scss" scoped>
h3{
  text-align: center;
  margin: 1.5rem;
}
.boards-colect{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
}
    
input{
    box-sizing:border-box;
    background-color: #546e7a;
    border: 2px solid #546e7a;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active{
        background-color: white;
        color: #546e7a;
    }
    &::placeholder{
        color: white;
    }
}
</style>