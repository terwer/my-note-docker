<template>
  <el-container>
    <el-aside width="45%">
      <el-form label-width="120px">
        <el-form-item :label="$t('main.slug')">
          <el-input v-model="formData.customSlug"/>
        </el-form-item>

        <el-form-item>
          <el-checkbox-group v-model="formData.checkList">
            <el-checkbox label="1">{{ $t('main.use.google.translate') }}</el-checkbox>
          </el-checkbox-group>
          <el-button type="primary" @click="makeSlug">{{ $t('main.auto.fetch.slug') }}</el-button>
        </el-form-item>

        <el-form-item :label="$t('main.desc')">
          <el-input type="textarea"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">{{ $t('main.auto.fetch.desc') }}</el-button>
        </el-form-item>

        <el-form-item :label="$t('main.create.time')">
          <el-date-picker
              type="datetime"
              :placeholder="$t('main.create.time.placeholder')"
          />
        </el-form-item>

        <el-form-item :label="$t('main.tag')">
          <el-tag closable>Tag 1</el-tag> &nbsp;&nbsp;
          <el-tag class="ml-2" type="success">Tag 2</el-tag> &nbsp;&nbsp;
          <el-tag class="ml-2" type="info">Tag 3</el-tag> &nbsp;&nbsp;
          <el-tag class="ml-2" type="warning">Tag 4</el-tag> &nbsp;&nbsp;
          <el-tag class="ml-2" type="danger">Tag 5</el-tag>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">{{ $t('main.auto.fetch.tag') }}</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="saveAttrToSiyuan">{{ $t('main.save.attr.to.siyuan') }}</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="publishPage">{{ $t('main.publish') }}</el-button>
          <el-button>{{ $t('main.cancel') }}</el-button>
          <el-button type="danger" text>{{ $t('main.publish.status.unpublish') }}</el-button>
        </el-form-item>
      </el-form>
    </el-aside>
    <el-main>
      <el-form label-width="120px">
        <el-form-item>
          {{ $t('main.yaml.formatter') }}
        </el-form-item>
        <el-form-item>
          <el-input v-model="vuepressData.vuepressFullContent" :autosize="{ minRows: 12, maxRows: 15 }"
                    type="textarea"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="convertAttrToYAML">{{ $t('main.siyuan.to.yaml') }}</el-button>
          <el-button type="primary" @click="convertYAMLToAttr">{{ $t('main.yaml.to.siyuan') }}</el-button>
          <el-button type="primary" @click="copyToClipboard">{{ $t('main.copy') }}</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>

import {getSiyuanPageId, obj2yaml, yaml2Obj} from "@/lib/util";
import {exportMdContent, getBlockAttrs, setBlockAttrs} from "@/lib/siYuanApi";
import {PUBLISH_POSTID_KEY_CONSTANTS} from "@/lib/publish/publishUtil";
import {slugify} from 'transliteration';
import {zhSlugify} from "@/lib/util";

export default {
  name: "VuepressMain",
  data() {
    return {
      formData: {
        customSlug: "",
        checkList: []
      },
      siyuanData: {
        pageId: "",
        meta: {}
      },
      vuepressData: {
        yamlObj: {
          title: "把npm依赖转换为本地依赖",
          date: "2022-07-09 15:16:00",
          permalink: "/post/convert-npm-dependencies-to-local.html",
          meta: [
            {
              name: "keywords",
              content: "npm dependency"
            },
            {
              name: "description",
              content: "把npm依赖转换为本地依赖有的时候，当我们要使用额第三方库停止维护之后，我们想自己修改代码才能达到某个需求。但是npm默认是只读的，下次运行依赖管理会覆盖代码。缘由要在上面陈述的情况，我们可以把npm依赖库转换为本地依赖，这样就不再受包管理器约束，我们就可以自定义修改代码了方案先删除npm中依赖yarnremove@oaktreehouse/vuepresspluginencrypt森岛帆高"
            }
          ],
          categories: [
            "博文", "实用技巧"
          ],
          tags: [
            "npm", "dependency"
          ],
          author: {
            name: "terwer",
            link: "https://github.com/terwer"
          }
        },
        formatter: "",
        vuepressContent: "",
        vuepressFullContent: ""
      }
    }
  },
  async created() {
    await this.initPage();
  },
  async mounted() {
  },
  methods: {
    async initPage() {
      const pageId = await getSiyuanPageId(false);

      // 思源笔记数据
      this.siyuanData.pageId = pageId;
      this.siyuanData.meta = await getBlockAttrs(pageId)

      // 表单数据
      this.formData.customSlug = this.siyuanData.meta["custom-slug"];

      // 表单属性转换为HTML
      this.convertAttrToYAML()

      console.log("VuepressMain初始化页面,meta=>", this.siyuanData.meta);
    },
    async makeSlug() {
      // 获取最新属性
      this.siyuanData.meta = await getBlockAttrs(this.siyuanData.pageId)
      // 获取标题
      const title = this.siyuanData.meta.title;
      if (this.formData.checkList.length > 0) {
        // 调用Google翻译API
        const result = await zhSlugify(title);
        console.log("result=>", result)
        if (result) {
          this.formData.customSlug = result
        } else {
          alert(this.$t('main.opt.failure'))
        }
      } else {
        this.formData.customSlug = slugify(title);
      }
    },
    async saveAttrToSiyuan() {
      const customAttr = {
        "custom-slug": this.formData.customSlug,
        [PUBLISH_POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY]: this.formData.customSlug,
      };
      await setBlockAttrs(this.siyuanData.pageId, customAttr)
      console.log("VuepressMain保存属性到思源笔记,meta=>", customAttr);

      // 刷新属性数据
      await this.initPage();

      alert(this.$t('main.opt.success'))
    },
    convertAttrToYAML() {
      console.log("convertAttrToYAML")
      // 表单属性转yamlObj
      console.log("convertAttrToYAML,formData=>", this.formData)
      // TODO

      // formatter
      this.vuepressData.formatter = obj2yaml(this.vuepressData.yamlObj);
      this.vuepressData.vuepressFullContent = this.vuepressData.formatter;
    },
    async convertYAMLToAttr() {
      console.log("convertYAMLToAttr")
      this.vuepressData.yamlObj = yaml2Obj(this.vuepressData.formatter)

      // yamlObj转表单属性
      console.log("convertYAMLToAttr,yamlObj=>", this.vuepressData.yamlObj)
      // TODO

    },
    copyToClipboard() {
      console.log("copyToClipboard")
    },
    async publishPage() {
      const data = await exportMdContent(this.siyuanData.pageId);
      this.vuepressData.vuepressContent = data.content;
      this.vuepressData.vuepressFullContent = this.vuepressData.formatter + "\n" + this.vuepressData.vuepressContent;

      alert(this.$t('main.opt.success'))
    }
  }
}
</script>

<style scoped>
</style>