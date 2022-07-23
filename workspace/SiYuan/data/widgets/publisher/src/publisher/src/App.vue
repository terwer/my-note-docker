<template>
  <Publish/>
</template>

<script>
import Publish from '@/components/PublishService'

import {getPage} from "@/lib/siyuanUtil";

export default {
  name: 'App',
  components: {
    Publish
  },
  async mounted() {
    const page = await getPage();
    if (page) {
      localStorage.siyuanPage = page;
      console.log("设置当前思源页面信息", page)
    }
  }
}
</script>

<style>
#app {
  font-family: "-apple-system", "Wenquanyi Micro Hei", "Wenquanyi Micro Hei Mono", "Microsoft YaHei", "LXGW WenKai", "PT Sans", "Liberation Mono", monospace, dejavu sans mono, Fira Code, Microsoft Yahei, Consolas, Courier New, monospace, Menlo, Monaco !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
