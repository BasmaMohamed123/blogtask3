<template>
  <div class="pagination">
    <button :disabled="currentPage <= 1" @click="goToPage(currentPage - 1)">Previous</button>
    <button
      v-for="page in totalPagesArray"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>
    <button :disabled="currentPage >= totalPages" @click="goToPage(currentPage + 1)">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number as PropType<number>,
      required: true,
      default: 1
    },
    totalPages: {
      type: Number as PropType<number>,
      required: true,
      default: 1
    }
  },
  computed: {
    totalPagesArray(): number[] {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  },
  methods: {
    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('page-changed', page);
      }
    }
  }
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
}

button.active {
  font-weight: bold;
}
</style>

  