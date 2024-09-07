<template>
  <div class="comment-actions" style="display: flex; justify-content: flex-end;">
    <button v-if="isOwner" @click="onEdit" class="edit-button" style="background-color: #3498db; color: #ffffff;">Edit</button>
    <button @click="onDelete" class="delete-button" style="background-color: #e74c3c; color: #ffffff;">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    isOwner: {
      type: Boolean,
      required: true
    },
    commentId: {
      type: Number,
      required: true
    }
  },
  methods: {
    onEdit() {
      this.$emit('edit', this.commentId);
    },
    onDelete() {
      this.$emit('delete', this.commentId);
    }
  }
});
</script>

<style scoped>
.comment-actions {
  margin-top: 10px;
}
.edit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
}
.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.edit-button:hover, .delete-button:hover {
  opacity: 0.8;
}
</style>
