<template>
  <v-app id="app">
    <router-view v-if="isShow" id="view" />
    <sb-snackbar />
    <sb-dialog />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  async mounted() {

    await CefSharp.BindObjectAsync("clashDataObject");
    this.$store.state.clash.isWeBIMSync = await clashDataObject.checkIsWeBIMSync();
    var data = await clashDataObject.checkIsManager();
    console.log("checkIsManager",data);
    this.$store.state.project.functions = data
    console.log("functions",this.$store.state.project.functions);
    this.isShow = true;
    this.$store.state.layout.isFooterVisible = false;
    this.$store.state.layout.paddingNumber = 0;

    console.log("CefSharp", CefSharp);
  }
};
</script>
