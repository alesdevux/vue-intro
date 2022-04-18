<script>
  export default {
    data() {
      return {
        text: 'La puerta está cerrada',
        open: false,
        action: 'abrir'
      }
    },
    watch: {
      open(value) {
        if (value) {
          this.text = 'La puerta está abierta',
          this.action = 'cerral'
        } else {
          this.text = 'La puerta está cerrada',
          this.action = 'abril'
        }
      }
    },
    computed: {
      addClass() {
        return {
          'text-primary-dark': !this.open,
          'text-primary': this.open
        }
      }
    }
  }
</script>

<template>
  <div class="f-small">
    <h1 :class="addClass">{{ text }}</h1>
    <button @click="open = !open" >{{ action }}</button>
  </div>
</template>