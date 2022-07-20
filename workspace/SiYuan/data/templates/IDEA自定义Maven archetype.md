> 2022/03/14 验证通过
> {: id="20220626001517-kyelqdv"}
>
> 文章更新历史
> {: id="20220626001517-9s1in4p"}
>
> 2022/03/03 初稿。
> {: id="20220626001517-ahm26fo"}
>
> 2022/04/21 兼容 IDEA2022.1。提供使用的新方法。
> {: id="20220626001517-gklam6t"}
{: id="20220626001517-kimag9g"}

在创建 Maven 的项目时我们发现了一个很不方便的问题，就是每次创建 Maven 的工程的时候，都需要选择一个骨架，但是每个骨架都需要删除一部分东西才行，这样的话实在是太不方便了。
{: id="20220626001517-zjs3zrn"}

## 为什么要自定义 archetype
{: id="20220626001517-8xk7274"}

在创建 Maven 的项目时我们发现了一个很不方便的问题，就是每次创建 Maven 的工程的时候，都需要选择一个骨架，但是每个骨架都需要删除一部分东西才行，在平时开发中，如果是分布式项目，有可能会频繁创建子项目，每次都要删除不要的文件然后拷贝我们要的文件，例如弹簧配置，web.xml 中配置等。这样做不仅会浪费大量时间，拷贝和删除文件也容易导致错误的发生，比如漏拷某文件。
{: id="20220626001517-3jf6mdf"}

## Archetype maven 项目的组成
{: id="20220626001517-50njxfw"}

一个典型的 Archetype Maven 项目主要包括如下几个部分：
{: id="20220626001517-fnhq5tm"}

* {: id="20220626001517-fhldj2f"}pom.xml：Archetype 自身的 POM。
  {: id="20220626001517-i0dzqy7"}
* {: id="20220626001517-32mkipn"}src/main/resources/archetype-resources/pom.xml：基于该 Archetype 生成项目的 POM 原型。
  {: id="20220626001517-q781fj3"}
* {: id="20220626001517-zrppzhj"}src/main/resources/META-INF/maven/archetype-metadata.xml：Archetype 的描述符文件。
  {: id="20220626001517-f0kikw6"}
* {: id="20220626001517-xklgkla"}src/main/resources/archetype-resources/**：其他需要包含在 Archetype 中的内容。
  {: id="20220626001517-wb5ecjw"}
{: id="20220626001517-lein9mu"}

## 创建自己的骨架结构
{: id="20220626001517-3fe5ztt"}

要创建 Maven 的模板，首先你要创建一个 Maven 的项目，然后再以这个项目作为模板。
{: id="20220626001517-e6eyeil"}

### 创建 maven 工程
{: id="20220626001517-oi2v3df"}

首先创建一个 Maven 的工程，名字叫 maven-template-java-simple
{: id="20220626001517-z9x32s5"}

选择骨架
{: id="20220626001517-2drmlio"}

<div>
<img src="https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105651.jpeg" style="zoom:50%;" />
</div>
{: id="20220626001517-zomsy3n"}

### 骨架创建
{: id="20220626001517-8af6v1w"}

在 maven-template-java-simple 根目录执行
{: id="20220626001517-81qk1zp"}

```
mvn archetype:create-from-project
```
{: id="20220626001517-o0uvndu"}

报错解决
{: id="20220626001517-jf99dnd"}

```
mvn archetype:create-from-project报错The specified user settings file does not exist
```
{: id="20220626001517-renvz5l"}

[https://www.cnblogs.com/chmod/p/15489910.html](https://www.cnblogs.com/chmod/p/15489910.html)
{: id="20220626001517-ia0g78n"}

执行完毕之后，会出现一个编译之后新的 maven 工程（target 文件夹），如下图:
{: id="20220626001517-g3e8day"}

<div>
<img src="https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105712.jpeg" style="zoom:50%;" />
</div>
{: id="20220626001517-wtc96kd"}

### 骨架安装
{: id="20220626001517-dsq0jfy"}

安装对应骨架项目
{: id="20220626001517-t40mn7f"}

先进入骨架项目的 pom 文件目录：
{: id="20220626001517-e5ytodk"}

```
cd target/generated-sources/archetype
```
{: id="20220626001517-1n7j8rk"}

执行安装：
{: id="20220626001517-t2ohlpw"}

```
mvn clean install
```
{: id="20220626001517-8a15kxd"}

我们的骨架项目坐标如下：
{: id="20220626001517-djhyiyz"}

```xml
<groupId>com.terwergreen</groupId>
<artifactId>maven-template-java-simple-archetype</artifactId>
<version>1.0.0</version>
<packaging>maven-archetype</packaging>
```
{: id="20220626001517-6clii84"}

至此，骨架项目安装成功。
{: id="20220626001517-z5hidqq"}

## 使用自己创建的自定义骨架
{: id="20220626001517-a4524t4"}

创建新的 Maven 工程，选择自定义骨架
{: id="20220626001517-xrfzg01"}

### 添加骨架
{: id="20220626001517-y0h4lkz"}

创建新的 maven 工程，选择 Add Archetype,填写刚才添加的骨架工程坐标,点击 OK，这是会生成一个新的骨架选项。
{: id="20220626001517-s191zr6"}

```
groupId com.terwergreen
artifactId maven-template-java-simple-archetype
version 1.0.0
```
{: id="20220626001517-vz3bfbw"}

<div>
<img src="https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105749.jpeg" style="zoom:50%;" />
</div>
{: id="20220626001517-9p8fz4c"}

{: id="20220626001517-9p8fz4c"}

选中新创建的骨架，点击下一步创建新的 Maven 的项目如下，这是新建的测试项目：
{: id="20220626001517-8xxf2fr"}

<div>
<img src="https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105803.jpeg" style="zoom:50%;" />
</div>
{: id="20220626001517-2zqgjg9"}

{: id="20220626001517-2zqgjg9"}

<div>
<img src="https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105811.jpeg" style="zoom:50%;" />
</div>
{: id="20220626001517-4k6y9h7"}

{: id="20220626001517-4k6y9h7"}

<div>
<img src="https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105835.jpeg" style="zoom:50%;" />
</div>
{: id="20220626001517-mhr6yt3"}

{: id="20220626001517-mhr6yt3"}

<div>
<img src="https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105849.jpeg" style="zoom:50%;" />
</div>
{: id="20220626001517-83mhpo0"}

{: id="20220626001517-83mhpo0"}

以后再创建类似的 Maven 的项目时，就可以快速新建的 Maven 项目而不用改来改去了。是不是很方便呢？
{: id="20220626001517-umr6gp0"}

PS:删除自定义 archetype
{: id="20220626001517-r67mk0g"}

```
cd /Users/terwer/Library/Caches/JetBrains/IntelliJIdea2021.3/Maven/Indices
```
{: id="20220626001517-5iq1wip"}

然后编辑 `UserArchetypes.xml` 文件即可。注意：修改文件之后需要重启 IDEA。
{: id="20220626001517-zg671jy"}

**手动添加的方法：**
{: id="20220626001517-3lcks9y"}

## 解决添加失效问题（IDEA2022.1 以下版本有效，不包括 IDEA2022.1）
{: id="20220626001517-ezvo23e"}

```bash
cd ~/Library/Caches/JetBrains
```
{: id="20220626001517-p9mdop1"}

找到对应版本目录，例如
{: id="20220626001517-ft0yyic"}

```bash
cd /Users/terwer/Library/Caches/JetBrains/IntelliJIdea2021.3/Maven/Indices
```
{: id="20220626001517-7e75g87"}

然后新建一个 `UserArchetypes.xml` 文件，内容如下：
{: id="20220626001517-ccuz753"}

```xml
<archetypes>
    <archetype groupId="com.terwergreen" artifactId="maven-template-java-simple-archetype" version="1.0.3" />
</archetypes>
```
{: id="20220626001517-ly2xzwe"}

重启 IDEA 就可以了。
{: id="20220626001517-6bqepss"}

## IDEA 2022.1 的变化
{: id="20220626001517-oeuejkp"}

IDEA2022 在 `Add` 完成之后，下次新建需要切换 Catalog 到 `Default Local`，然后才能在 `Archetype` 中选择到。
{: id="20220626001517-538z2ew"}

![image-20220421135052088](https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220421135052088.png)
{: id="20220626001517-fh9zjzj"}
