<template>
<div>
  <ClashManage v-if="isManager"/>
  <ClashInfo v-else/>
</div>
</template>

<script>
import ClashInfo from "../components/ClashInfo";
import ClashManage from "../components/ClashManage";

export default {
  name: 'Home',
  components: { ClashInfo, ClashManage },
  data(){
    return {
      isManager:true
    }
  },
  async mounted() {
    this.isManager = await clashDataObject.checkIsManager()
  }
}
</script>
