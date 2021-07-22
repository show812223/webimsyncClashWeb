<template>
  <sb-clash-management v-if="isManager" />
  <sb-clash-review v-else :isPublishedPage="true" />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", ["functions"]),
    ...mapGetters("clash", ["isWeBIMSync"]),
    isManager() {
      console.log(this.$store.state.project.functions);
      return this.$store.state.project.functions.includes(
        "Zone.Clash.Management.Update"
      );
    }
  },
  async mounted() {
    console.log("Home isManager", this.isManager);

    window.showJsMessage = this.test
   
  },
  methods:{
 
  }
};
</script>
