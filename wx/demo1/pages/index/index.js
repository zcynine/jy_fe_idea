//index.js
//获取应用实例
Page({
	data: {
		src: '../../image/list1.jpg',

		indicatorDots: true,//指示点
		autoplay: false,//是否自动切换
		interval: 5000,//切换时间间隔
		duration: 1000,//滑动动画时长

		list01: [
			{
				id: 'line',
				name: '亮点',
				open: true,
				imgurl: '../../image/icon1-h.png'
			},
			{
				id: 'use',
				name: '使用',
				open: false,
				imgurl: '../../image/icon2-h.png'
			},
			{
				id: 'maintain',
				name: '保养',
				open: false,
				imgurl: '../../image/icon3-h.png'
			},
			{
				id: 'answer',
				name: '答疑',
				open: false,
				imgurl: '../../image/icon4-h.png'
			},
			{
				id: 'aftersale',
				name: '售后',
				open: false,
				imgurl: '../../image/icon5-h.png'
			}
		],
		list02: [
			{
				id: '01',
				title: '93℃恒温3分钟',
				cont: '最大限度激发香味',
				position: 'right',
				imgfloat: '0',
				imgurl: '../../image/light1.jpg'
			},
			{
				id: '02',
				title: '精煮曲线',
				cont: '媲美日本最贵饭煲',
				position: 'left',
				imgfloat: '1',
				imgurl: '../../image/light2.jpg'
			},
			{
				id: '03',
				title: '135℃强加热',
				cont: '上盖基本吴冷凝水',
				position: 'right',
				imgfloat: '0',
				imgurl: '../../image/light3.jpg'
			},
			{
				id: '04',
				title: '零划痕',
				cont: '钢化玻璃面板',
				position: 'left',
				imgfloat: '1',
				imgurl: '../../image/light4.jpg'
			}
		],
		list03: [
			{
				id: 'cooking',
				name: '烹饪准备',
				open: true,
				imgurl: [
					'../../image/prepare1.jpg',
					'../../image/prepare2.jpg',
					'../../image/prepare3.jpg'
				],
			},
			{
				id: 'fast',
				name: '快速入门',
				open: false,
				imgurl: [
					'../../image/fast1.jpg',
					'../../image/fast2.jpg',
					'../../image/fast3.jpg'
				],
			},
			{
				id: 'use',
				name: '使用说明',
				open: false,
				imgurl: [
					'../../image/explain1.jpg',
					'../../image/explain2.jpg',
					'../../image/explain3.jpg'
				],
			}
		],
		imgclear: [
			'../../image/clean1.jpg',
			'../../image/clean2.jpg',
			'../../image/clean3.jpg'
		],
		list04:[

			{
				id:'1',
				name:'E0',
				open:false,
				problem:'内部电路出现故障，无法正常工作',
				answer:'拔电后重新上电，仍出现请送九阳售后服务部维修。'
			},
			{
				id: '2',
				name: 'E1',
				open: false,
				problem: '电磁炉在工作状态时检测到无锅具、锅具材质或尺寸不合适',
				answer: '用户自行放入合适的内胆后按下“保温/取消”后解除报警，若仍出现E1报警，请送九阳售后服务部维修。'
			},
			{
				id: '3',
				name: 'E2',
				open: false,
				problem: 'IGBT温度传感器过热或IGBT短、开路',
				answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
			},
			{
				id: '4',
				name: 'E3',
				open: false,
				problem: '电网电压过高',
				answer: '电网电压恢复正常后可自行恢复。若仍出现报警，请送九阳售后服务部维修。'
			},
			{
				id: '5',
				name: 'E4',
				open: false,
				problem: '电网电压过低',
				answer: '电网电压恢复正常后可自行恢复。若仍出现报警，请送九阳售后服务部维修。'
			},
			{
				id: '6',
				name: 'E5',
				open: false,
				problem: '顶部温度传感器出现开路故障',
				answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
			},
			{
				id: '7',
				name: 'E6',
				open: false,
				problem: '顶部温度传感器出现短路故障',
				answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
			},
			{
				id: '8',
				name: 'E7',
				open: false,
				problem: '底部温度传感器温度过高或出现短/开路故障',
				answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
			},
			{
				id: '9',
				name: 'E8',
				open: false,
				problem: '通信故障',
				answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
			}
		],

	},
	kindToggle: function (e) {
    console.log('aswsdd');
		var id = e.currentTarget.id, list = this.data.list01;
		for (var i = 0, len = list.length; i < len; ++i) {
			if (list[i].id == id) {
				list[i].open = true;
			} else {
				list[i].open = false;
			}
		}
		this.setData({
			list01: list
		});
	},
	changSwiper: function (e) {
		var id = e.currentTarget.id, list = this.data.list03;
		for (var i = 0, len = list.length; i < len; ++i) {
			if (list[i].id == id) {
				list[i].open = true;
			} else {
				list[i].open = false;
			}
		}
		this.setData({
			list03: list
		});
	},
	viewAnswer:function(e){
		var id = e.currentTarget.id, list = this.data.list04;
		for (var i = 0, len = list.length; i < len; ++i) {
			if (list[i].id == id) {
				list[i].open = !list[i].open;					
			} 
		}
		this.setData({
			list04: list
		});
	},
	onPageScroll:function(){
		var res = wx.getSystemInfoSync();
		var oHeight = res.windowHeight;//可使用窗口高度

	}

})
