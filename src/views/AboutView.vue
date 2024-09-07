

<template>
  <div class="about-container">
    <div class="about-header">
      <h1>About Our Blog</h1>
      <p>Crafting inspiration, one article at a time.</p>
    </div>

    <div class="about-content">
      <section class="about-section">
        <h2>Our Mission</h2>
        <p>
          Our blog is dedicated to bringing you the latest insights, ideas, and inspiration 
          across various topics. We believe in the power of knowledge and creativity to 
          transform the world, and our mission is to share that with you.
        </p>
      </section>

      <section class="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>In-depth articles on trending topics.</li>
          <li>Expert insights and tips from industry leaders.</li>
          <li>Interactive discussions and community engagement.</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>Meet the Team</h2>
        <p>
          Our team is a group of passionate writers, thinkers, and creators who are 
          dedicated to delivering quality content that resonates with our readers.
        </p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
});
</script>




 <style scoped>
/* Style for the About View */
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;  /* Center vertically */
  align-items: center;  /* Center horizontally */
  min-height: 100vh;  /* Ensure the container takes at least full viewport height */
  text-align: center;  /* Center text */
  padding: 0;  /* Remove padding */
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  max-width: 100%;
}

.about-header {
  margin-bottom: 20px;
    /* Reduce bottom margin */
    text-align: center;
    
}

.about-header h1 {
  font-size: 2.5em;
  margin-bottom: 0;  /* Reduce margin */
  color: #333;
  text-align: center;
  font-weight: bold;
}

.about-header p {
  font-size: 1.5em;
  margin: 70;  /* Remove any margin */
  color: #8d5959;
  text-align: center;
  
}

.about-content {
  padding: 0px;
  max-width: 100%;  /* Limit the content width */
  margin: 0;  /* Remove margin */
  font-size: 1.2em;
  text-align: center;

}

.about-section {
  margin-bottom: 20px;
  font-size: 1.2em;  /* Reduce margin */
  text-align: center;
  width:100%;
  
}

.about-section h2 {
  font-size: 1.5em;
  margin: 10;  /* Remove margin */
  color: #3d2d2d;
  text-align: center;
   font-weight: bold;
}

.about-section p {
  font-size: 1.5em;
  margin: 10;  /* Remove margin */
  color: #7d5555;
  text-align: center; 
}

.about-section ul {
  list-style-type: disc;
  margin: 10px;
  text-align: center;  /* Align list text to the*/
}

.about-section ul li {
  margin-bottom: 5px;  /* Reduce margin between list items */
  font-size: 1em;
  color: #693838;
  text-align: center;
}
</style>
