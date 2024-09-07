<template>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
    </div>
    <div v-else>
      <p>Loading article...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    data() {
      return {
        article: null as { title: string; content: string } | null
      };
    },
    mounted() {
      this.fetchArticle();
    },
    methods: {
      fetchArticle() {
        const slug = this.$route.params.slug;
        axios.get(`https://interns-blog.nafistech.com/api/posts/${slug}`)
          .then(response => {
            this.article = response.data;
          })
          .catch(error => {
            console.error('Error fetching article:', error);
          });
      }
    }
  });
  </script>
  