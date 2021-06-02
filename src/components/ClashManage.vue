<template>
  <sb-clash-manage
    :clashVersions="clashVersions"
    :clashTests="clashTests"
    :clashResults="clashResults"
    @clickVersion="clickVersion"
    @clickTest="clickTest"
  />
</template>

<script>
import cloneDeep from "lodash-es/cloneDeep";
export default {
  data() {
    return {
      version: {
        Id: "001",
        ModifiedTime: "2020-11-24T07:18:37.523969Z",
        Version: 20,
        Publish: false,
      },
      test: {
        Id: "",
        DisplayName: "Test 001",
        SourceFile1Id: "2020-05-12 XXX案 Architecture.nwc",
        SourceFile2Id: "2020-05-12 XXX案 Structure.nwc",
        Results: {
          New: 500,
          Active: 523,
          Reviewed: 23,
          Approved: 20,
          Resolved: 1000,
        },
      },
      clashVersions: [],
      clashTests: [],
      clashResults: [
        {
          Id: "e681797b-471d-43e7-87e5-4b87f72e644d",
          FindVersion: 0,
          Status: 1,
          SourceFile1Id: {
            name: "Architecture.nwc",
            value: "Architecture.nwc",
          },
          SourceFile2Id: { name: "Structure.nwc", value: "Structure.nwc" },
          DisplayName: "衝突1",
          CreatedDate: "2021-04-21T13:32:35Z",
          AssignedTo:{name:"hankhu"},
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
            BoundingBoxMinZ: -2.0,
          },
        },
      ],
    };
  },
  mounted() {
    // versions
    for (var i = 0; i < 5; i++) {
      if (i != 0) {
        this.version.Publish = false;
      }
      this.version.Id = i;
      this.version.Version = 20 - i;
      this.clashVersions.push(cloneDeep(this.version));
    }
    this.version.Version = 21;
    this.version.Publish = true;
    this.clashVersions.push(this.version);

    // tests
    for (var i = 0; i < 20; i++) {
      this.test.DisplayName = `Test_${i}`;
      this.clashTests.push(cloneDeep(this.test));
    }
  },
  methods: {
    /** clashVersions被按下 */
    async clickVersion(e) {
      console.log("clickVersion", e);
      var versionId = e.Id
      var resClashTest = await clashDataObject.clickVersion(versionId)
      this.clashTest = resClashTest
    },
    /** clashTest 被按下 */
    async clickTest(e) {
      var testId = e.Id
      var resClashResults = await clashDataObject.clickTest(testId)
      this.clashResults = resClashResults
    },
  },
};
</script>

<style></style>
