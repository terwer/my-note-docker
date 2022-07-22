<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="发布服务">
      <plantform-main/>
    </el-tab-pane>
    <el-tab-pane label="发布配置">
      <plantform-setting/>
    </el-tab-pane>
    <el-tab-pane label="文章绑定">
      <post-bind/>
    </el-tab-pane>
    <el-tab-pane label="服务开关">
      <service-switch/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import PlantformMain from "@/components/PlantformMain";
import PlantformSetting from "@/components/PlantformSetting";
import PostBind from "@/components/PostBind";
import ServiceSwitch from "@/components/ServiceSwitch";

export default {
  name: "PublishService",
  components: {ServiceSwitch, PostBind, PlantformSetting, PlantformMain}
}
</script>

<style scoped>

</style>