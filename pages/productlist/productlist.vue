<template>
	<view>
		<!-- 中间导航栏 -->
		<view class="middle_nav">
			<view @click="arrowRotate">
				<text class="middle_nav_child" :class="text1?'active':''">全部</text>
			</view>
			<view @click="arrowRotate1">
				<text class="middle_nav_child" :class="text2?'active':''">人气</text>
				<view class="arrows" :class="arrow1%2==0&&arrow1>0?'active':''">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1"></text>
				</view>
			</view>
			<view @click="arrowRotate2">
				<text class="middle_nav_child" :class="text3?'active':''">销量</text>
				<view class="arrows" :class="arrow2%2==0&&arrow2>0?'active':''">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1 "></text>
				</view>
			</view>
			<view @click="arrowRotate3">
				<text class="middle_nav_child" :class="text4?'active':''">价格</text>
				<view class="arrows" :class="arrow3%2==0&&arrow3>0?'active':''">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1 "></text>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="productlist">
			<view v-for="(v,i) in productlist" :key="i">
				<view class="productcard" @click="goproductindex(v.id)">
					<view class="productimg">
						<image :src="v.image" mode=""></image>
					</view>
					<view class="productcontent">
						<view class="productname">{{v.name}}</view>
						<view class="producttime">周一到周日 | 提前一小时预约</view>
						<view class="productprice">
							<view class="">￥ {{v.price}}</view>
							<view class="">售出：{{v.number}}</view>
						</view>
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
				// 端口号
				host: "http://172.16.14.29:6067",
				// 请求头
				token: "88318de7a5b44fc0aa43fadf22e1980a",
				// 商品类别
				category: "",
				text1: true,
				text2: false,
				text3: false,
				text4: false,
				// 人气（默认从大到小，箭头向下）
				arrow1: 0,
				// 销量（默认从大到小，箭头向下）
				arrow2: 0,
				// 价格（默认从小到大，箭头向下）
				arrow3: 0,
				// 商品列表
				productlist: [],
				productinform: {},
			}
		},
		methods: {
			// 数据复位
			returndata() {
				this.text1 = false;
				this.text2 = false;
				this.text3 = false;
				this.text4 = false;
			},
			// 点击综合按id排序
			arrowRotate() {
				this.returndata();
				this.text1 = true;
				this.arrow1 = 0;
				this.arrow2 = 0;
				this.arrow3 = 0;
				let arr = this.productlist;
				arr.sort(function(a, b) {
					return a.id - b.id
				})
			},
			// 人气排序
			arrowRotate1() {
				this.returndata();
				this.text2 = true;
				this.arrow1 = this.arrow1 + 1;
				this.arrow2 = 0;
				this.arrow3 = 0;
				let arr1 = this.productlist;
				if (this.arrow1 % 2 == 0 && this.arrow1 > 0) {
					arr1.sort(function(a, b) {
						return a.popularity - b.popularity
					})
				} else {
					arr1.sort(function(a, b) {
						return b.popularity - a.popularity
					})
				}
			},
			// 销量排序
			arrowRotate2() {
				this.returndata();
				this.text3 = true;
				this.arrow2 = this.arrow2 + 1;
				this.arrow1 = 0;
				this.arrow3 = 0;
				let arr2 = this.productlist;
				if (this.arrow2 % 2 == 0 && this.arrow2 > 0) {
					arr2.sort(function(a, b) {
						return a.number - b.number
					})
				} else {
					arr2.sort(function(a, b) {
						return b.number - a.number
					})
				}
			},
			// 价格排序
			arrowRotate3() {
				this.returndata();
				this.text4 = true;
				this.arrow3 = this.arrow3 + 1;
				this.arrow1 = 0;
				this.arrow2 = 0;
				let arr3 = this.productlist;
				let c = 0;
				if (this.arrow3 % 2 == 0 && this.arrow3 > 0) {
					arr3.sort(function(a, b) {
						c = parseFloat(b.price) - parseFloat(a.price);
						return c
					})
				} else {
					arr3.sort(function(a, b) {
						c = parseFloat(a.price) - parseFloat(b.price);
						return c
					})
				}
			},
			// 点击跳转商品详情页
			goproductindex(val) {
				wx.navigateTo({
					url: "../productindex/productindex?id=" + val
				})
			},
		},
		onLoad(val) {
			this.category = parseInt(val.id);
			let categ = parseInt(val.id);
			// 修改头栏
			wx.request({
				url: this.pageUrl.pageUrl+"/sku/findByCategoryId?id=" + this.category,
				header: {
					'token': this.token //自定义请求头信息
				},
				method: "get",
				success: (res) => {
					let title = res.data;
					uni.setNavigationBarTitle({
						title: title
					});
				},
			});
			// 获取商品列表全信息
			wx.request({
				url: this.pageUrl.pageUrl+"/sku/findGoodsByCategory?category=" + this.category,
				header: {
					'token': this.token //自定义请求头信息
				},
				method: "post",
				success: (res) => {
					this.productlist = res.data;
					// console.log(this.productlist);
				},
			});
		},
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");

	/* 中部导航栏 */
	.middle_nav {
		padding: 0 80rpx;
		border-bottom: 2rpx solid #ececec;
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.middle_nav view {
		font-size: 27rpx;
	}

	.middle_nav_child {
		color: #000000;
	}

	.middle_nav_child.active {
		color: #04C4E0;
	}

	.arrows {
		display: inline-block;
		transform: rotate(180deg);
	}

	.arrows.active {
		transform: rotate(0deg);
	}

	// 商品列表
	.productcard {
		height: 108rpx;
		padding: 20rpx;
		border-bottom: 2rpx solid #ececec;
		display: flex;
		align-items: center;
	}

	.productimg>image {
		height: 108rpx;
		line-height: 108rpx;
		width: 108rpx;
		text-align: center;
		vertical-align: middle;
	}

	// 商品内容描述
	.productcontent {
		flex: 1;
		padding-left: 20rpx;
	}

	// 商品可用时间
	.producttime {
		font-size: 24rpx;
		color: #aaa;
	}

	// 商品价格和售出数量
	.productprice {
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
	}

	.productprice>view:first-child {
		color: #D9001B;
	}
</style>
