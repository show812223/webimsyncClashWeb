<template>
  <v-container class="mycontainer pa-0" fluid v-resize="onResize">
    <v-row class="skyBlue" no-gutters :style="`height:${containerHeight}px`">
      <v-col :style="`height:${containerHeight}px`">
        <sb-clash-info
          :dataItems="dataItems"
          @updateFilter="updateFilter"
          @rowClick="rowClick"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cloneDeep from "lodash-es/cloneDeep"
export default {
  data() {
    return {
      containerHeight: 0,
      result: {
          Id: "e681797b-471d-43e7-87e5-4b87f72e644d",
          SourceFile1Id: {
            name: "caa6df8f-5808-4625-8515-612d3115c634.nwd",
            value: "Architecture.nwc"
          },
          SourceFile2Id: { name: "caa6df8f-5808-4625-8515-612d3115c634.nwd", value: "Structure.nwc" },
          AssignedTo: { name: "hankhu" },
          Found: {name:"",version:0},
          Status: 1,
          DisplayName: "衝突1",
          CreatedDate: "2021-04-21T13:32:35Z",
          MetaData: {
            Distance: -5.827877343838721,
            Description: "硬",
            Item1Layer: "Level 1",
            Item2Layer: "<No level>",
            ViewBoundsMaxX: -26.616712954178787,
            ViewBoundsMaxY: 35.2112146000471,
            ViewBoundsMaxZ: 20.49737548828125,
            ViewBoundsMinX: -27.075046297446228,
            ViewBoundsMinY: 34.752881256779659,
            ViewBoundsMinZ: -2.0,
            BoundingBoxMaxX: 6.7750015258789063,
            BoundingBoxMaxY: 53.364298820495605,
            BoundingBoxMaxZ: 20.49737548828125,
            BoundingBoxMinX: -52.358713150024414,
            BoundingBoxMinY: 27.594799041748047,
            BoundingBoxMinZ: -2.0
          }
        },
      dataItems: [
       
      ]
    };
  },
  mounted() {
      for (var i = 0; i < 50; i++) {
      this.result.Id = `result_${i}`;
      this.result.DisplayName = `衝突${i + 1}`;
      this.result.Status = i % 5;
      this.dataItems.push(cloneDeep(this.result));
    }
    this.$nextTick(() => {
      this.onResize();
    });
  },
  methods: {
    onResize() {
      this.containerHeight = this.$el.offsetHeight;
    },
    async updateFilter(e) {
      console.log("updateFilter", e);
      this.dataItems = await clashDataObject.updateClashResults(e);
    },
    async rowClick() {
      
    }
  }
};
</script>

<style lang="scss" scoped>
.mycontainer {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
}
</style>
