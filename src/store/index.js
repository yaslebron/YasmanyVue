//import Vue from 'vue'
//import Vuex from 'vuex'
import {createLogger, createStore} from 'vuex'


import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

 const store = createStore({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    state,
    getters,
    actions,
    mutations,
})

export default store;