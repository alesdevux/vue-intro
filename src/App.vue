<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Counter from './components/Counter.vue'
import InputReactive from './components/InputReactive.vue';
import ComputedProps from './components/ComputedProps.vue';
import Watcher from './components/Watcher.vue';
import Login from './components/Login.vue';
</script>

<template>
<header class="fixed top-0 w-full h-20 border-b-2 border-b-primary-dark">
  <div class="container flex items-center justify-end h-full mx-auto">
    <Login />
  </div>
</header>
<main class="mt-28 f-big">
  <Counter msg="Hola, empezando con Vue.js" />
  <InputReactive msg="Holis" />
  <ComputedProps />
  <Watcher />
</main>
</template>