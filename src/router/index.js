import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Board from '../views/Board.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView },
    {path:'/Board/:id' ,name:'board', component:Board, props:true   }
  ]
})

export default router