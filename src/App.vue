

<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
   
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue';



export default {
  components: {
    Navbar,

    
  }
};
</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
 
}

/* Main content area */
.main-content {
  flex: 1; /* Fills the remaining space */
  padding: 20px;
  background-color: #f5f5f5;
  overflow: auto;
  
}

/* Footer styling */
.footer {
  padding: 15px;
  background-color: #910dc53d;
  color: rgb(88, 11, 123);
  text-align: center;
}
</style>
