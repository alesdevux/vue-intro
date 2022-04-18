<script setup>

defineProps({
  msg: String
})

</script>

<template>
  <p>{{ msg }}</p>
  <input type="text" v-model="msg" />
</template>