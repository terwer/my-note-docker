# Daily Views
## 以日历的形式显示你之前创建过的日记。

> 推荐使用默认格式的日记存储形式；
> 如果觉得好用，还希望各位可以在github上多多关注～

## 功能
* 显示对应笔记下的日记和相关信息。
* 按时间检索并显示当天的部分非日记类笔记。

## 正确食用？
* 在文档中插入挂件，并在设置中设定好需要显示哪一个笔记本下的日记，完工～
  * 虽然说不选择笔记会检索全局的日记，也可以正常显示，但是是无法触发日记事件显示。
* Emoji: emoji为日记的icon，你可以通过设置icon来表达当天的心情、相关事件或者是天气。
* 显示标题：为第一个h1标题，由于日历显示宽度的问题，过长的名字显示并不好看，尽量限制在6字以内。
* 小标签：可显示三个h2标题，同上会有显示宽度的限制，一般用来简单概括一些事情，或者用于索引。
* 弹出窗口：弹出窗口会显示当天的日记标题的全称和4个tag，并且在右下角会显示日记的字数。
* 日记事件：相邻日记如果标题相同会判定为一个事件，事件标题可以显示一些长标题哦。
* 笔记模式：在设置菜单中切换到笔记模式可以显示当天创建的前两个笔记
  * (目前该功能并不完善)。
* 颜色标记: 蓝色表示普通日记，该日记不包含标签；绿色表示含有标签的日记；红色表示事件日记。

## 预览
#### 明亮主题
![preview](https://raw.githubusercontent.com/fatevase/SiYuanDailyViews/main/preview.png)
#### 黑夜主题
![preview](https://raw.githubusercontent.com/fatevase/SiYuanDailyViews/main/preview-dark.png)
#### 笔记模式
![preview](https://raw.githubusercontent.com/fatevase/SiYuanDailyViews/main/preview-notemode.jpg)

## 更新记录

### v0.2.0
* 支持显示日记的Emoji:)
* 支持显示当前日记总字数

#### v0.1.1~v0.1.9
* 优化日记标题存在多个tag的显示内容
* 改进笔记模式显示
* 优化笔记弹出显示，尝试显示2个h2标题和2个tag标签
* 优化日记事件显示，现在同一事件标题会被拆成两半
* 显示笔记模式检索当天的最后两个创建的笔记
* 显示笔记模式尝试尽可能排除日记
  * (已知问题，由于没法识别是否为根节点笔记，导致检索到的笔记可能并不是自己想要的)
* 添加按钮更换渲染模式(检索该日期内任意笔记或是日记)
* 优化渲染当天笔记显示
* 优化刷新界面时检索笔记或者日记的次数
* 在没有日记本的前提下按时间检索当天第一个笔记
* 修复点击菜单总跳转到顶部问题
* 根据思源语言调整日历语言
* 优化标签和弹出内容显示

### v0.1.0
* 修复新建或更名笔记本后选择菜单没有更新的问题
* 改进特殊日记显示UI
* 优化弹出窗口的显示内容

#### v0.0.1-0.0.9
* 标记特殊日记，相邻日记标题相同视为同一事件
* 移除手动切换主题按钮，点击刷新同时会刷新主题
  * 有时候切换主题并没有刷新挂件需要手动刷新一下
* 优化内容显示
* 丰富每日显示内容，现在主要显示h1内容，副显示3个h2内容，弹出框显示tag标签。
  * 标题尽量不要超过6个字符
* 优化显示问题
* 改进数据存储
  * (存储在组件的attrs中,目前有bug，偶尔会找不到之前存的数据，但是一直没定位到bug在哪...)
* 修复linux点击无法跳转问题(感谢leolee9086)
* 优化黑夜模式UI显示
* 跟随主题调整插件颜色
* 引入新的菜单（应该还好）
* 优化检索标签的方法
* 改进查找日记的格式，现在可以是：年[字符]月[字符]日
* 修复点击闪烁问题
