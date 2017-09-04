# ESLint 配置
[中文官网](http://eslint.cn/)

#### 简介

* ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。在许多方面，它和 JSLint、JSHint 相似。

#### 安装

* 前提：node环境已经配置好，最好已经切换到国内淘宝镜像。在node命令行窗口内执行安装命令，建议全局安装

	```
	npm install -g eslint
	```

    note: ESLint 支持几种格式的配置文件，如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：
    
    - JavaScript - 使用 .eslintrc.js 然后输出一个配置对象。
    
    - YAML - 使用 .eslintrc.yaml 或 .eslintrc.yml 去定义配置的结构。

    - JSON -使用 .eslintrc.json 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。

    - Deprecated -使用 .eslintrc，可以使 JSON 也可以是 YAML。

    - package.json - 在 package.json 里创建一个 eslintConfig属性，在那里定义你的配置。

* 以及相关插件

	```
	npm install -g eslint-plugin-standard
	npm install -g eslint-config-standard
	npm install -g eslint-plugin-promise
	npm install -g eslint-config-standard
	```


#### 初始化

* 如果项目还没有配置文件 `.eslintrc` 的话，可以通过指定 `--init` 参数生成新的配置文件。运行后会在当前目录下生成一个 `.eslintrc` 文件，所有的检查规则即在该文件中进行配置。

	```
	eslint --init
	```

#### 配置

* 基本配置如下(.eslintrc.js)

    ```
    // http://eslint.org/docs/user-guide/configuring
	module.exports = {
		root: true,
		parser: 'babel-eslint',
		parserOptions: {
			sourceType: 'module'
		},
		env: {
			browser: true,
		},
		// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
		extends: 'standard',
		// required to lint *.vue files
		plugins: [
			'html'
		],
		// add your custom rules here
		'rules': {
			// allow paren-less arrow functions
			'arrow-parens': 0,
			// allow async-await
			'generator-star-spacing': 0,
			// allow debugger during development
			'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
		}
	}
    ```

	note:
	
	- 解析器(parser)：使用了babel-eslint，这个可以在package.json中找到，说明我们已经安装过该解析器了。

	- 环境配置(env)：在浏览器中使用eslint。

	- 继承(extends)：该配置文件继承了standard规则，具体规则自己看文档。

	- 规则(rules)：具体校验规则

	此外，在rules中每个配置项后面第一个值是eslint规则的错误等级，第二个值是处理方式：

	- “off” 或 0 - 关闭这条规则

	- “warn” 或 1 - 违反规则会警告（不会影响项目运行）

	- “error” 或 2 - 违反规则会报错（屏幕上一堆错误代码~）

有些规则还带有可选的参数，比如：

`comma-dangle` 可以写成

```
[ "error", "always-multiline" ]
```

`no-multi-spaces`可以写成

```
["error", {
	exceptions: {
		"ImportDeclaration": true
	}
}]
```

#### 使用

* 在node命令行窗口内进入到要检测的js文件所在目录，执行以下命令

	```
	eslint xxx.js
	```

* 如果检测到js文件有不符合规则之处，可以自动修复

	```
	eslint xxx.js --fix
	```

#### 例外情况

* ESLint提供了多种临时禁用规则的方式，比如我们可以通过一条eslint-disable-next-line备注来使得下一行可以跳过检查：

	```
	// eslint-disable-next-line
	var a = 123;
	var b = 456;
	```

	在上面的示例代码中，`var a = 123` 不会受到检查，而 `var b = 456` 则又恢复检查。

	我们还可以通过成对的 `eslint-enable` 和 `eslint-disable` 备注来禁用对某一段代码的检查，但是稍不小心少写了一个eslint-disable就可能会导致后面所有文件的检查都被禁用，所以并不推荐使用。

#### 使用共享的配置文件

* 为了更好的统一管理不同的项目，我们需要一个公共的规则

	- step1: 我们可以将定义好规则的.eslintrc.js文件存储到一个公共的位置，比如public-eslintrc.js：
	
		```
		module.exports = {
			extends: 'eslint:recommended',
			env: {
				node: true,
			},
			rules: {
				'no-console': 'off',
				'indent': ['error', 2],
				'quotes': ['error', 'single'],
			},
		};
		```

	- step2：将原来的.eslintrc.js文件改成这样：

		```
		module.exports = {
			extends: './public-eslintrc.js',
		};
		```

## sublime ESLint插件

sublime集成ESlint需要安装两个插件 `SublimeLinter`、`SublimeLinter-contrib-eslint` 才能正常使用。

修改SublimeLinter的用户配置文件：

```
{
	"user": {
		"debug": false,
		"delay": 0.25,
		"error_color": "D02000",
		//SublimeLinter与插件文件夹名保持一致
		"gutter_theme": "Packages/SublimeLinter/gutter-themes/Default/Default.gutter-theme",
		"gutter_theme_excludes": [],
		"lint_mode": "background",
		"linters": {
			//新增的
			"eslint": {
				"@disable": false,
				"args": [],
				"excludes": []
			}
		},
		"mark_style": "outline",
		"no_column_highlights_line": false,
		"passive_warnings": false,
		"paths": {
			"linux": [],
			"osx": [],
			"windows": [
				//全局安装ESLint生成的eslint.cmd的目录，根据自身情况修改
				"**/nodejs/eslint.cmd"
			]
		},
		"python_paths": {
			"linux": [],
			"osx": [],
			"windows": []
		},
		"rc_search_limit": 3,
		"shell_timeout": 10,
		"show_errors_on_save": false,
		"show_marks_in_minimap": true,
		"syntax_map": {
			"html (django)": "html",
			"html (rails)": "html",
			"html 5": "html",
			"javascript (babel)": "javascript",
			"magicpython": "python",
			"php": "html",
			"python django": "python"
		},
		"warning_color": "DDB700",
		"wrap_find": true
	}
}
```
	

