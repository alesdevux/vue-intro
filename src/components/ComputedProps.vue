<script>

export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      dateNow: new Date()
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    date() {
      return this.dateNow.toLocaleString()
    }
  }
}

</script>

<template>
<div class="f-small">
  <p>{{ fullName }}</p>
  <p>{{ date }}</p>
</div>
</template>