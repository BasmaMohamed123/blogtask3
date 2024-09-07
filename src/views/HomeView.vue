<template>

  <div class="images-img" >
    <section class="image-section"></section>
     <!-- <img :src="articleImage1" alt="Article Image 1":style="{ width: '0', height: '0' }">; -->
     <!-- <img :src="articleImage2" alt="Article Image 2":style="{ width: '50%', height: '0' }">; -->
    <!-- <img :src="articleImage3" alt="Article Image 3":style="{ width: '100%', height: 'auto' }">; -->
  </div>

 


  
  
  <!-- <router-link :to="`/article/${article.id}`" class="btn-secondary">Read More</router-link> -->

  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Welcome to My Blog</h1>
        <p>Where Ideas and Inspiration Come to Life</p>
        <router-link to="/about" class="btn-primary">Learn More About Us</router-link>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="intro-section">
      <div class="container">
        <h2>About the Blog</h2>
        <p>
          This blog is a place where creativity meets knowledge. Whether you're here to learn something new, find inspiration, or just enjoy a good read, you've come to the right place. Explore our articles, discover new ideas, and become part of our community.
        </p>
      </div>
    </section>

    <!-- Featured Articles Section -->
    <section class="featured-articles">
      <div class="container">
        <h2>Featured Articles</h2>
        <div class="articles-grid">
          <div class="article-card" v-for="article in articles" :key="article.id">
            <img :src="article.image" :alt="article.title" class="article-image" />
            <h3>{{ article.title }}</h3>
            <p>{{ article.excerpt }}</p>
            <!-- <router-link :to="`/article/${article.id}`" class="btn-secondary">Read More</router-link> -->
           
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Join Our Newsletter</h2>
        <p>Stay updated with our latest articles and special offers. Sign up for our newsletter today!</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" class="btn-primary">Subscribe</button>
        </form>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
        <router-link to="/contact">Contact Us</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import articleImage1 from '@/assets/article-image-1.jpg';
import articleImage2 from '@/assets/article-image-2.jpg';
import articleImage3 from '@/assets/article-image-3.jpg';


export default {

  data() {
    return {
      articleImage1,
      articleImage2,
      articleImage3,
      articles: [
        {
          id: 1,
          title: 'Exploring the Wonders of the World',
          excerpt: 'A journey through some of the most breathtaking places on Earth.',
          image:  articleImage1,
          
        
        
          id: 2,
          title: 'The Art of Mindful Living',
          excerpt: 'Tips and tricks on how to incorporate mindfulness into your daily life.',
          image: articleImage2
        },
        {
          id: 3,
          title: 'Tech Trends to Watch in 2024',
          excerpt: 'A look at the technologies that are shaping the future.',
          image: articleImage3
        }
      ]
    };
  }
};
</script>

<style scoped>



html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  width: 100%; /* Ensure body takes full width */
  height: 100%;
  
}

.home-container {
  max-width: 100vw; /* Ensure container does not exceed viewport width */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  padding: 0; /* Remove padding to avoid extra space */
  margin: 0; 
}

.article-image {
  width: 10%; /* Fit the image within its container */
  height: auto; /* Maintain the aspect ratio */
  display: block; /* Remove any extra space below the image */
  overflow-x: hidden;
  margin:0;
}

.home-image {
  width: 100%; /* Ensures the image fits within the container */
  height: auto; /* Maintain aspect ratio */
  max-width: 100%; /* Prevents image from exceeding container width */
  max-height: 900px; /* Set a maximum height if needed */
  object-fit: cover; /* Ensure the image covers its container */
  display: block;
  margin: 0 auto;
  
}

.image-container {
  max-width: 100%; /* Ensure container does not exceed viewport width */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  padding: 0; /* Remove padding to avoid extra space */
  margin: 10; 
 
 
}

h1, p {
  width:100%;
  margin: 20;
 
  overflow-x: hidden;
  max-width: 100%;
  line-height: 1.6;
  height: auto; /* Maintains aspect ratio */
  display: block;
  padding: 10px 0px;
  margin-left: 0px;
  

}



.home-view {
  font-family: 'Roboto', sans-serif;
  color: #262424;
  line-height: 1.6;
  max-width: 100%; /* Ensures image does not exceed container width */
  height: auto; /* Maintains aspect ratio */
  display: block;
  width:100%;
}

.hero-section {
  background: url('@/assets/hero-image.jpg') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 150px 0px;
  margin-bottom: 10px;
  width:100%;
  
}

.hero-content h1 {
  width:100%; /* Ensures content doesn’t exceed the container width */
  text-align: center;
  padding: 20px;
  font-size: 3.5rem;
  margin-bottom: 0px;
  max-width: 100%;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 30px;
}

.btn-primary {
  background-color: #2c7718c1;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.intro-section {
  background-color: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
}

.intro-section h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.intro-section p {
  font-size: 1.2rem;
  max-width: 800px;
  margin:  auto;
  
}

.featured-articles {
  max-width:100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 60px 20px;
  background-color: #f7f4f4;
}

.featured-articles h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  
}

.article-card {
  max-width:100%;
  background-color: #eddcdc;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.article-image {
width:100%;

}



.cta-section {
  background-color: #f02461a1;
  color: rgba(99, 31, 64, 0.989);
  text-align: center;
  padding: 60px 20px;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.newsletter-form input[type="email"] {
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  width: 300px;
  font-size: 1rem;
}

.newsletter-form button {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.footer {
  background-color: #1c1b1b;
  color: white;
  text-align: center;
  padding: 20px;
}

.footer a {
  color: #ff6f61;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>

