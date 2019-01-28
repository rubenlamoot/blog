<template>
  <div id="app">
    <Navbar></Navbar>
      <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
  name: 'app',
    // mounted(){
    //     this.getArticles()
    // },
  components: {
    Navbar,

  },
  // methods:{
  //     getArticles(){
  //         const artikelen = localStorage.getItem('artikelen');
  //         if (artikelen){
  //           this.Artikelen = JSON.parse(artikelen);
  //           return;
  //         }
  //
  //     }
  // }
}
</script>


