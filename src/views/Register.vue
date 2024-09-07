<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',        // Added name field
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
      };
    },
    methods: {
      async registerUser() {
        if (this.password !== this.confirmPassword) {
          this.error = "Passwords do not match";
          return;
        }
  
        try {
          const response = await axios.post('https://interns-blog.nafistech.com/api/register', {
            name: this.name,    // Include name in the API request
            email: this.email,
            password: this.password,
            password_confirmation:this.confirmPassword
          });
          console.log('Registration successful:', response.data);
          this.$router.push('/login');

          const token = response.data.token;
          localStorage.setItem('authToken', token);
  
          this.$router.push('/'); 
        } catch (error) {
          if (error.response) {
         
          console.error('Error registering:', error.response.data);
          alert(`Registration failed: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
         
          console.error('Error registering:', error.request);
          alert('Registration failed: No response from server');
        } else {
          
          console.error('Error registering:', error.message);
          alert(`Registration failed: ${error.message}`);
        }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  .register {
    max-width: 9000px;
    margin: 0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 25px;
  }
  
  .register h2 {
    text-align: center;
  }
  
  .register form {
    display: flex;
    flex-direction: column;
  }
  
  .register form div {
    margin-bottom: 10px;
  }
  
  .register form label {
    margin-bottom: 5px;
  }
  
  .register form input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .register button {
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .register button:hover {
    background-color: #36a769;
  }
  
  .register p {
    color: red;
    text-align: center;
  }
  </style>
  