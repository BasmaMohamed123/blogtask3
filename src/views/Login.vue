<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  


  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
        isLoggedIn: false,
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('https://interns-blog.nafistech.com/api/login', {
            email: this.email,
            password: this.password
          });
  
          const token = response.data.token;
          localStorage.setItem('authToken', token);
         // localStorage.setItem('userId', userId);
          // localStorage.setItem('userName', userName);
          this.$router.push('/posts'); 
        } catch (error) {
          this.error = error.response.data.message || "An error occurred during login";
        }
      },

      logoutUser() {
      localStorage.removeItem('authToken');
      this.isLoggedIn = false; // Reset logged-in state
      this.email = ''; // Optional: clear email field
      this.password = ''; // Optional: clear password field
      this.$router.push('/'); // Optional: Redirect to home or login page
    }
    },
    
  };
  </script>
  
  <style scoped>
/* Container for the form */
.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Center the header text */
h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Style for form fields */
form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  color: #555;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

/* Style for buttons */
button[type="submit"] {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #36a769;
}

/* Error message styling */
p.error {
  color: #e74c3c;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
}
</style>

  