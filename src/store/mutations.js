//import Vue from 'vue'
import * as types  from './mutations-types'

export default {
    // fetch de paneles creados por el usuario
    [types.FETCH_BOARDS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_BOARDS_SUCCESS](state, {boards}){
        state.fetchingData = false
        state.error = null
        state.boards = {...boards}
    },
    [types.FETCH_BOARDS_FAILURE](state, {error}){
        state.fetchingData = false
        state.error = error
    },

    // fetch de las listas de un determinado panel
    [types.FETCH_LISTS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_LISTS_SUCCESS](state, {lists}){
        state.fetchingData = false
        state.error = null
        state.lists = {...lists}
    },

    [types.FETCH_LISTS_FAILURE](state, {error}){
        state.fetchingData = false
        state.error = error
    },

    // fetch de las tareas de una lista
    [types.FETCH_TASKS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_TASKS_SUCCESS](state, {tasks}){
        state.fetchingData = false
        state.error = null
        state.tasks = {...tasks}
    },
    [types.FETCH_TASKS_FAILURE](state, {error}){
        state.fetchingData = false
        state.error = error
    },


    //Crear nuevo panel
    /*
    [types.ADD_BOARD](state, {board}){
      Vue.set(state.boards, board.id, board)
    },

    //crear lista de tareas
    [types.ADD_BOARD](state, {column}){
        Vue.set(state.lists, column.id, column)
    },

    //Anadir tareas a una lista de tareas
    [types.ADD_BOARD](state, {task}){
        Vue.set(state.tasks, task.id, task)
    },
*/
    //borrar una tarea de una lista de tareas
    [types.DELETE_TASK](state, {taskId}){
        state.tasks = Object.values(state.tasks)
            .filter(task => task.id !== taskId) 
    },

    
    //Marca como completada una tarea
    [types.MARK_AS_COMPLETED](state, {task}){
        task.completed = !task.completed
    },
}