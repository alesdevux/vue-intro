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
<div class="f-small">
  <h1 class="mb-9">{{ msg }}</h1>

  <div>
    <button @click="decrement">-</button>
    <span class="px-5">{{ counter }}</span>
    <button @click="increment">+</button>
  </div>
</div>
</template>