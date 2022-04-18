<script setup>

defineProps({
  msg: String
})

</script>

<template>
<div class="f-small">
  <p>{{ msg }}</p>
  <input type="text" v-model="msg" />
</div>
</template>