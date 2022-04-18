<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Counter from './components/Counter.vue'
import InputReactive from './components/InputReactive.vue';
import ComputedProps from './components/ComputedProps.vue';
</script>

<template>
<div class="f-big">
  <Counter msg="Hola, empezando con Vue.js" />
  <InputReactive msg="Holis" />
  <ComputedProps />
</div>
</template>