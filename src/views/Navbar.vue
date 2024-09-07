<template>
  <nav class="navbar">
    <div class="container">
      
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        
        <button @click="showLogoutConfirm = true" class="logout-button">Logout</button>
    
      </ul>
    </div>
    <div v-if="showLogoutConfirm" class="modal-overlay">
      <div class="modal-content">
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to logout?</p>
        <button @click="logout">Yes</button>
        <button @click="showLogoutConfirm = false">Cancel</button>
      </div>
    </div>
  </nav>  

  
</template>

<script>
export default {
  data() {
    return {
      showLogoutConfirm: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken'); 
      this.showLogoutConfirm = false; 
      this.$router.push('/'); 
    }
  }
};


</script>

<style scoped>
.logout-button{
  list-style-type: none;
  display: flex;
  gap: 60px;
  font-size: 1.4rem;
  font-weight: bold;
  width:center;


}
.navbar {
  background-color: #9ad7d7;
 
  width:100%;
}

.container {
  display: flex;
  justify-content: center;
 
 
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 60px;
  font-size: 1.6rem;
  font-weight: bold;
  width:center;


  
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: rgb(25, 23, 23);
  text-decoration: none;
  font-weight: bold;
 
  
}

.nav-links a:hover {
  text-decoration: underline;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #cddfeb;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(85, 9, 9, 0.2);
  width: 300px;
  text-align: center;
}

.modal-content h2 {
  margin: 0 0 10px;
}

.modal-content p {
  margin: 0 0 20px;
}

.modal-content button {
  margin: 10px;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
}

.modal-content button:first-of-type {
  background-color: #c38383;
  color: white;
}

.modal-content button:first-of-type:hover {
  background-color: #c82333;
}

.modal-content button:last-of-type {
  background-color: #6c757d;
  color: white;
}

.modal-content button:last-of-type:hover {
  background-color: #398bca;
}
</style>
