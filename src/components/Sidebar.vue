<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
    <ul>
       <li><RouterLink to="/registrar">Registrar</RouterLink></li>
    <li><RouterLink to="/contador">Contador</RouterLink></li>
    <li><RouterLink to="/lista-de-tareas">Lista de tareas</RouterLink></li>
    </ul>  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

</script>
<style>
.sidebar{
  width: 200px;
  background-color: aqua;
  padding: 20px;
}
</style>
