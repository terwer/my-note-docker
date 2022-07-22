<template>
  <el-tabs tab-position="left" style="height: 200px" class="demo-tabs">
    <el-tab-pane label="发布服务">
      <PlantformMain/>
    </el-tab-pane>
    <el-tab-pane label="发布配置">
      发布配置
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import PlantformMain from "@/components/PlantformMain";

export default {
  name: "PublishService",
  components: {PlantformMain}
}
</script>

<style scoped>

</style>