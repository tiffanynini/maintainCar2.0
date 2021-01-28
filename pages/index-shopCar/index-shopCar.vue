<template>
	<view class="shopCar">
		<!-- 自营店 -->
		<view class="ownStores" :key="index1" v-for="(items,index1) in itemsCom">
			<view class="storeCate">
				<!-- 全选 -->
				<view class="checkBox">
					<checkbox class="checkBox1" value="cb" :data-index="index1" :checked="items.selectAllStatus" style="transform:scale(0.7)"
					 color="red" @click="checkboxChange" />
				</view>
				<!-- 自营店 -->
				<view class="">{{items.shopName}}</view>
			</view>
			<view class="storeShop" :key="index" v-for="(items,index) in items.commodity">
				<!-- 单选 -->
				<view class="">
					<checkbox class="checkBox1" value="cb" :data-index1="index1" :data-index="index" :data-index2="items.skuId" :checked="items.checked1" style="transform:scale(0.7)"
					 color="red" @click="singleChange" />
				</view>
				<!-- 图片 -->
				<view class="storeImg">
					<image :src="items.image" mode=""></image>
				</view>
				<view class="">
					<!-- 标题 -->
					<view class="car-pad">
						<view class="">{{items.name}}</view>
						<view class="delete" :data-index1="index1" :data-index="index" :data-index2="items.skuId" @click="delete1">删除</view>
					</view>
					<!-- 描述 -->
					<view class="car-category">汽车类型：轿车 位置：全车</view>
					<!-- 价格 -->
					<view class="car-price">￥{{items.price}}</view>
				</view>
				<!-- 加减 -->
				<view class="add-subtract">
					<!-- 减 -->
					<view class="substract" :data-index1="index1" :data-index="index" :data-index2="items.skuId" @click="substract">-</view>
					<!-- 输入 -->
					<input type="text" v-model="items.num" :data-index1="index1" :data-index="index" :data-index2="items.skuId" class="inp2" @blur="inp2"/>
					<!-- 加 -->
					<view class="add" :data-index1="index1" :data-index="index" :data-index2="items.skuId" @click="add">+</view>
				</view>
			</view>
		</view>
		<!-- 总金额 -->
		<view class="totalMoney1">

		</view>
		<view class="totalMoney">
			<view class="totalPrice">总金额：<view class="money1">{{totalMoney}}</view>元（不含运费）</view>
			<view class="computed" @click="confirmOrder">去结算</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 商品
				// 根据店铺进行渲染
				itemsCom: [/* {
						// 店铺名
						shopName: '京东自营店',
						// 全选的索引
						// index1:0,
						// 全选状态
						selectAllStatus: true,
						// 商品
						commodity: [{
								imgSrc: '../../static/images-index/washCar.jpg',
								title: '汽车贴膜',
								des: '汽车类型：轿车 位置：全车',
								price: 29.9,
								num: 1,
								// 选择
								checked1: true,
								// index2:0
							},
							{
								imgSrc: '../../static/images-index/washCar.jpg',
								title: '板车修复',
								des: '汽车类型：SUV 位置：全车',
								price: 99.9,
								num: 2,
								checked1: true,
								// index2:1
							}
						]
					} */
				],
				// 总价
				totalMoney: 0,
				show: false,
				// ip
				ip:'http://172.16.14.29:6067',
				// token
				token:'88318de7a5b44fc0aa43fadf22e1980a'
			};
		},
		methods: {
			//全选
			checkboxChange(e) {
				// console.log(e);
				// 找出当前全选按钮对应的索引
				let index1 = e.currentTarget.dataset.index;
				this.itemsCom[index1].selectAllStatus = !this.itemsCom[index1].selectAllStatus;
				for (var j = 0; j < this.itemsCom[index1].commodity.length; j++) {
					this.itemsCom[index1].commodity[j].checked1 = this.itemsCom[index1].selectAllStatus;
				};
				this.computedMoney();
			},
			// 单选
			singleChange(e) {
				// index1是店铺索引 index是商品索引
				// 店铺索引
				var Dindex1 = e.currentTarget.dataset.index1;
				// 商品索引
				var Sindex = e.currentTarget.dataset.index;
				
				this.itemsCom[Dindex1].commodity[Sindex].checked1 = !this.itemsCom[Dindex1].commodity[Sindex].checked1;
				let num = 0;
				for (var j = 0; j < this.itemsCom[Dindex1].commodity.length; j++) {
					if (this.itemsCom[Dindex1].commodity[j].checked1 == true) {
						num++;
					}
				}
				if (num == this.itemsCom[Dindex1].commodity.length) {
					this.itemsCom[Dindex1].selectAllStatus = true;
				} else {
					this.itemsCom[Dindex1].selectAllStatus = false;
				};
				this.computedMoney();
			},
			// 加减
			// 减法
			substract(e) {
				// index1 是店铺 index是商品
				let subIndex1 = e.currentTarget.dataset.index1;
				let subIndex = e.currentTarget.dataset.index;
				// 获取到商品id
				var comId = e.currentTarget.dataset.index2;
				// console.log(comId);
				// 获取到num
				if (this.itemsCom[subIndex1].commodity[subIndex].num <= 1) {
					return false;
				} else {
					this.itemsCom[subIndex1].commodity[subIndex].num--;
					// console.log(this.itemsCom[subIndex1].commodity[subIndex].num,1)
				};
				this.changeCarNum(this.itemsCom[subIndex1].commodity[subIndex].num,comId);
				this.computedMoney();

			},
			// 加法
			add(e) {
				// index1 是店铺 index是商品
				console.log(e);
				let addIndex1 = e.currentTarget.dataset.index1;
				let addIndex = e.currentTarget.dataset.index;
				// 获取到商品id
				var comId = e.currentTarget.dataset.index2;
				this.itemsCom[addIndex1].commodity[addIndex].num++;
				this.changeCarNum(this.itemsCom[addIndex1].commodity[addIndex].num,comId)
				this.computedMoney();
			},
			// 输入框失去焦点
			inp2(e) {
				// index1 是店铺 index是商品
				var inpIndex1=e.currentTarget.dataset.index1;
				var inpIndex=e.currentTarget.dataset.index;
				// 获取到商品id
				var comId = e.currentTarget.dataset.index2;
				// console.log(e);
				// console.log(1111);
				this.changeCarNum(this.itemsCom[inpIndex1].commodity[inpIndex].num,comId)
				this.computedMoney();
			},
			// 修改购物车的数量
			changeCarNum(num,id){
				uni.request({
					url:this.ip+'/cart/update?num='+num+'&skuId='+id,
					method:'post',
					header:{
						token:this.token
					},
					data:{
						num:num,
						skuId:id
					},
					success: (res) => {
						// console.log(res);
					}
				})
				// console.log(num,id,'修改');
			},
			// 删除
			delete1(e) {
				uni.showModal({
				    title: '删除',
				    content: '删除该商品？',
				    success:  (res)=> {
				        if (res.confirm) {
				            // index1 是店铺 index是商品
				            let delIndex1=e.currentTarget.dataset.index1;
				            let delIndex=e.currentTarget.dataset.index;
							// 获取到商品id
							var comId = e.currentTarget.dataset.index2;
				            let cars=this.itemsCom;
				            
				            cars[delIndex1].commodity.splice(delIndex,1);
				            // 如果删除的商品就剩最后一个，再删除时就连店铺一起删除
				            if(cars[delIndex1].commodity.length==0){
				            	cars.splice(delIndex1,1);
				            }
				            this.itemsCom=cars;
							uni.showToast({
							    title: '删除成功',
								mask:'false',
							    duration: 2000,
								success:()=>{
									// 调删除购物车的接口
									uni.request({
										url:this.ip+'/cart/removeCartItem?skuId='+comId,
										method:'post',
										header:{
											token:this.token
										},
										success: (res) => {
											console.log(res);
										}
									})
								}
							});
							
							
							this.computedMoney();
				        } else if (res.cancel) {
				            console.log('取消');
				        }
				    }
				});
				
			
			},
			// 计算总价
			computedMoney() {
				let total = 0;
				for (var i = 0; i < this.itemsCom.length; i++) {
					// if(this.itemsCom[i].selectAllStatus==true){
					for (var j = 0; j < this.itemsCom[i].commodity.length; j++) {
						if (this.itemsCom[i].commodity[j].checked1 == true) {
							total += Number(this.itemsCom[i].commodity[j].price) * Number(this.itemsCom[i].commodity[j].num);
						}
					}
				}
				this.totalMoney = total.toFixed(2);
			},
			// 去结算
			confirmOrder(){
				// 在去结算的时候存商品id
				// 如果商品的checkedId1为true，就把商品的skuId存进session里
				// 声明一个空数组
				var arr=[];
				for(var key in arr){
					if(arr.checkedId==true){
						arr.push(arr.skuId);
					}
				}
				var arr1=[111,222,333,444];
				wx.setStorageSync('bbb',arr1);
				
				wx.navigateTo({
					url:'../index-order/index-order'
				});
				
			}


		},
		onLoad() {
			// 查询购物车
			uni.request({
				url:this.ip+'/cart/queryUserCart',
				header:{
					token:this.token
				},
				method:'get',
				success:(res)=>{
					console.log(res.data.data,'购物车页面');
					// 按商家分类
					// 先声明一个空数组
					let arr1=[];
					// 再声明一个空json
					let json1={
						shopName:'xx汽车店',
						selectAllStatus: true,
						commodity:[]
					};
					// 再声明一个json
					let json2={};
					// 再循环json，判断商家id，如果相同,就放到同一个json里面
					
				   for(var key in res.data.data){
					   // console.log(res.data.data[key].merchantId);
					   json2=res.data.data[key];
					   json2.checked1=true;
					   json1.commodity.push(json2);
					   
				   }
					arr1.push(json1);
					// console.log(arr1);
					this.itemsCom=arr1;
					this.computedMoney();
				}
			});
			// console.log(this.itemsCom);
			// console.log(this.totalMoney);
		}
		
	}
</script>

<style lang="less">
	page {
		height: 100%;
	}

	.shopCar {
		// height: 100%;
		// background-color: #F4F4F3;

		// 自营店
		.ownStores {
			background-color: #fff;
			padding: 20rpx 0;
			margin-bottom: 20rpx;

			// 店铺
			.storeCate {
				height: 60rpx;
				border-bottom: 2rpx solid #ccc;
				padding-left: 20rpx;
				font-size: 30rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.checkBox {}
			}

			// 商品
			.storeShop {
				position: relative;
				height: 240rpx;
				padding: 20rpx;
				display: flex;
				margin-bottom: 10rpx;

				.storeImg {
					width: 300rpx;
					height: 260rpx;
					margin-right: 20rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.car-category {
					font-size: 26rpx;
					color: #ccc;
				}

				.car-pad {
					height: 80rpx;
					display: flex;
					justify-content: space-between;

					.delete {
						width: 100rpx;
						height: 40rpx;
						border: 2rpx solid red;
						border-radius: 10rpx;
						color: #fff;
						background-color: red;
						text-align: center;
						line-height: 40rpx;
					}
				}

				.car-price {
					font-size: 36rpx;
					color: red;
					margin-top: 10rpx;
				}

				// 加减
				.add-subtract {
					width: 180rpx;
					height: 60rpx;
					// background-color: pink;
					border: 2rpx solid #ccc;
					border-radius: 14rpx;
					position: absolute;
					bottom: 0rpx;
					right: 16rpx;
					display: flex;
					justify-content: space-between;
					padding-left: 16rpx;
					padding-right: 16rpx;
					font-size: 40rpx;
					align-items: center;
					// 加

					.inp2 {
						border-left: 2rpx solid #ccc;
						border-right: 2rpx solid #ccc;
						width: 100rpx;
						position: absolute;
						left: 50%;
						margin-left: -50rpx;
						height: 100%;
						text-align: center;
					}

					// .uni-number{
					// 	width: 100%;
					// 	height: 60%;
					// }
				}
			}

		}

		// 总金额
		.totalMoney1 {
			height: 100rpx;
			width: 100%;
			// background-color: pink;
		}

		.totalMoney {
			height: 100rpx;
			background-color: #fff;
			position: fixed;
			z-index: 2;
			bottom: 0;
			left: 0;
			width: 100%;
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.totalPrice {
				display: flex;
				font-size: 26rpx;
				height: 100rpx;
				align-items: center;
				margin-left: 20rpx;

				.money1 {
					color: red;
					font-size: 40rpx;
					display: inline;
					margin-right: 10rpx;
				}
			}

			.computed {
				width: 180rpx;
				height: 60rpx;
				background-color: red;
				color: #fff;
				text-align: center;
				line-height: 60rpx;
				border-radius: 12rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
