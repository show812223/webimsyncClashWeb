<template>
  <v-app id="app">
    <router-view />
    <sb-snackbar />
    <sb-dialog />
  </v-app>
</template>

<script>
(async function () {
  await CefSharp.BindObjectAsync('clashDataObject')
})()
export default {
  mounted () {
    this.$store.state.layout.isFooterVisible = false
    this.$store.state.layout.paddingNumber = 0
  }
}
</script>
