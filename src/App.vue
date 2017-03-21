<template lang="pug">
  #app
    .container
      router-view
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout () {
      this.$store.dispatch('UserLogout')
    }
  }
}
</script>

<style lang="stylus">
a, a:link, a:visited, a:hover, a:active
  text-decoration none

$background-color = #f2f0f4
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background-color $background-color

</style>
