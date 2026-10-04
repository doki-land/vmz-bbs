<template>
  <div class="category-sidebar">
    <div class="search-section">
      <div class="search-box">
        <input type="text" placeholder="搜索分类内容..." class="search-input" v-model="searchQuery">
        <button class="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <category-filter/>
    <topic-filter/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import CategoryFilter from "./CategoryFilter.vue";
import TopicFilter from "@/components/topic/TopicFilter.vue";

// 模拟数据，后续需要替换为真实的API调用
const searchQuery = ref('')


</script>

<style lang="scss" scoped>
.category-sidebar {

  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .search-section {
    margin-bottom: 2rem;

    .search-box {
      display: flex;
      align-items: center;
      background-color: #f5f7fa;
      border-radius: 8px;
      padding: 0.5rem 1rem;

      .search-input {
        border: none;
        background: none;
        outline: none;
        width: 100%;
        font-size: 0.9rem;
        color: #333;

        &::placeholder {
          color: #999;
        }
      }

      .search-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: #666;
        padding: 0 0 0 0.5rem;

        &:hover {
          color: #333;
        }
      }
    }
  }

}
</style>