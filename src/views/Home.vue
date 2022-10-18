<template>
    <div>
        <h1>Mis Paneles</h1>
        <div class="boards-colect">
            <span v-if="fetchingData">Cargando...</span>
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
import {mapState, mapActions} from 'vuex'
//import  '../views/scss/Home.scss'
import BoardCard from '../components/BoardCard.vue'

export default {
    name:'home-view',
    components:{BoardCard},
    data: function (){
        return{
            boardname:''
           /*
            boards:
            [
                {id: '1', name:'Tareas' },
                {id: '2', name:'Lista de compras' }
            ]
            */
        
        }
    },
    computed:{
        ...mapState([
            'boards',
            'fetchingData'
        ])
    },

    methods:{
         ...mapActions([
            'fetchBoards',
            'addBoard'
         ]),
        add: function (){
            this.addBoard({name: this.boardname, id: this.boards.length+1})
        }
    },

    created (){
       this.fetchBoards({ user: 1}) 
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