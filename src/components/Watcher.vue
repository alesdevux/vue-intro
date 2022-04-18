<script setup>
  defineProps({
    msg: {
      type: String,
      default: 'Hello, Vue.js!'
    }
  })
</script>
<script>
  export default {
    data() {
      return {
        text: this.msg
      }
    },
    watch: {
      text(newVal, oldVal) {
        console.log(`${oldVal} -> ${newVal}`)
      }
    }
  }
</script>

<template>
  <div class="f-small">
    <h1 class="mb-9">{{ text }}</h1>
  </div>
</template>