<template>
	<view>
		<!-- tab栏切换 -->
		<!-- <view class="navBar"> -->
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#04C4E0"></uni-segmented-control>
		<view class="content content1">
			<view v-if="current === 0">
			</view>
			<view v-if="current === 1">
				<uni-collapse>
					<uni-collapse-item title="按人气排序" showAnimation="true" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
						<view style="padding: 30rpx; background-color: #fff;" @click="popularOrder" :class="[sel?'':'current']">
							按人气进行升序
						</view>
						<view style="padding: 30rpx;background-color: #fff;" @click="popularDescending" :class="[sel?'current':'']">
							按人气进行降序
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			<view v-if="current === 2">
				<uni-collapse>
					<uni-collapse-item title="按销量排序" showAnimation="true" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
						<view style="padding: 30rpx; background-color: #fff;" @click="popularSale1" :class="[sel1?'':'current']">
							按销量进行升序
						</view>
						<view style="padding: 30rpx;background-color: #fff;" @click="popularSale2" :class="[sel1?'current':'']">
							按销量进行降序
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			<view v-if="current === 3">
				<uni-collapse>
					<uni-collapse-item title="按价格排序" showAnimation="true" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
						<view style="padding: 30rpx; background-color: #fff;" @click="popularPrice1" :class="[sel2?'':'current']">
							按价格进行升序
						</view>
						<view style="padding: 30rpx;background-color: #fff;" @click="popularPrice2" :class="[sel2?'current':'']">
							按价格进行降序
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>
		<!-- 全部 -->
		<view class="list">
			<!-- 美容打蜡 -->
			<view :key="index" data-index="item.id" class="beautyList" v-for="(item,index) in beautyArr" @click="detail(item.id)">
				<image :src="item.image" mode=""></image>
				<view class="beautyright">
					<view>{{item.name}}</view>
					<view class="beatutyTwo">周一到周日|提前1小时预约</view>
					<view class="beatutyThree">
						<view class="beautiPrice">￥{{item.price}}</view>
						<view class="">售出:{{item.number}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1、选项卡
				items: ['全部', '人气', '销量', '价格'],
				current: 0,
				// 选项卡对应的内容
				itemCon: [1, 2, 3, 4, ],
				// 商品列表
				beautyArr: [{
						src: '../../static/images-index/beatifulcar1.jpg',
						title: '美容打蜡',
						price: 430.00,
						sale: 30,
						popular: 32
					},
					{
						src: '../../static/images-index/beatifulcar1.jpg',
						title: '美容打蜡',
						price: 432.00,
						sale: 64,
						popular: 45
					},
					{
						src: '../../static/images-index/beatifulcar1.jpg',
						title: '美容打蜡',
						price: 428.00,
						sale: 150,
						popular: 13
					},
					{
						src: '../../static/images-index/beatifulcar1.jpg',
						title: '美容打蜡',
						price: 426.00,
						sale: 231,
						popular: 108
					},
					{
						src: '../../static/images-index/beatifulcar1.jpg',
						title: '美容打蜡',
						price: 424.00,
						sale: 456,
						popular: 9
					}
				],
				// 下拉
				sel: '',
				sel1: '',
				sel2: '',
				// 商品类别id
				categoryId: '',
				// 商品id
				sId:'',
				// 类别名称
				categoryName:'',
				// ip
				ip:'http://172.16.14.29:6067',
				// token
				token:'88318de7a5b44fc0aa43fadf22e1980a'
			}
		},
		methods: {
			// 1、选项卡
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
					// console.log(typeof this.current);
					switch (this.current) {
						case 0:
							break;
						case 1:
							// 人气
							let arr1 = this.beautyArr;
							arr1.sort(function(a, b) {
								return a.popularity - b.popularity
							});
							// console.log('排序后的数组：',arr1);
							this.beautyArr = arr1;
							break;
						case 2:
							// 销量
							let arr2 = this.beautyArr;
							arr2.sort(function(a, b) {
								return a.number - b.number
							});
							// console.log('排序后的数组：',arr2);
							this.beautyArr = arr2;
							break;
						case 3:
							// 价格
							let arr3 = this.beautyArr;
							arr3.sort(function(a, b) {
								return a.price - b.price
							});
							// console.log('排序后的数组：',arr3);
							this.beautyArr = arr3;
							break;

					}

				}
			},
			// 2、点击下拉列表
			// 按人气升序排列
			popularOrder() {
				this.sel = 0;
				let arr4 = this.beautyArr;
				arr4.sort(function(a, b) {
					return a.popularity - b.popularity
				});
				// console.log('排序后的数组：',arr1);
				this.beautyArr = arr4;

			},
			// 按人气降序排列
			popularDescending() {
				this.sel = 1;
				let arr5 = this.beautyArr;
				arr5.sort(function(a, b) {
					return b.popularity - a.popularity
				});
				// console.log('排序后的数组：',arr1);
				this.beautyArr = arr5;
			},
			// 按销量升序排列
			popularSale1() {
				this.sel1 = 0;
				let arr6 = this.beautyArr;
				arr6.sort(function(a, b) {
					return a.number - b.number
				});
				// console.log('排序后的数组：',arr1);
				this.beautyArr = arr6;
			},
			// 按销量降序排列
			popularSale2() {
				this.sel1 = 1;
				let arr7 = this.beautyArr;
				arr7.sort(function(a, b) {
					return b.number - a.number
				});
				// console.log('排序后的数组：',arr1);
				this.beautyArr = arr7;
			},
			// 按价格进行升序
			popularPrice1() {
				this.sel2 = 0;
				let arr7 = this.beautyArr;
				arr7.sort(function(a, b) {
					return a.price - b.price
				});
				// console.log('排序后的数组：',arr1);
				this.beautyArr = arr7;
			},
			// 按价格进行降序
			popularPrice2() {
				this.sel2 = 0;
				let arr8 = this.beautyArr;
				arr8.sort(function(a, b) {
					return b.price - a.price
				});
				// console.log('排序后的数组：',arr1);
				this.beautyArr = arr8;
			},
			// 3、商品
			detail(i) {
				// 商品的id
				this.sId=i;
				// 跳转页面
				wx.navigateTo({
					url: '../index-details/index-details?id=' + i
				})
			}
		},
		onLoad: function(options) {
			// 轮播图传过来的类别id
			// console.log(options)
			this.categoryId = options.id;
			// if(this.categoryId==1){
			// }else{
				// wx.setNavigationBarTitle({ title:'222'})
			// }
			uni.request({
				url: this.ip+'/sku/findGoodsByCategory?category=' + this.categoryId,
				method: 'post',
				header:{
					token:this.token
				},
				data: {
					category: this.categoryId
				},
				success: (res) => {
					// console.log(res);
					this.beautyArr = res.data;
				}
			});
			// 通过类别id，获得类别名称
			uni.request({
				url: this.ip+'/sku/findByCategoryId?id=' + this.categoryId,
				method: 'get',
				header:{
					token:this.token
				},
				data: {
					category: this.categoryId
				},
				success: (res) => {
					// console.log(res.data);
					this.categoryName=res.data;
					// this.beautyArr = res.data;
					wx.setNavigationBarTitle({ title:this.categoryName})
				}
			});
		}
	}
</script>

<style lang="less">
	.navBar {
		height: 90rpx;
		background-color: pink;
	}

	.content1 {
		margin-bottom: 20rpx;
	}

	.current {
		// background-color: ;
		color: #04C4E0;
	}

	.list {
		height: 500rpx;

		// background-color: pink;
		.beautyList {
			height: 180rpx;
			margin-top: 20rpx;
			// border-top: 2rpx solid #ccc;
			border-bottom: 1rpx solid #ccc;
			// background-color: #0000FF;
			display: flex;
			align-items: center;
			padding-left: 20rpx;

			image {
				width: 140rpx;
				height: 80%;
				margin-right: 20rpx;
			}
		}

		.beautyright {
			flex: 1;
			height: 80%;

			// background-color: red;
			.beatutyTwo {
				color: #ccc;
				font-size: 26rpx;
				height: 50rpx;
				line-height: 50rpx;
			}

			.beatutyThree {
				display: flex;
				justify-content: space-between;
				padding-right: 20rpx;
				height: 60rpx;
				line-height: 60rpx;

				.beautiPrice {
					color: red;
				}
			}
		}
	}
</style>
