<template>
  <el-tabs tab-position="left">
    <el-tab-pane :label="$t('service.tab.publish.service')">
      <plantform-main/>
    </el-tab-pane>
    <el-tab-pane :label="$t('service.tab.publish.setting')">
      <plantform-setting/>
    </el-tab-pane>
    <el-tab-pane :label="$t('service.tab.post.bind')">
      <post-bind/>
    </el-tab-pane>
    <el-tab-pane :label="$t('service.tab.service.switch')">
      <service-switch/>
    </el-tab-pane>
    <el-tab-pane :label="$t('service.tab.change.local')">
      <change-locale/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import PlantformMain from "@/components/PlantformMain";
import PlantformSetting from "@/components/PlantformSetting";
import PostBind from "@/components/PostBind";
import ServiceSwitch from "@/components/ServiceSwitch";
import ChangeLocale from "@/components/ChangeLocale";

export default {
  name: "PublishService",
  components: {ChangeLocale, ServiceSwitch, PostBind, PlantformSetting, PlantformMain}
}
</script>

<style scoped>

</style>