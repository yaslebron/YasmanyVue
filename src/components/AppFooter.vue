<template>
  <footer>
    <span>🖥️ I ❤️ Trello <a href="https://vuejs.org/">Vue.js</a> in Rep Dom</span>
  </footer>    
</template>

<script>
export default {
    name:'app-footer'
}
</script>

<style lang="scss" >
footer{
    box-sizing: border-box;
    background-color: #cfd8dc;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: relative;
    width: 100%;
    text-align: center;


        a{
            text-decoration:none;
            color: #546e7a;
           
        }
}
</style>