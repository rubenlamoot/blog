<template>
  <div id="app">
    <Navbar></Navbar>
      <router-view></router-view>

  </div>
</template>

<script>
    // importeer de component navbar om als tag te gebruiken
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',

  components: {
    Navbar,

  },

}
</script>


