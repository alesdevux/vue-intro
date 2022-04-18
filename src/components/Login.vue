<script>
  export default {
    data() {
      return {
        session: false,
        username: '',
      }
    },
    watch: {
      session(value) {
        if (!value) {
          this.username = ''
        }
      }
    },
    computed: {
      addClass() {
        return {
          'text-primary border-primary bg-primary bg-opacity-20': !this.session,
          'text-primary-dark border-transparent': this.session
        }
      }
    }
  }
</script>

<template>
  <div class="flex items-center gap-3">
    <div v-if="session">
      <p>Hola, como estás <span class="text-primary">{{ username }}</span>?</p>
    </div>
    <div v-if="!session">
      <input type="text" v-model="username" placeholder="username" class="text-right">
    </div>
    <button @click="session = !session" :class="addClass">
      <span v-if="!session">Acceder</span>
      <span v-if="session">Salir</span>
    </button>
  </div>
</template>