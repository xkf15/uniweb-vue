<template lang="pug">
  #app
    .container
      router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
a, a:link, a:visited, a:hover, a:active
  text-decoration none

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

</style>
