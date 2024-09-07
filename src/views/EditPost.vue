
   <template>
    <div class="edit-post-container" v-if="post">
      <h2>Edit Post</h2>
      <form @submit.prevent="updatePost">
        <input
          v-model="post.title"
          type="text"
          placeholder="Title"
          required
          class="input-title"
        />
        <textarea
          v-model="post.content"
          placeholder="Content"
          required
          class="textarea-content"
        ></textarea>
        <button type="submit" class="submit-button">Update Post</button>
      </form>
      <button @click="deletePost" class="delete-button">Delete Post</button>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'EditPost',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const post = ref<{ title: string; content: string } | null>(null);
      const postSlug = route.params.slug as string | undefined;
if (!postSlug) {
  console.error('Post slug is not defined');
  return;
}


      const fetchPost = async () => {
      const postSlug = route.params.slug as string; // Make sure you're using the correct route parameter
      try {
        const response = await axios.get(`https://interns-blog.nafistech.com/api/posts/${postSlug}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        post.value = response.data.data;
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    const updatePost = async () => {
      const postSlug = route.params.slug as string; // Use the correct route parameter
      try {
        await axios.put(
          `https://interns-blog.nafistech.com/api/posts/${postSlug}`,
          post.value,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
              'Content-Type': 'application/json',
            },
          }
        );
        router.push('/posts'); // Redirect to the posts page
      } catch (error) {
        console.error('Error updating post:', error);
      }
    };

    const deletePost = async () => {
      const postSlug = route.params.slug as string; // Use the correct route parameter
      try {
        await axios.delete(`https://interns-blog.nafistech.com/api/posts/${postSlug}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        router.push('/posts'); // Redirect to the posts page
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    };
  
      onMounted(() => {
        fetchPost();
      });
  
      return { post, updatePost, deletePost };
    },
  });
  </script>
  

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500&display=swap');
  .edit-post-container {
    min-height: 100vh; 
  background-image: url('@/assets/background.jpg'); 
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; 
  color: #fff; 
  padding: 20px; 

  /* Apply the imported fonts */
  font-family: 'Roboto', sans-serif;
  }
  
  h2 {
    text-align: center;
    color: #373232;
    margin-bottom: 40px;
    font-size: 2.8em;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .input-title {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 2.1em;
  }
  
  .textarea-content {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1.1em;
    resize: vertical;
    min-height: 150px;
  }
  
  .submit-button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #2980b9;
  }
  
  </style>
  