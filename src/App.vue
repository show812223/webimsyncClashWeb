<template>
  <v-app id="app">
    <!-- loading dialog -->
     <v-dialog v-model="dialog" persistent  width="200">
      <v-card  outlined class="justify-center" height="126" width="200">
        <v-container class="" >
          <v-row class="" align="center" justify="center">
            <v-col style="text-align: center" class="text-h6">
              Loading...
            </v-col>
          </v-row>
          <v-row class="" align="center" justify="center">
            <v-col style="text-align: center">
              
              <v-progress-circular
              class="mb-3"
                color="primary"
                style="z-index: 5"
                :indeterminate="true"
              ></v-progress-circular>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    
    <router-view v-if="isShow" id="view" />
    <sb-snackbar />
    <sb-dialog />
  </v-app>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  data() {
    return {
      isShow: false,
      dialog:false
    };
  },
  computed:{
    ...mapGetters("clash",["currentClashSet"])
  },
  async mounted() {
    window.setClashSet = this.setClashSet
    window.setCurrentModelSetInfos = this.setCurrentModelSetInfos
    window.switchLoading = this.switchLoading
    window.setI18n = this.setI18n
    await CefSharp.BindObjectAsync("clashDataObject");
    this.$store.state.clash.isWeBIMSync = await clashDataObject.checkIsWeBIMSync();
    var data = await clashDataObject.checkIsManager();
    this.$store.state.project.functions = data;
    var userId = await clashDataObject.getUserId();
    this.$store.state.auth.userInfo = {id:userId}
    this.setLanguage()
    this.isShow = true;
    this.$store.state.layout.isFooterVisible = false;
    this.$store.state.layout.paddingNumber = 0;

    
    
    
    
  },
  methods:{
    ...mapActions("clash",["setCurrentClashSet"]),
    setLanguage(){
      var language = navigator.language
      if(language == 'en-US'){
        this.$vuetify.lang.current = 'en'
        this.$i18n.locale = "en"
      }
      if(language == 'zh-TW'){
        this.$vuetify.lang.current = 'zh-Hant'
        this.$i18n.locale = "zh-Hant"
      }
      console.log("this.$vuetify.lang.current",this.$vuetify.lang.current);
    },
    switchLoading(e){
      this.dialog = e
    },
    setClashSet(e){
      var data = e
      if(typeof(data) == 'string'){
        data = JSON.parse(e)
      }
      this.setCurrentClashSet(data)
      
    },
    /** 設定當前的modelSet資訊 */
    setCurrentModelSetInfos(e){
      console.log("get setCurrentModelSetInfos",e);
       var data = e
      if(typeof(data) == 'string'){
        data = JSON.parse(e)
      }
      this.$store.state.clash.currentModelSetInfos = data
      console.log("currentModelSetInfos", this.$store.state.clash.currentModelSetInfos);
    },
    setI18n(i18nString){
      this.$root.$i18n.locale = i18nString
    }
  }
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
 background: #202020;
  border-left: 1px solid #2c2c2c;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
   background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}

.v-card.v-sheet.theme--dark{
border-color:solid 1px #2196f3;
}

.v-menu__content.theme--dark.menuable__content__active{
  border: solid 1px #2196f3;
}
</style>
