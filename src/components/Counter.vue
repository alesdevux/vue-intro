<script setup>
  defineProps({
    msg: String
  })
</script>
<script>
  export default {
    data: () => ({
      counter: 0
    }),
    methods: {
      decrement() {
        if (this.counter > 0) {
          this.counter--
        }
      },
      increment() {
        this.counter++
      }
    }
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