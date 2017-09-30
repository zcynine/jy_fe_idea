## Vue 入门


注：Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。
Vue.js 支持所有兼容 ECMAScript 5 的浏览器。

#### 基础

一、引用方式：

1. CDN: 直接通过`<script>`标签引入

```
<script src="https://unpkg.com/vue"></script>
```

2. NPM: 在用 Vue.js 构建大型应用时推荐使用 NPM 安装，NPM 能很好地和诸如 Webpack 或 Browserify 模块打包器配合使用。Vue.js 也提供配套工具来开发单文件组件。

```
$ npm install vue
```

命令行工具CLI

Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：

```
#全局安装 vue-cli
$ npm install --global vue-cli

# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project

# 安装依赖
$ cd my-project
$ npm install
$ npm run dev
```

二、基本语法

1. 模板语法
	* 文本插值（Mustache语法）
	
	```
    <span>Message: {{ msg }}</span>
    ```
    
	* HTML
	
	```
    <span v-html="testMsg"></span>
    ```
    
	* 属性绑定
	
	```
    <div v-on:id="cust_id"></span>
    <button v-bind:disabled="isDisabled"></button>
    ```

2. 指令

指令 (Directives) 是带有 v- 前缀的特殊属性，它的值预期是**单个 JavaScript 表达式**， 它的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

```
<p v-if="seen">现在你看到我了</p>
```

这里的`v-if`指令将根据表达式`seen`的值的真假来插入/移除`<p>`元素。

3. 参数

`v-bind` 指令可以通过接收参数的形式用于响应式地更新 HTML 属性
```
<a v-bind:href="url"></a>
<a v-on:click="doSomething">
```

在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。
v-on用于监听DOM事件，click为参数，也即事件名称

4. 修饰符

修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用`event.preventDefault()`：

```
<form v-on:submit.prevent="onSubmit"></form>
```


三、计算属性

```
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>


var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
	//a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})


```


四、Class与Style绑定

`v-on`指令的使用...


五、条件渲染

`v-if`
`v-else`
`v-else-if`

六、 列表渲染

`v-for`

七、事件处理

`v-on`

八、 表单输入绑定

`v-model`

九、 组件（component）

要注册一个全局组件，你可以使用 Vue.component(tagName, options)

```
Vue.component('my-component', {
  // 选项
})
```

#### 进阶

* 自定义指令

* 打包工具(webpackage)

* 单文件组件(.vue文件)

* 单元测试

* 路由（vue-router）

* 状态管理


## 基于vue-cli + webpackage构建大型单页面应用

1. 通过官方命令行工具构建

```
    # 全局安装 vue-cli
    $ cnpm install --global vue-cli
    # 创建一个基于 webpack 模板的新项目
    $ vue init webpack my-project
    # 这里需要进行一些配置，默认回车即可
    This will install Vue 2.x version of the template.
    For Vue 1.x use: vue init webpack#1.0 my-project

    ? Project name my-project
    ? Project description A Vue.js project
    ? Author runoob <test@runoob.com>
    ? Vue build standalone
    ? Use ESLint to lint your code? Yes
    ? Pick an ESLint preset Standard
    ? Setup unit tests with Karma + Mocha? Yes
    ? Setup e2e tests with Nightwatch? Yes

       vue-cli · Generated "my-project".

       To get started:

         cd my-project
         npm install
         npm run dev
```

2. 项目目录结构

```
    |----▼ my-projet 		  // 根目录
    |------▶ build			// 最终发布的代码存放位置
    |------▶ config		   // 配置目录，包括端口号等
    |------▶ node_modules	 // npm加载的项目依赖模块
    |------▼ src			  // 这里是要开发的目录
       |------▶ assetts		  // 放置一些图片如logo
       |------▶ components	   // 组件目录，存放各种组件
       |------  app.vue		   // 项目入口文件
       |------  main.js		   // 项目核心文件
    |------▶ static		   // 静态资源目录，如图片字体等
    |------▶ test		     // 初始测试目录
    |------ .babelrc		   // 转换ES6语法的配置文件
    |------ .editorconfig      // 编辑器的配置文件
    |------ .eslintignore      // 忽略eslint语法检查文件的目录配置
    |------ .eslintrc.js       // eslint的语法检查规则配置文件
    |------ .gitignore         // 上传项目代码到git时忽略的目录配置
    |------ .index.html        // 项目的入口文件
    |------ .package.json      // 存储项目的基本配置信息和依赖
    |------ .README.md
```






