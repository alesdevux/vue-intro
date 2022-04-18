<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const counter = ref(0)

function decrement() {
  if (counter.value > 0) {
    counter.value--
  }
}
function increment() {
  counter.value++
}
</script>

<template>
  <h1 class="mb-32">{{ msg }}</h1>

  <div class="mb-5">
    <button @click="decrement">-</button>
    <span class="px-5">{{ counter }}</span>
    <button @click="increment">+</button>
  </div>
</template>