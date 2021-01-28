<template>
	<view class="product">
		<view class="headimg">
			<image :src="productinform.image" mode=""></image>
		</view>
		<view class="productinformbox">
			<view class="productname">{{productinform.name}}</view>
			<view class="productprice">￥ {{productinform.price}}</view>
			<view class="productnumber">
				<view class="">剩余库存：{{productinform.inventory}}</view>
				<view class="">累计销售：{{productinform.number}}</view>
			</view>
		</view>
		<view class="review" @click="reviewIndex">
			<view class="productreview">
				<view class="">商品评价</view>
				<view class="">{{reviewnum}}条评价<text class="iconfont icon-jiantou"></text></view>
			</view>
		</view>
		<view class="noreview" :class="noreview?'active':''">暂无评论</view>
		<view class="shop" @click="shopIndex">
			<view class="goshop">
				<view class="flexall">
					<view class="shoplogo">
						<image :src="productinform.logo" mode=""></image>
					</view>
					<view class="shoptxt">
						<view class="">{{productinform.merchantName}}</view>
						<view class="">全部商品：{{numbershop}}</view>
					</view>
				</view>
				<view class="goshoptext"><text class="iconfont icon-dianpu"></text>进入店铺</view>
			</view>
		</view>
		<view class="buynote">
			<view class="note">
				<view>购买须知</view>
				<view>
					<view>有效期：一个月</view>
					<view>使用时限：周一到周五</view>
					<view>每日使用时间段：09:30 到 18:30</view>
					<view>使用规则：</view>
					<view>1、团购用户还可以享受优惠，请咨询商家</view>
					<view>2、每张券不限使用人数</view>
					<view>3、每次消费不限使用券张数，可叠加使用</view>
					<view>4、在购买后及时和商家联系，预约时间到店进行套餐内的服务内容，请顾客提前准备号时间</view>
					<view>5、服务时间为一小时左右</view>
				</view>
			</view>
		</view>
		<view class="productdetail">
			<view class="">商品详情</view>
			<view class="productimg">
				<image :src="productinform.image" mode=""></image>
			</view>
		</view>
		<view class="productfooter">
			<view class="footer">
				<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: "88318de7a5b44fc0aa43fadf22e1980a",
				productinform: {},
				tryproductinform: {},
				shopinform: {},
				tryshopinform: {},
				userid: "1",
				options: [
				{
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
				numbershop: 0,
				productinventory: 0,
				reviewnum: 0,
				noreview: false,
			}
		},
		methods: {
			reviewIndex() {
				if(this.reviewnum!=0){
					let val1 = parseInt(this.productinform.goodsId);
					wx.navigateTo({
						url: "../reviewindex/reviewindex?id=" + val1
					})
				}else{
					this.noreview = true;
					setTimeout(()=>{
						this.noreview = false;
					},2000);
				}
			},
			shopIndex() {
				let val2 = parseInt(this.productinform.id);
				wx.navigateTo({
					url: "../shopindex/shopindex?id=" + val2
				})
			},
			onClick(e) {
				if (e.content.icon == 'star') {
					this.options[1].icon = 'star-filled';
					uni.showToast({
						title: `${e.content.text}成功`,
						icon: 'none'
					})
				} else if (e.content.icon == 'star-filled') {
					this.options[1].icon = 'star';
					uni.showToast({
						title: `取消${e.content.text}成功`,
						icon: 'none'
					})
				} else if (e.content.icon == 'headphones') {
					let val1 = this.productinform.id;
					wx.navigateTo({
						url: "../service/service?id=" + val1
					})
				} else if (e.content.icon == 'cart') {
					let val2 = this.userid;
					wx.switchTab({
						url: "/pages/shopCar/shopCar?id=" + val2
					})
				}
			},
			buttonClick(e) {
				if(e.content.text == "加入购物车"){
					this.options[0].info++;
					this.addshopcar();
				} else if(e.content.text == "立即购买"){
					let val3 = this.userid;
					wx.switchTab({
						url: "/pages/shopCar/shopCar?id=" + val3
					})
				}
			},
			addshopcar(){
				let goodsid = this.productinform.goodsId;
				wx.request({
					url: this.pageUrl.pageUrl + "/cart/add?num=" + 1 + "&skuId=" + goodsid,
					header: {
						'token': this.token 
					},
					method: "post",
				  success: (res) => {
						console.log(res.data.message);
				  }
				})
			},
			shopproductnumber(val){
				wx.request({
					url: this.pageUrl.pageUrl + "/sku/findByBelong?belong=" + val,
					header: {
						'token': this.token 
					},
					method: "post",
				  success: (res) => {
						this.tryshopinform.productnumber = res.data.length;
						let bbbbbb = 0;
						bbbbbb = this.tryshopinform.productnumber;
						this.numbershop = bbbbbb;
				  }
				})
			},
		},
		onLoad(val) {
			let productid = val.id;
			wx.request({
				url: this.pageUrl.pageUrl + "/sku/purchaseByGoodsId?goodsId="+productid,
				header: {
					'token': this.token 
				},
				method: "post",
				success: (res)=>{
					this.productinform = res.data;
					let shopid = this.productinform.id;
					this.shopproductnumber(shopid);
				},
			});
			// 获取商品评论条数
			wx.request({
				url: this.pageUrl.pageUrl + "/sku/findEvaluateById?goodsId="+productid,
				header: {
					'token': this.token 
				},
				method: "post",
				success: (res)=>{
					this.reviewnum = res.data.length;
				},
			});
			wx.request({
				url: this.pageUrl.pageUrl + "/cart/queryUserCart",
				header: {
					'token': this.token 
				},
				method: "get",
			  success: (res) => {
					let allgoods = res.data.data;
					for (let i in allgoods) {
						if(i == productid){
							console.log(allgoods[i].num);
							this.options[0].info = allgoods[i].num;
							break;
						}
					}
			  }
			})
		},
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");

	.product {
		position: relative;
	}

	.headimg image {
		width: 100%;
		height: 590rpx;
	}

	.productinformbox {
		padding: 0 20rpx;
		border-bottom: 2rpx solid #D7D7D7;
	}

	.productname {
		height: 82rpx;
		line-height: 82rpx;
		font-size: 30rpx;
		border-bottom: 2rpx solid #D7D7D7;
	}

	.productprice {
		color: #DB001B;
		margin-top: 30rpx;
	}

	.productnumber {
		height: 86rpx;
		font-size: 30rpx;
		color: #7F7F7F;
		display: flex;
		vertical-align: middle;
		align-items: center;
	}

	.productnumber>view {
		margin-right: 40rpx;
	}
	.noreview{
		width: 300rpx;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		vertical-align: middle;
		border-radius: 10rpx;
		background-color: #D3D3D3;
		display: none;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-150rpx,-50rpx);
	}
	.noreview.active{
		display: block;
	}
	.review {
		background-color: #F4F4F3;
		padding: 20rpx 0;
	}

	.productreview {
		height: 80rpx;
		padding: 0 20rpx;
		font-size: 28rpx;
		color: #7F7F7F;
		background-color: #ffffff;
		border-top: 1rpx solid #D7D7D7;
		border-bottom: 1rpx solid #D7D7D7;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.buynote,
	.shop {
		background-color: #F4F4F3;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #D7D7D7;
	}

	.goshop {
		height: 84rpx;
		padding: 20rpx;
		font-size: 27rpx;
		color: #7F7F7F;
		background-color: #ffffff;
		border-top: 1rpx solid #D7D7D7;
		border-bottom: 1rpx solid #D7D7D7;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.flexall {
		display: flex;
		align-items: center;
		justify-content: left;
	}

	.shoplogo>image {
		height: 84rpx;
		width: 170rpx;
	}

	.shoptxt {
		flex: 1;
		padding: 20rpx;
	}

	.shoptxt>view:first-child {
		color: #333333;
		font-size: 30rpx;
	}

	.goshoptext>text {
		padding-right: 20rpx;
	}

	.note {
		padding: 20rpx;
		font-size: 27rpx;
		color: #7F7F7F;
		background-color: #ffffff;
		border-top: 1rpx solid #D7D7D7;
		border-bottom: 1rpx solid #D7D7D7;
	}

	.note>view:first-child {
		font-size: 30rpx;
		color: #333333;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #D7D7D7;
	}

	.note>view:last-child {
		padding: 20rpx 0;
	}

	.productdetail {
		padding: 20rpx;
		padding-bottom: 90rpx;
	}

	.productdetail>view:first-child {
		height: 60rpx;
		font-size: 28rpx;
		color: #7F7F7F;
		border-bottom: 1rpx solid #D7D7D7;
		margin-bottom: 20rpx;
	}

	.productimg image {
		width: 100%;
	}

	.productfooter {
		height: 100rpx;
		width: 100%;
		position: fixed;
		bottom: 0rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}

	.footericon {
		width: 140rpx;
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.footericon text {
		vertical-align: middle;
		font-size: 50rpx;
	}

	.footerbtn {
		height: 80rpx;
		width: 240rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		background-color: #F53218;
	}

	.footer {
		flex: 1;
	}
</style>
