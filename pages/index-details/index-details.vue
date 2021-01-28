<template>
	<view class="com-detail">
		<!-- 图片 -->
		<view class="firstImage">
			<image :src="comRes1.image" mode=""></image>
		</view>
		<!-- 商品标题 -->
		<view class="commodityTitle">
			<view class="title1">{{comRes1.name}}</view>
			<view class="title-bottom">
				<view class="title-price">￥{{comRes1.price}}</view>
				<view class="repertory">
					<view class="repertoryNum">剩余库存：995</view>
					<view class="">累计销售：{{comRes1.number}}</view>
				</view>
			</view>
		</view>
		<!-- 商品评价 -->
		<view class="commodityEvaluate">
			<view class="evaluateGray">商品评价</view>
			<view class="evaluateGray" @click='evalute'>{{evluateNum}}条评价 ></view>
		</view>
		<!-- 进入店铺 -->
		<view class="enterStore">
			<image :src="mechantInfo.logo" mode=""></image>
			<view class="enterMiddle">
				<view>{{mechantInfo.name}}</view>
				<view class="totalCom">全部商品：{{total}}</view>
			</view>
			<!-- 进入店铺 -->
			<view class="store1" @click="enterStore">
				<!-- 图标 -->
				<view class="iconfont icon-dianpu storeIcon"></view>
				<text>进入店铺</text>
			</view>
		</view>
		<!-- 商家信息-->
		<view class="mechantInfo">
			<!-- 商家信息 -->
			<view class="mechantWord">
				商家信息
			</view>
			<!-- 联系电话 -->
			<view class="connectTel">
				<view class="">
					联系电话
					<text class="telNum">{{comRes1.phone}}</text>
				</view>
				<!-- 电话小图标 -->
				<view class="iconfont icon-09 telIcon" @click="madeTel"></view>
			</view>
			<!-- 地址 -->
			<view class="connectSrc">
				<view>
					地址：
					<text class="srcDetail">{{comRes1.address}}</text>
				</view>
				<view class="">
					<!-- 地址小图标 -->
					<view class="iconfont icon-dingwei1 dingweiIcon"  @click="madeLocation"></view>
				</view>
			</view>
		</view>
		<!-- 购买须知 -->
		<view class="buyInfo">
			<view class="buyMust">购买须知</view>
			<view class="buyDetail">
				<view class="">有效期:一个月</view>
				<view class="">使用时限:周一到周五</view>
				<view class="">每日使用时间段: 09:30到18:30</view>
				<view class="">使用规则</view>
				<view class="">1.团购用户还可享受优惠，请咨询商家</view>
				<view class="">2.每张卷不限使用人数</view>
				<view class="">3.每次消费不限使用卷张数，可叠加使用</view>
				<view class="">4.在购买后及时和商家联系，预约时间到店进行套餐内的服务内容，请顾客提前准备好时间</view>
				<view class="">5.服务时间约1小时左右</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<view class="commodityDetail">
			<view class="commodityText">商品详情</view>
			<view class="commodityImg">
				<image :src="comRes1.image" mode=""></image>
			</view>
		</view>
		<!-- 商品导航 -->
		<view class="commodityNav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 商品导航
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'star',
					// info: 0,
					text: '收藏'
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				],
				// 商品id
				sId:'',
				// 商品信息渲染1
				comRes1:{
					// 商品名字
					name:"标题",
					price:"价格",
					image:"http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg",
					number:"销售额",
					inventory:"库存",
					logo:"http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg",
					// 少一个店铺名称
					phone:"商家电话",
					address:"商家地址"
				},
				// 商品评价数量
				evluateNum:'0',
				// 店铺id
				dId:'',
				// 商家信息
				mechantInfo:{},
				// 全部商品
				total:'',
				// ip
				ip:'http://172.16.14.29:6067',
				// token
				token:'88318de7a5b44fc0aa43fadf22e1980a'
			};
		},
		methods: {
			// 1、商品导航
			onClick(e) {
				console.log(e.index);
				switch(e.index){
					case 0:
						wx.navigateTo({
							url:'../index-connect/index-connect'
						});
						break;
					case 1:
						if(this.options[1].icon=='star-filled'){
							uni.showToast({
								title: `取消收藏`,
								icon: 'none'
							});
							this.options[1].icon='star'
							// this.options[1].info--;
						}else{
							uni.showToast({
								title: `收藏成功`,
								icon: 'none'
							});
							this.options[1].icon='star-filled';
						}
						break;
					case 2:
						wx.navigateTo({
							url:'../index-shopCar/index-shopCar'
						});
						break;
				}
				
			},
			// 2、加入购物车
			buttonClick(e) {
				// console.log(e)
				this.options[2].info++;
				// 加入购物车
				uni.request({
					url:this.pageUrl.pageUrl+'/cart/add?num=1&skuId='+this.sId,
					method:'post',
					header:{
						token:this.token
					},
					header:{
						token:'88318de7a5b44fc0aa43fadf22e1980a'
					},
					success: (res) => {
						// console.log(res,'加入购物车');
						
					}
				})
			},
			// /3、拨打电话
			madeTel(){
				console.log('打电话了');
				uni.makePhoneCall({
				    phoneNumber: '14781878559' 
				});
			},
			// 4、获取定位
			madeLocation(){
				console.log('获取位置了');
				// 获取位置的函数
				// uni.chooseLocation({
				//     success: function (res) {
				// 		console.log(1111);
				//         console.log('位置名称：' + res.name);
				//         console.log('详细地址：' + res.address);
				//         console.log('纬度：' + res.latitude);
				//         console.log('经度：' + res.longitude);
				//     }
				// });
				
				// 定位的函数
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度			
				    success: (res) =>{
				        const latitude = this.mechantInfo.shoplatitude;
						// const latitude = 30.64242;
				        const longitude = this.mechantInfo.shoplongitude;
						// const longitude = 104.04311;
				        uni.openLocation({
				            latitude: latitude,
				            longitude: longitude,
							// name:'春熙路小郡肝串串香',
							name:this.mechantInfo.name,
				            success: function () {
				                console.log('success');
				            }
				        });
				    }
				});
			},
			// 5、商品评价
			evalute(){
				wx.navigateTo({
					url:'../index-evaluate/index-evaluate?id='+this.sId
				});
			},
			// 6、进入店铺
			enterStore(){
				wx.navigateTo({
					url:'../shopindex/shopindex?id='+this.dId
				});
			}
		},
		onLoad(options) {
			// console.log(options);
			this.sId=options.id;
			console.log(this.sId,1);
			// console.log(this.sId);
			// 通过商品id查询商品信息
			uni.request({
				url: this.pageUrl.pageUrl+'/sku/purchaseByGoodsId?goodsId=' + this.sId,
				method: 'post',
				header:{
					token:this.token
				},
				data: {
					goodsId: this.sId
				},
				success: (res) => {
					/* console.log(res,1)
					console.log(1); */
					this.comRes1 = res.data;
				}
			});
			// 根据商品id获得商品评价信息
			uni.request({
				url: this.pageUrl.pageUrl+'/sku/findEvaluateById?goodsId=' + this.sId,
				method: 'post',
				header:{
					token:this.token
				},
				data: {
					goodsId: this.sId
				},
				success: (res) => {
					/* console.log(res,2)
					console.log(2) */
					// this.comRes1 = res.data;
					// console.log(res.data.length)
					this.evluateNum=res.data.length;
					console.log(this.evluateNum)
				}
			});
			// 通过商品id查询商家信息
			uni.request({
				url:this.pageUrl.pageUrl+'/sku/findMerchantByGoodsId?goodsId='+this.sId,
				method:'post',
				header:{
					token:this.token
				},
				data:{
					goodsId: this.sId
				},
				success:(res)=>{
					/* console.log(res,3);
					console.log(3) */
					this.mechantInfo=res.data;
					this.dId=this.mechantInfo.id;
				}
				
			});
			// 通过商品id查询全部商品
			uni.request({
				url:this.pageUrl.pageUrl+'/sku/addByGoodsId?goodsId='+this.sId,
				method:'post',
				header:{
					token:this.token
				},
				data:{
					goodsId: this.sId
				},
				success:(res)=>{
					/* console.log(res,4)
					console.log(4) */
					this.total=res.data;
				}
				
			});
			// 查询所有购物车
			uni.request({
				url:this.pageUrl.pageUrl+'/cart/queryUserCart',
				method:'get',
				header:{
					token:this.token
				},
				success: (res) => {
					// console.log(res.data.data,'购物车的长度');
					let chang=0;
					for(var key in res.data.data){
						chang+=1;
					}
					// console.log(chang,1);
					this.options[2].info=chang;
				}
			});
			
		}
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");

	.com-detail {
		// height: 100%;
		background-color: #F4F4F3;

		// 图片
		.firstImage {
			width: 100%;
			height: 600rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		// 商品标题
		.commodityTitle {
			height: 200rpx;
			background-color: #fff;
			padding: 20rpx;
			border-bottom: 2rpx solid #ccc;
			margin-bottom: 20rpx;

			.title1 {
				height: 80rpx;
				// background-color: green;
				line-height: 80rpx;
				border-bottom: 2rpx solid #ccc;
			}

			.title-bottom {
				.title-price {
					height: 80rpx;
					line-height: 80rpx;
					color: red;
					font-size: 38rpx;
				}

				.repertory {
					display: flex;
					color: #86829F;

					.repertoryNum {
						margin-right: 50rpx;
					}
				}
			}

		}

		// 商品评价
		.commodityEvaluate {
			height: 60rpx;
			display: flex;
			background-color: #fff;
			padding: 20rpx;
			justify-content: space-between;
			align-items: center;
			border: 2rpx solid #ccc;
			border-left: 0;
			border-right: 0;

			.evaluateGray {
				color: #86829F;
			}
		}

		// 进入店铺
		.enterStore {
			height: 110rpx;
			margin: 20rpx 0;
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: 20rpx;
			border: 2rpx solid #ccc;
			border-left: 0;
			border-right: 0;

			image {
				width: 180rpx;
				height: 100%;
				margin-right: 20rpx;
			}

			.enterMiddle {
				width: 220rpx;
				padding: 10rpx;
				// background-color: pink;
				font-size: 30rpx;

				.totalCom {
					height: 60rpx;
					line-height: 60rpx;
					// background-color: green;
					color: #86829F;
				}
			}

			.store1 {
				flex: 1;
				// background-color: red;
				border-radius: 10rpx;
				background-color: #FD8F33;
				color: #fff;
				// border: 2rpx solid #ccc;
				display: flex;
				align-items: center;
				justify-content: center;
				// color: #86829F;
				height: 90rpx;
				font-size: 30rpx;

				.storeIcon {
					font-size: 50rpx;
					// color: #86829F;
					margin-right: 20rpx;
				}
			}
		}

		// 商家信息
		.mechantInfo {
			height: 260rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			border: 2rpx solid #ccc;
			border-left: 0;
			border-right: 0;
			padding: 0 20rpx;

			// 第一行
			.mechantWord {
				height: 80rpx;
				line-height: 80rpx;
				border-bottom: 2rpx solid #ccc;
			}

			// 联系电话
			.connectTel {
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 2rpx solid #ccc;

				.telNum {
					color: #86829F;
					margin-left: 20rpx;
					font-size: 30rpx;
				}

				.telIcon {
					font-size: 50rpx;
					font-weight: 600;
					color: #FD8F33;
				}
			}

			// 联系地址
			.connectSrc {
				// background-color: pink;
				height: 80rpx;
				line-height: 100rpx;
				display: flex;
				justify-content: space-between;

				.srcDetail {
					color: #86829F;
					font-size: 30rpx;
				}

				.dingweiIcon {
					font-size: 50rpx;
					font-weight: 600;
					color: #FD8F33;
				}
			}
		}

		// 购买须知
		.buyInfo {
			height: 560rpx;
			padding: 20rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			border: 2rpx solid #ccc;

			.buyMust {
				height: 50rpx;
				line-height: 20rpx;
				border-bottom: 2rpx solid #ccc;
			}

			.buyDetail {
				display: flex;
				// flex: 1;
				flex-direction: column;
				margin-top: 20rpx;
				justify-content: flex-start;
				// align-items: center;
				// background-color: green;
				height: 460rpx;
				color: #86829F;
				font-size: 30rpx;
			}
		}

		// 商品详情
		.commodityDetail {
			height: 700rpx;
			padding: 20rpx;
			background-color: #fff;
			margin-bottom: 30rpx;
			border: 2rpx solid #ccc;
			border-left: 0;
			border-right: 0;

			.commodityText {
				height: 60rpx;
				border-bottom: 2rpx solid #ccc;
				margin-bottom: 20rpx;
			}

			.commodityImg {
				height: 640rpx;

				// background-color: pink;
				image {
					width: 100%;
					height: 96%;
				}
			}
		}

		// 商品导航
		.commodityNav {
			height: 100rpx;
			width: 100%;
			background-color: pink;
			position: fixed;
			left: 0;
			bottom: 0;
		}
	}
</style>
