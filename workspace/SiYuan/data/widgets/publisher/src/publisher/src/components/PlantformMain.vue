<template>
  <div class="demo-collapse">
    <el-collapse model-value="1" accordion>
      <el-collapse-item title="发布到Vuepress" name="1">
        <el-form label-width="120px">
          <el-form-item label="文章别名">
            <el-input/>
          </el-form-item>

          <el-form-item>
            <el-checkbox label="使用Google翻译API" size="large" /> &nbsp;&nbsp;
            <el-button type="primary">自动生成别名</el-button>
          </el-form-item>

          <el-form-item label="文章摘要">
            <el-input type="textarea"/>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">自动提取摘要</el-button>
          </el-form-item>

          <el-form-item label="发布时间">
            <el-date-picker
                type="datetime"
                placeholder="请选择发布时间"
            />
          </el-form-item>

          <el-form-item label="文章标签">
            <el-tag closable>Tag 1</el-tag> &nbsp;&nbsp;
            <el-tag class="ml-2" type="success">Tag 2</el-tag> &nbsp;&nbsp;
            <el-tag class="ml-2" type="info">Tag 3</el-tag> &nbsp;&nbsp;
            <el-tag class="ml-2" type="warning">Tag 4</el-tag> &nbsp;&nbsp;
            <el-tag class="ml-2" type="danger">Tag 5</el-tag>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">自动提取标签</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">发布</el-button>
            <el-button>取消</el-button>
            <el-button type="danger" text>未发布</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="发布到JVue" name="2">
        JVue
      </el-collapse-item>
      <el-collapse-item title="发布到Confluence" name="3">
        Confluence
      </el-collapse-item>
      <el-collapse-item title="发布到博客园" name="4">
        博客园
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "PlantformMain",
  props: {
    modelValue: String // previously was `value: String`
  },
}
</script>

<style scoped>

</style>