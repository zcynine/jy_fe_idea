/*
* @Author: zhangling
* @Date:   2017-07-12 14:43:33
* @Last Modified by:   zhangling
* @Last Modified time: 2017-07-14 13:42:46
*/


(function(){
'use strict';

new Vue({
	el: '#add-book',
	data: {
		message: 'hello vue.js',
		message1: 'hwwwwwww',
		message2: 'sssss',
		// selected: 'fffff'
		book:{
			id:0,
			author:'',
			name:'',
			price:''
		},
		books:[{
			id:1,
			author:'曹雪芹',
			name:'红楼梦',
			price:'32.0'
		},
		{
			id:2,
			author:'施耐庵',
			name:'水浒传',
			price:'30.0'
		},
		{
			id:3,
			author:'罗贯中',
			name:'大话西游',
			price:'22.1'
		},
		{
			id:4,
			author:'阿道夫',
			name:'士大夫似的',
			price:'15.1'
		}]
	},
	methods:{
		clickkk:function(){
			console.log('abdcefg22222')
		},
		addBook:function(){
			this.book.id = this.books.length+1;
			this.books.push(this.book);
			this.book = '';
		}
	}
});





})();