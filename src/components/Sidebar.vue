<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre:{{ nombre }}</h3>
    <h3>Email:{{ email }}</h3>
    <ul>
       <li><RouterLink to="/registrar">Registrar</RouterLink></li>
    <li><RouterLink to="/contador">Contador</RouterLink></li>
    <li><RouterLink to="/lista-de-tareas">Lista de tareas</RouterLink></li>
    </ul>  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import { ref ,watch} from 'vue';
const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);
watch(()=>registrarStore.nombre,(newValue)=>{
  nombre.value=newValue;
});
watch(()=>registrarStore.email,(newValue)=>{
  email.value=newValue;
});

</script>
<style>
.sidebar{
  width: 200px;
  background-color: aqua;
  padding: 20px;
}
</style>
