<template>
  <div class="container">
    <Header :mensaje="texto"></Header>
    <Sidebar></Sidebar>
<div class="content">
  <input type="texto" v-model="texto">
  {{ texto }}
  <RouterView></RouterView>
</div>
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import { ref } from 'vue';
const texto= ref('');
</script>
<style>
.container{
  display: flex;
}
.content{
  flex: 1;
  padding: 20px;
  }
</style>
