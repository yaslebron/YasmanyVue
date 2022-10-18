import * as types from './mutations-types'
import API from '../api'
import api from '../api'


export default{
    //fetch via ajax de los paneles del usuario
    fetchBoards ({ commit}, {user}){
        commit(types.FETCH_BOARDS_REQUEST)

        API.getBoardsByUser(user)
        .then(snap => commit(types.FETCH_BOARDS_SUCCESS, {boards: snap.val()}))
        .catch(error => commit(types.FETCH_BOARDS_FAILURE,{error}))
    },
    //fetch via ajax de las listas asociadas al panel
    fetchLists ({ commit}, {board}){
        commit(types.FETCH_LISTS_REQUEST)

        API.getListsFromBoard(board)
        .then(snap => commit(types.FETCH_LISTS_SUCCESS, {lists: snap.val()}))
        .catch(error => commit(types.FETCH_LISTS_FAILURE,{error}))
    },

     //fetch via ajax de las tareas de una lista
     fetchLists ({ commit}, {list}){
        commit(types.FETCH_TASKS_REQUEST)

        API.getTasksFromList(list)
        .then(snap => commit(types.FETCH_TASKS_SUCCESS, {tasks: snap.val()}))
        .catch(error => commit(types.FETCH_TASKS_FAILURE,{error}))
    },

    //anadir un nuevo panel
    addBoard({ commit }, { name }){
        API.postBoard(name)
        .then(board => commit(types.ADD_BOARD, {board}))
    },

    //anadir una columna
    addColumn ({ commit }, { board}){
        API.postList(board, name)
        .then((column) => commit(types.ADD_COLUMN, { column}))
    },

    addTask ({commit}, {list, title}){
        API.postTask(list, title)
        .then((task) => commit(types.ADD_TASK, {task}))
    },

    deleteTask({commit}, {taskid}){
        API.deleteTask(taskid)
        .then(() => commit(types.DELETE_TASK),{taskid})
    },

    markAsCompleted ({commit}, {task}){
        API.completedTask(task.id)
        .then(() => commit(types.MARK_AS_COMPLETED, {task}))
    }
}

