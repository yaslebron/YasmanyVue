export default{
    getListByBoard: (state) => (boardid) =>{
        return Object.values(state.lists)
        .filter(list => list.board === boardid)
    },

    getTaskFromList: (state) => (listId) => {
        return Object.values(state.tasks)
        .filter(task => task.list === listId)
    }
}