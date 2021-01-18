<template>
	<div>
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
						   <image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u56.png?token=795b10cd0273a5bd3de3a649b3dd32f5c5c4e7b3afc51ea495903dbd1a1164f3" mode=""></image>
							<text class="new-swiper1">{{info1[index].con}}</text>
					   </view>
			      </swiper-item>
			</swiper>
		</view>
		<!-- 新用户免费洗车 -->
		<view class="newUser">
			<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u62.png?token=289c7f0dade289880d5c06ead834f7029671ab13a426eebee04f9dcc9bbf87df" mode=""></image>
		</view>
		<!-- 汽车贴膜 -->
		<view class="autoFilm">
			<view class="autoFilm1">
				<text class="autoText">汽车贴膜</text>
				<!-- <image src="../../static/images-index/autoFilm1.jpg" mode=""></image> -->
				<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u69.jpg?token=49c210832bd2713e029e9428c545f06c4ffa5d167c79e23857536661779cbe88" mode=""></image>
			</view>
			<view class="autoFilm1">
				<text class="autoText">四轮定位</text>
				<!-- <image src="../../static/images-index/autoFilm1.jpg" mode=""></image> -->
				<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u72.jpg?token=8964a2a6b4ce51035a0727cb9ff3a8be5f88021a4b74312f82020a77816e372f" mode=""></image>
			</view>
			<view class="autoFilm1">
				<text class="autoText">车辆保养</text>
				<!-- <image src="../../static/images-index/autoFilm1.jpg" mode=""></image> -->
				<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u66.jpg?token=8c6f0add287235aed6052bfeaaea2a910897282a82475260061151dd70e0f30f" mode=""></image>
			</view>
		</view>
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
	
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
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
					src: 'http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u21.jpg?token=b167736f74ca0844f32ea812cc20ec355461798e68bc6f382fbca051e41bb48f'
			    }, {
					src: 'http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u25.jpg?token=a4b341c029acae295c311e5bcac7c5a737960dcb7f181223a2ea7f1b44a953d1'
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
						 videoSrc:"http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u82_div.jpg?token=44c7d934f83f79f4bf92164d381632c278944bfcaa9aaf6337369e188320556d",
						 videoText:"汽车维修保养七宗罪，看完再也不怕被坑"
					 },
					 {
						videoSrc:"http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u84_div.jpg?token=cd30d825d016f4e58f8e31a61acd11e8d416fb761e6ccc964824068341033d7c",
						videoText:"汽车保养小心这4大陷阱，修车师傅都有小动作，可以多开..."
					 },
					 {
						videoSrc:"http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u86_div.jpg?token=26789baad773d562358a3305590bc2087090121a7c44a3c18394beb5d9f8c01f",
						videoText:"汽车保养不只是更换汽油，还要做这些"
					 }
				 ],
				 // 6、商家推荐 列表
				 list1:[
					 {
						 src:"http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u96.jpg?token=4b0bc658e09ee5c4b8e03726f5628b7cc6359658ff069ef246b962ded4670f54",
						 title:"auto汽车美容",
						 distance:"14km",
						 address:"广东省深圳市南山区沙河西路3181号"
					 },
					 {
					 	src:"http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u102.jpg?token=ee55357f0b66d91f859fa5cc0f96a17877561fea2bfebb93f4377305ac48ab85",
					 	title:"taxi汽车美容",
					 	distance:"66km",
					 	address:"广东省深圳市福田区上步北路2005路"
					 },
					 {
					 	src:"http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u108.jpg?token=d7ac6be1fb021b11925be8ba3a539ed65b3d56bf0787fa1b538983d32c226e3f",
					 	title:"汽车养生",
					 	distance:"14km",
					 	address:"广东省深圳市罗湖区翠菊路11655路"
					 },
					 {
					 	src:"http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u96.jpg?token=4b0bc658e09ee5c4b8e03726f5628b7cc6359658ff069ef246b962ded4670f54",
					 	title:"百瑞特养车",
					 	distance:"358km",
					 	address:"广东省深圳市宝安区翻身路65405号"
					 }
					 
				 ]
			}
		},
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
		}
		},
		onLoad() {

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
				background: url('http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u36.png?token=dcbbd5d99bc8904ecace681be38021a23a3d49af7337b08bf9a1f986d926bc4b') no-repeat;
				background-size: contain;
			}
			.detail3{
				background: url('http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u37.png?token=bf76aadc9ed32328e374a4d76f1f59848e0099cd3f6fc198fe183fd66f380900') no-repeat;
				background-size: contain;
			}
			.detail4{
				background: url('http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u38.png?token=c1ffe48dae2525e2e7536697670fda89cd0428843c63358447fb388d12e9d316') no-repeat;
				background-size: contain;
			}
			.detail5{
				background: url('http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u39.png?token=1de08bc67c2dce7e01a872b1f4bd24333ad896eecb857025a1c330b58347685a') no-repeat;
				background-size: contain;
			}
			.detail6{
				background: url('http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u40.png?token=f3baf6f2dcbac4e751153be0116ba3d07b4a96da62e93d3260f24fb2240f17e8') no-repeat;
				background-size: contain;
			}
			.detail7{
				background: url('http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u41.png?token=fc55325ba5cabfd49eabe18edeb27387be8bb437bbcbb423a0188646b65d5fb6') no-repeat;
				background-size: contain;
			}
			.detail8{
				background: url('http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u42.png?token=248a50c4977350867e249cbe96121bf32fbebe3a3bc8eaa0976fe42abe32991a') no-repeat;
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
			background: url(http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E9%A6%96%E9%A1%B5/u53.png?token=ea33d59598e3d524a58a68616bf4820e442dec19caf38ac9dd2b6d0e4738a13a) no-repeat;
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
				background-color: green;
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
			height: 760rpx;
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
					font-size: 38rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx;
					.autoTitle1{
						font-weight: 600;
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
	}
</style>
