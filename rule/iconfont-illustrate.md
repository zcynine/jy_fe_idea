# iconfont 使用说明

### 什么是iconfont?

以前在做项目的时候经常使用到图片资源，哪怕是一个勾或者叉都要加载图片，最早是一张一张加载，后来有了雪碧图，但是这仍然会使得浏览器在加载前端代码时消耗时间去加载图片。随着社会的进步，就有了如今的iconfont，简单来说，就是用文字代替图片，减少图片资源请求，增加加载速度。现在，当你要使用一些简单的图标时，请使用iconfont。

### iconfont好在哪里？

- 兼容性好

- 资源占用小，加载速度比图片快

- 只需要更改文字颜色就可以更改图标颜色，无需多种颜色的图片

### 如何使用iconfont？

- iconfont和css关系十分紧密，在使用iconfont是我们先要使用 `@font-face` 定义一个字体（注：此处使用在线的字体，也可以下载到本地引用）

	```
	@font-face {
	    font-family: 'ifont';
	    src: url('//at.alicdn.com/t/font_430301_89c468mvutur3sor.eot');
	    src: url('//at.alicdn.com/t/font_430301_89c468mvutur3sor.eot?#iefix') format('embedded-opentype'),
	    url('//at.alicdn.com/t/font_430301_89c468mvutur3sor.woff') format('woff'),
	    url('//at.alicdn.com/t/font_430301_89c468mvutur3sor.ttf') format('truetype'),
	    url('//at.alicdn.com/t/font_430301_89c468mvutur3sor.svg#iconfont') format('svg');
	}
	```

- 然后定义一个字体类

	```
	.test_icon_font {
	    font-family: "ifont" !important;
	}
	```

- 最后可以通过 `class的方式` 或 `转义字符的方式` 来生效

	```
	/* class的方式 */
	.icon-fenxiang:before {
	    content: "\e600";
	}
	
	<span class="test_icon_font icon-fenxiang"></span>
	
	/* 转义字符的方式 */
	<span class="test_icon_font">&#xe627;</span>
	```

### 阿里iconfont

在 [阿里 icon-fonts](http://www.iconfont.cn/) 里新建一个项目，到 `官方素材库` 或者 `第三方素材库` 中把想要的素材添加到自己的项目中，项目会自动生成在线代码，也可以将资源下载到本地使用。建议使用在线资源，更改灵活。

