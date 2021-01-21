<template>
	<div id="div1">
		<!-- 搜索框 -->
		<uni-search-bar placeholder="搜索服务、门店等关键词" :radius="100" @confirm="search" clearButton="auto" cancelButton="none" :value="msg1"></uni-search-bar>
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="indicatorDots"  circular="true"  :autoplay="autoplay" :interval="interval" :duration="duration">
		      <swiper-item  v-for="(item ,index) in info" :key="index"  @click="change(index)">
		           <view class="swiper-item uni-bg-red">
					 <image :src="item.src" mode=""></image>
				   </view>
		      </swiper-item>
		</swiper>
		 <!-- 小图标 -->             
		<view class="litteCon">
			<view class="litteCon1">
				<view class="littleConDetail">
					<image mode=""></image>
					<p>内外洗车</p>
				</view>
				<view class="littleConDetail detail2">
					<image mode=""></image>
					<p>大小保养</p>
				</view>
				<view class="littleConDetail detail3">
					<image mode=""></image>
					<p>美容打蜡</p>
				</view>
				<view class="littleConDetail detail4">
					<image mode=""></image>
					<p>钣金修复</p>
				</view>
				<view class="littleConDetail detail5">
					<image mode="">修换电瓶</image>
					<p></p>
				</view>
				<view class="littleConDetail detail6">
					<image mode=""></image>
					<p>空调清洗</p>
				</view>
				<view class="littleConDetail detail7">
					<image mode=""></image>
					<p>车辆封釉</p>
				</view>
				<view class="littleConDetail detail8">
					<image mode=""></image>
					<p>镀晶贴膜</p>
				</view>
			</view>
		</view>	
		<!-- 头条 -->
		<view class="newTitle">
			<!-- 小圆点 -->
			<span class="little-dot"></span>
			<!-- 上下轮播 -->
			<swiper class="swiper new-swiper"  circular="true"  vertical="true" :autoplay="autoplay" :interval="interval" :duration="duration">
			      <swiper-item  v-for="(item ,index) in info1" :key="index"  @click="change1(index)">
			           <view class="swiper-item uni-bg-red">
						   <!-- 热议 -->
						   <image src="../../static/images-index/hotNew1.png" mode=""></image>
							<text class="new-swiper1">{{info1[index].con}}</text>
					   </view>
			      </swiper-item>
			</swiper>
		</view>
		<!-- 新用户免费洗车 -->
		<view class="newUser">
			<image src="../../static/images-index/newUser.png" mode=""></image>
		</view>
		<!-- 汽车贴膜 -->
		<view class="autoFilm">
			<view class="autoFilm1">
				<text class="autoText">汽车贴膜</text>
				<image src="../../static/images-index/autoFilm1.jpg" mode=""></image>
			</view>
			<view class="autoFilm1">
				<text class="autoText">四轮定位</text>
				<image src="../../static/images-index/autoFilm2.jpg" mode=""></image>
			</view>
			<view class="autoFilm1">
				<text class="autoText">车辆保养</text>
				<image src="../../static/images-index/autoFilm3.jpg" mode=""></image>
			</view>
		</view>
		<!-- 动画 -->
		<!-- <view :animation="animationData" style="background:red;height:100rpx;width:100rpx" @bindtap="rotateAndScaleThenTranslate"></view> -->
		<!-- 视频推荐 -->
		<view class="videoRecommend">
			<!-- 视频推荐文字 -->
			<view class="videoText">
				<view class="videoLeft">
					<div class="videoShu"></div>
					<text class="videoText1">视频推荐</text>
				</view>
				<!-- 三个小圆点 -->
				<uni-icons type="more-filled" size="30" class="morefilled"></uni-icons>
			</view>
			 <!-- 小视频 -->
			 <view class="videoPlay">
				<!-- 视频轮播图 -->
				<swiper class="swiper1" :autoplay="autoplay" circular="true" :interval="3000" :duration="duration">
				      <swiper-item  v-for="(item ,index) in info2" :key="index"  @click="change(index)">
				           <view class="swiper-item uni-bg-red">
							  <image :src="item.videoSrc" mode=""></image>
							  <text class="videoText1">{{item.videoText}}</text>
						   </view>
				      </swiper-item>
				</swiper>
			</view>	
		</view>	
		<!-- 商家推荐 -->
		<view class="mechantRecommend">
			<!-- 商家推荐文字 -->
			<view class="mechantWord">
				<view class="mechantShu"></view>
				<text class="mechantText">商家推荐</text>
			</view>
			<!-- 小列表 -->
			<view class="autoBeautiful" :key="index" v-for="(item,index) in list1">
				<image class="autoImg" :src="item.src" mode=""></image>
				<view class="autoRight">
					<!-- 标题 -->
					<view class="autoTitle">
						<text class="autoTitle1">{{item.title}}</text>
						<text class="autoGray">{{item.distance}}</text>
					</view>
					<!-- 地址 -->
					<view class="autoSrc">
						<view class="autoGray">地址：</view>
						<view class="autoGray">{{item.address}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 上拉 触底-->
		<view class="bottomText1" id="bottomText1">
			<uLi-load-more loadingType="3" status="noMore" :content-text="contentText"></uLi-load-more>
		</view>
	</div>
</template>

<script>
	import uLiLoadMore from "@/components/uLi-load-more/uLi-load-more.vue"
	export default {
		data() {
			return {
				pageH:0,
				downH:0,
				clientH:0,
				// 1、搜索框
				msg1:'',
				// 2、轮播图
					 // 面板指示点
				indicatorDots: true,
					 // 自动切换
				autoplay: true,
					 // 自动切换的时间间隔
				interval: 2200,
					 // 滑动动画时长
				duration: 500,
				// 轮播图内的图片
				info: [{
					src: '../../static/images-index/car2.jpg'
			    }, {
					src: '../../static/images-index/car1.jpg'
			     }],
				//3、小图标
				//4、头条
				 // 上下轮播
				 info1: [{
				 	con: '汽车维修保养七宗罪，看完再也不怕被坑！'
				 }, {
				 	con: '怎么检测汽车胎压？'
				  }],
				 // 5、视频轮播
				 info2:[
					 {
						 videoSrc:"../../static/images-index/video1.jpg",
						 videoText:"汽车维修保养七宗罪，看完再也不怕被坑"
					 },
					 {
						videoSrc:"../../static/images-index/video2.jpg",
						videoText:"汽车保养小心这4大陷阱，修车师傅都有小动作，可以多开..."
					 },
					 {
						videoSrc:"../../static/images-index/video3.jpg",
						videoText:"汽车保养不只是更换汽油，还要做这些"
					 }
				 ],
				 // 6、商家推荐 列表
				 list1:[
					 {
						 src:"../../static/images-index/auto1.jpg",
						 title:"auto汽车美容",
						 distance:"14km",
						 address:"广东省深圳市南山区沙河西路3181号"
					 },
					 {
					 	src:"../../static/images-index/auto2.jpg",
					 	title:"taxi汽车美容",
					 	distance:"66km",
					 	address:"广东省深圳市福田区上步北路2005路"
					 },
					 {
					 	src:"../../static/images-index/auto3.jpg",
					 	title:"汽车养生",
					 	distance:"14km",
					 	address:"广东省深圳市罗湖区翠菊路11655路"
					 },
					 {
					 	src:"../../static/images-index/auto4.jpg",
					 	title:"百瑞特养车",
					 	distance:"358km",
					 	address:"广东省深圳市宝安区翻身路65405号"
					 }
					 
				 ],
				 // 7、下拉触底
				 contentText: {
				    contentdown:'上拉显示更多',
				    contentrefresh: '正在加载...',
				    contentnomore: '我也是有底线的'
				},
				// 8、动画
				// animationData: {},

			}
		},
		components: {uLiLoadMore},
		methods: {
		// 1、搜索框
			search(e){
				console.log(e);
				this.msg1=e.value;
				console.log(this.msg1);
			},
		//2、轮播图
		change(e){
		// 点击轮播图，打印当前商品的id
			console.log(e);
		},
		// 3、上下轮播
		change1(e){
			console.log(e);
		},
		// 4、动画
		// rotateAndScale: function () {
		//       // 旋转同时放大
		//       this.animation.rotate(45).scale(2, 2).step()
		//       this.animationData = this.animation.export()
		//     },
		//     rotateThenScale: function () {
		//       // 先旋转后放大
		//       this.animation.rotate(45).step()
		//       this.animation.scale(2, 2).step()
		//       this.animationData = this.animation.export()
		//     },
		//     rotateAndScaleThenTranslate: function () {
		//       // 先旋转同时放大，然后平移
		//       this.animation.rotate(45).scale(2, 2).step()
		//       this.animation.translate(100, 100).step({ duration: 1000 })
		//       this.animationData = this.animation.export()
		//     }
		},
		onShow(){
			 var animation = uni.createAnimation({
			      duration: 1000,
			        timingFunction: 'ease',
			    })
			
			    this.animation = animation
			
			    animation.scale(2,2).rotate(45).step()
			
			    this.animationData = animation.export()
			
			    setTimeout(function() {
			      animation.translate(30).step()
			      this.animationData = animation.export()
			    }.bind(this), 1000)
		},
		onLoad(options) {
			setTimeout(function () {
			     console.log('start pulldown');
			}, 500);
			uni.startPullDownRefresh();
			
			uni.getSystemInfo({
				success:(res)=>{
					this.clientH=res.windowHeight;
				}
			})
		},
		// 用户下拉刷新
		onPullDownRefresh() {
		        console.log('refresh');
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
		        }, 1000);
		    },
		// 用户上拉
		onReachBottom(){
			console.log('到底部了');
		},
		// 页面滚动事件
		onPageScroll(ev){
			// 获取底部实例+高度
			let query = uni.createSelectorQuery().in(this);
			query.select('#bottomText1').boundingClientRect(data => {
				this.downH=data.height;
			}).exec();
			// 获取页面实例+高度
			query.select('#div1').boundingClientRect(data1 => {
				this.pageH=data1.height;
			}).exec();
			
			// console.log(ev.scrollTop,this.pageH,this.downH,this.clientH)
			// 如果滚动高度+屏幕高度>页面高度-底部高度
			// 就让页面滚动到 页面高度-底部高度
			if(ev.scrollTop+this.clientH>=this.pageH-this.downH){
				uni.pageScrollTo({
					scrollTop:this.pageH-this.downH-this.clientH
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 100%;
		background-color: #F3F4F6;
		uni-search-bar{
			width: 100rpx;
			height: 100rpx;
		}
		// 轮播图
		.swiper{
			width: 100%;
			height: 460rpx;
			image{
				width: 100%;
				height: 460rpx;
			}
		}
		// 小图标
		.litteCon{
			width: 100%;
			height: 420rpx;
			border-radius: 30rpx 30rpx 0 0;
			position: relative;
			.litteCon1{
				width: 100%;
				height: 440rpx;
				border-radius: 30rpx 30rpx 0 0;
				position: absolute;
				left: 0;
				top: -20rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-content: center;
				background-color: #fff;
			}
			.littleConDetail{
				width: 25%;
				height: 200rpx;
				background: url('../../static/images-index/littleCar.png') no-repeat;
				background-size: contain;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-content: center;
				font-size: 30rpx;
				image{
					width: 60%;
					height: 100rpx;
					// background-color: skyblue;
					}
			}
			.detail2{
				background: url('../../static/images-index/detai2.png') no-repeat;
				background-size: contain;
			}
			.detail3{
				background: url('../../static/images-index/list3.png') no-repeat;
				background-size: contain;
			}
			.detail4{
				background: url('../../static/images-index/list4.png') no-repeat;
				background-size: contain;
			}
			.detail5{
				background: url('../../static/images-index/list5.png') no-repeat;
				background-size: contain;
			}
			.detail6{
				background: url('../../static/images-index/list6.png') no-repeat;
				background-size: contain;
			}
			.detail7{
				background: url('../../static/images-index/list7.png') no-repeat;
				background-size: contain;
			}
			.detail8{
				background: url('../../static/images-index/list8.png') no-repeat;
				background-size: contain;
			}
		}
		// 头条
		.newTitle{
			border: 1px solid #eee;
			border-left:0;
			border-right: 0;
			display: flex;
			height: 70rpx;
			background: url('../../static/images-index/newTitle1.png') no-repeat;
			background-size: contain;
			align-items: center;
			background-color: #fff;
			// 小圆点
			.little-dot{
				width: 20rpx;
				height: 14rpx;
				border-radius: 50%;
				background-color: red;
				margin-left: 140rpx;
			}
			// 竖直方向轮播图
			.new-swiper{
				height: 50rpx;
				line-height: 50rpx;
				font-size: 24rpx;
				display: flex;
				align-items: center;
				// 热议
				image{
					width: 50rpx;
					height: 30rpx;
					margin-left: 20rpx;
					margin-right: 20rpx;
					vertical-align: middle;
				}
				//新闻标题
				.new-swiper1{
					height: 30px;
					line-height: 30rpx;
				}
			}
		}
		//新用户免费洗车
		.newUser{
			width: 100%;
			height: 160rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		// 汽车贴膜
		.autoFilm{
			width: 100%;
			height: 280rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			.autoFilm1{
				width: 28%;
				height: 270rpx;
				// background-color: pink;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				.autoText{
					width: 100%;
					height: 70rpx;
					line-height: 70rpx;
					text-align: center;
				}
				image{
					width: 100%;
					height: 190rpx;
				}
			}
		}
		// 视频推荐
		.videoRecommend{
			width: 100%;
			height: 500rpx;
			// background-color: pink;
			margin-top: 30rpx;
			margin-bottom: 24rpx;
			.videoText{
				// width: 94.6%;
				height: 40rpx;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				border-bottom: 2rpx solid #ccc;
				.videoLeft{
					width: 200rpx;
					display: flex;
					.videoShu{
						width: 6rpx;
						height: 40rpx;
						background-color: #FD8F33;
					}
					.videoText1{
						width: 160rpx;
						height: 40rpx;
						line-height: 40rpx;
						font-weight: 600;
						color: #FD8F33;
						margin-left: 14rpx;
					}
				}
				.morefilled{
					// color: #F3F4F6!important;
					// color: pink;
					// width: 100rpx;
					height: 40rpx;
					line-height: 40rpx;
				}
			}
			.videoPlay{
				width: 100%;
				height: 410rpx;
				// background-color: green;
				.swiper1{
					height: 410rpx;
					width: 100%;
					overflow: hidden;
					position: relative;
					image{
						position: absolute;
						left: -16%;
						width: 130%;
						height: 400rpx;
						
					}
					.videoText1{
						width: 100%;
						height: 50rpx;
						line-height: 50rpx;
						background-color: #000;
						padding-left: 20rpx;
						position: absolute;
						bottom: 0;
						color: #fff;
						font-size: 28rpx;
					}
				}
				
			}
		}
		// 商家推荐
		.mechantRecommend{
			width: 100%;
			height: 806rpx;
			background-color: #fff;
			.mechantWord{
				// width: 94.6%;
				// background-color: pink;
				height: 40rpx;
				padding: 20rpx;
				border-bottom: 2rpx solid #ccc;
				// border-left: 0;
				// border-right: 0;
				color: #FD8F33;
				font-weight: 600;
				display: flex;
				.mechantShu{
					width: 6rpx;
					height: 40rpx;
					background-color: #FD8F33;
					margin-right: 20rpx;
				}
				.mechantText{
					height: 40rpx;
					line-height: 40rpx;
				}
			}
			.autoBeautiful{
				// width: 100%;
				height: 180rpx;
				// background-color: pink;
				display: flex;
				justify-content: center;
				align-items: center;
				border-bottom: 1px solid #ccc;
				.autoImg{
					width: 24%;
					height: 160rpx;
				}
				.autoRight{
					flex: 1;
					height: 160rpx;
					// background-color: skyblue;
				}
				.autoTitle{
					// width: 100%;
					height: 40rpx;
					// background-color: red;
					font-size: 30rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx;
					.autoTitle1{
						font-weight: 600;
						font-size: 38rpx;
					}
				}
				.autoGray{
					color: #7B7A7B;
				}
				.autoSrc{
					font-size: 28rpx;
					display: flex;
					// align-items: center;
					height: 60rpx;
					// background-color: green;
					line-height: 60rpx;
					padding-left: 20rpx;
				}
			}
		}
		
		// 下拉触底
		.bottomText1{
			height: 100rpx;
			// background-color:pink;
			// margin-top: 100rpx;
			}
	}
</style>
