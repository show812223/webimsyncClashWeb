<template>
    <sb-clash-manage v-if="isManager" />
    <sb-clash-info v-else :isPublishedPage="true"/>
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
    isManager() {
      console.log(this.$store.state.project.functions);
      return this.$store.state.project.functions.includes(
        "Project.Clash.Management.Update"
      );
    }
  },
  async mounted() {
    console.log("Home isManager", this.isManager);
  }
};
</script>
