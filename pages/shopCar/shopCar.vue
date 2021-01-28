<template>
	<view>
		<view class="container">
			<view class="context" v-for="(v,i) in skuData" :key="i">
				<view class="header">
					<checkbox value="cb" :checked="v.pCheckStatus" @click="checkChange(v.merchantId)" />
					<text>{{v.merchantName}}</text>
				</view>
				<view class="section" v-for="(val,index) in v.content" :key="index">
					<view class="set1-top">
						<label class="checkbox">
							<checkbox value="cb" :checked="val.checked" @click="cCheckChange(v.merchantId,index,val.skuId)"/>
						</label>
					</view>
					<view class="set1-middle">
						<image :src="val.image"></image>
					</view>
					<view class="set1-bottom">
						<view>
							<text>{{val.name}}</text>
							<image src="../../static/images/del.png" @click="del(val.skuId)"></image>
						</view>
						<text class="set1-p2">汽车类型：轿车  位置：全车</text>
						<view>
							<text>单价：{{val.price}}</text>
							<view class="counter">
								<text class="reduce-add" :disabled="true" @click="minusReduce(index,val.skuId)" :style="{'pointer-events': isPointer}">-</text>
								<text class="amount">{{val.num}}</text>
								<text class="reduce-add1" :disabled="true" @click="addReduce(index,val.skuId)">+</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bu"></view>
			<view class="footer">
				<text class="footer-font">总额：<text class="money" space="emsp"> {{totalJi}} </text> 元(不含运费)</text>
				<view class="footer-btn" @click="jieSuan">去结算</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//定义是否可以点击减号
				isPointer:"auto",
				//总金额
				totalJi:0,
				//选中的skuid
				checkId:[],
				//渲染的数据
				skuData:[],
			}
		},
		mounted(){
			wx.showLoading({
			  title: '加载中',
			  success:()=>{
				  this.init();
			  }
			})
		},
		methods:{
			//初始化渲染页面
			init(){
				//清空数组
				this.skuData=[];
				//本地存储用户id,以及token值
				wx.setStorageSync('userId','1');
				wx.setStorageSync('token','88318de7a5b44fc0aa43fadf22e1980a');
				wx.request({
					url:'http://172.16.14.29:6067/cart/queryUserCart',
					header:{
						token: wx.getStorageSync('token')
					},
					method:'get',
					success:(res)=>{
						if(res.statusCode === 200){
							if(typeof res.data.data === 'object'){
								wx.hideLoading();
								//需要给每一项添加一个checked属性,默认为false
								for(let i in res.data.data){
									res.data.data[i].checked = false;
									res.data.data[i].pCheckStatus = false;
									res.data.data[i].jiShu = 0;
								}
								//将json对象转化为数组
								let tempSkuData = this.jsToArray(res.data.data);
								//循环遍历数组，转化为符合要求的样式
								
								//最初的数据样式
								this.skuData.push({
									merchantId:tempSkuData[0].merchantId,
									merchantName:tempSkuData[0].merchantName,
									pCheckStatus:false,
									jiShu:0,
									content:[
										{
											"name": tempSkuData[0].name,
											"skuId": tempSkuData[0].skuId,
											"image": tempSkuData[0].image,
											"price": tempSkuData[0].price,
											"num": tempSkuData[0].num,
											"totalPrice": tempSkuData[0].totalPrice,
											"checked":tempSkuData[0].checked
										}
									]
								});
								outer:
								for(let i=0;i<tempSkuData.length;i++){
									for(let j=i+1;j<tempSkuData.length;j++){
										if(tempSkuData[i].merchantId === tempSkuData[j].merchantId){
											//如果merchantId相等则将后者的数据合并到前者数据中
											this.skuData[i].content.push(
												{
													"name": tempSkuData[j].name,
													"skuId": tempSkuData[j].skuId,
													"image": tempSkuData[j].image,
													"price": tempSkuData[j].price,
													"num": tempSkuData[j].num,
													"totalPrice": tempSkuData[j].totalPrice,
													"checked":tempSkuData[j].checked
												},
											) 
										}else{
											//如果merchantId不相等则将后者的数据合并到初始化数据中
											this.skuData.push({
												merchantId:tempSkuData[j].merchantId,
												merchantName:tempSkuData[j].merchantName,
												pCheckStatus:false,
												jiShu:0,
												content:[
													{
														"name": tempSkuData[j].name,
														"skuId": tempSkuData[j].skuId,
														"image": tempSkuData[j].image,
														"price": tempSkuData[j].price,
														"num": tempSkuData[j].num,
														"totalPrice": tempSkuData[j].totalPrice,
														"checked":tempSkuData[j].checked
													},
												]
											}) 
										}
									}
									break outer;//只循环一次
								}
								wx.setStorageSync('skuData',this.skuData);
							}
						}
					},
					fail:(err)=>{
						console.log(err);
					}
				})
			},
			// //json对象转化为数组的方法
			jsToArray(json){
				let arr = [];
				let map = {};
				//循环遍历json,初始化一个数组下标
				let count = -1;
				for(let i in json){//i其实就是key
					map[i] = ++count;
				}
				for(let i in map){
					arr[map[i]] = json[i];
				}
				return arr;
			},
			//增加
			addReduce(index,id) {
				//传递index过来判断对应的数组里面的数量进行修改
				this.isPointer = "auto";
				for(let i=0;i<this.skuData.length;i++){
					for(let j=0;j<this.skuData[i].content.length;j++){
						if(j === index){
							this.skuData[i].content[j].num++;
							this.addOrMinus(this.skuData[i].content[j].num,id,1);//状态为1是加，0是减
						}
					}
				}
			},
			//减少
			minusReduce(index,id){
				for(let i=0;i<this.skuData.length;i++){
					for(let j=0;j<this.skuData[i].content.length;j++){
						if(j === index){
							if(this.skuData[i].content[j].num > 1){
								this.skuData[i].content[j].num--;
								this.addOrMinus(this.skuData[i].content[j].num,id,0);
							}else{
								this.isPointer = "none";
							}
						}
					}
				}
			},
			//增加或者减少数量调用的接口
			addOrMinus(count,id,status){
				wx.request({
					url:'http://172.16.14.29:6067/cart/update?num='+count+'&skuId='+id,
					method:'post',
					header:{
						token:wx.getStorageSync('token')
					},
					success:(res)=>{
						// console.log(res);
						if(res.statusCode === 200){
							for(let i=0;i<this.skuData.length;i++){
								for(let j=0;j<this.skuData[i].content.length;j++){
									if(this.skuData[i].content[j].skuId === id){
										//判断是否选中，不选中下边的值不能发送变化
										if(this.skuData[i].content[j].checked){
											if(status){
												this.totalJi += this.skuData[i].content[j].price;
											}else{
												this.totalJi -= this.skuData[i].content[j].price;
											}
										}
									}
								}
							}
						}
					},
					fail:(err)=>{
						console.log(err);
					}
				})
			},
		
			//父级的checkbox选中的时候,所有的子级都需要选中
			checkChange(merId){
				for(let i=0;i<this.skuData.length;i++){
					if(this.skuData[i].merchantId === merId){
						//对应的子级的jishu清0
						this.skuData[i].jiShu = 0;
						
						//最开始为true,则对应商家和全部的子级为false
						if(this.skuData[i].pCheckStatus){
							this.skuData[i].pCheckStatus = false;
							for(let j=0;j<this.skuData[i].content.length;j++){
								this.skuData[i].content[j].checked = false;
								this.totalJi -= this.skuData[i].content[j].price * this.skuData[i].content[j].num;
							}
						}else{
							//最开始为false,则对应商家和全部的子级为true
							this.skuData[i].pCheckStatus = true;
							for(let j=0;j<this.skuData[i].content.length;j++){
								this.skuData[i].content[j].checked = true;
								//总金额要变
								this.totalJi += this.skuData[i].content[j].price * this.skuData[i].content[j].num;
							}
						}
					}
				}
			},
			//子级的某一个checkbox选中的时候
			cCheckChange(merId,inx,cSkuId){
				//循环对应的商家
				for(let i=0;i<this.skuData.length;i++){
					//找到对应的商家
					if(this.skuData[i].merchantId === merId){
						//循环对应商家里面的子级
						for(let j=0;j<this.skuData[i].content.length;j++){
							//对应的子级亮
							if(j === inx){
								this.skuData[i].content[j].checked = !this.skuData[i].content[j].checked;
								if(this.skuData[i].content[j].checked){
									//计数
									this.skuData[i].jiShu++;
									this.totalJi += this.skuData[i].content[j].price * this.skuData[i].content[j].num;
								}else{
									this.skuData[i].jiShu = Math.abs(--this.skuData[i].jiShu);
									this.totalJi -= this.skuData[i].content[j].price * this.skuData[i].content[j].num;
								}
							}
							//判断子级亮的个数
							if(this.skuData[i].jiShu == this.skuData[i].content.length){
								//父级亮，全部子级也亮
								this.skuData[i].pCheckStatus = true;
								for(let k=0;k<this.skuData[i].content.length;k++){
									this.skuData[i].content[k].checked = true;
								}
							}else{
								//父级不亮
								this.skuData[i].pCheckStatus = false;
							}
						}
					}
				}
			},
			//删除
			del(id){
				let that = this;
				wx.showModal({
					content: '确定删除吗？',
					  success (res) {
					    if (res.confirm) {
					      wx.request({
					      	url:'http://172.16.14.29:6067/cart/removeCartItem?skuId='+id,
					      	method:'POST',
							header:{
								token:wx.getStorageSync('token')
							},
					      	success: (res) => {
								if(res.statusCode === 200 ){
									//需要重新渲染页面
									wx.showToast({
										icon:"success",
										title:"删除成功",
										duration:1000,
										success: () => {
											//重新渲染页面
											that.init();
										}
									})
								}
					      	}
					      })
					    } 
					}
				})
			},
			//去结算
			jieSuan(){
				this.checkId = [];
				let goodsId = [];
				for(let i=0;i<this.skuData.length;i++){
					for(let j=0;j<this.skuData[i].content.length;j++){
						if(this.skuData[i].content[j].checked){
							//将选中的商品id添加到本地存储
							goodsId.push(this.skuData[i].content[j].skuId);
							wx.setStorageSync('goodsIds',goodsId);
							this.checkId.push({
								"merchantId":this.skuData[i].merchantId,
								"merchantName":this.skuData[i].merchantName,
								"price":0,
								"youHui":0,
								"youFei":0,
								"xiaoJi":0,
								"content":[
									{
										"name": this.skuData[i].content[j].name,
										"skuId": this.skuData[i].content[j].skuId,
										"image": this.skuData[i].content[j].image,
										"price": this.skuData[i].content[j].price,
										"num": this.skuData[i].content[j].num,
										"totalPrice": this.skuData[i].content[j].totalPrice,
									}
								]
							});
							wx.navigateTo({
								url:'../confirmOrder/confirmOrder'
							})
						}
					}
				}
				if(!this.checkId.length>0){
					//循环完了如果没有选择数据则不能跳页面
					wx.showToast({
						title:'请选择商品后才可结算!',
						icon:'none'
					})
				}
				wx.setStorageSync('checkId',this.checkId);
				wx.setStorageSync('zongJiE',this.totalJi);
			}
		},
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	body,html{
		height: 100%;
	}
	.container{
		background-color: #F4F4F3;
		height: 100%;
		overflow: hidden;
	}
	.context{
		background-color: #fff;
		padding-left: 10rpx;
	}
	checkbox .wx-checkbox-input{
	  border-radius: 50%;/* 圆角 */
	  width: 26rpx; /* 背景的宽 */
	  height: 26rpx; /* 背景的高 */
	}
	/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
	checkbox .wx-checkbox-input.wx-checkbox-input-checked{
	  border: 1rpx solid #FF783B;
	  background: #FD8F33;
	}
	/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
	checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{
	  border-radius: 50%;/* 圆角 */
	  width: 40rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
	  height: 40rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
	  line-height: 40rpx;
	  text-align: center;
	  font-size:30rpx; /* 对勾大小 30rpx */
	  color:#fff; /* 对勾颜色 白色 */
	  background: transparent;
	  transform:translate(-50%, -50%) scale(1);
	  -webkit-transform:translate(-50%, -50%) scale(1);
	}
	
	.header{
		border-bottom: 2px solid #F2F2F2;
		height: 68rpx;
		line-height: 68rpx;
		margin-top: 20rpx;
		text{
			font-size: 32rpx;
		}
	}
	.section{
		display: flex;
		margin-top: 20rpx;
		.set1-top{
			height: 160rpx;
			line-height: 140rpx;
		}
		.set1-middle{
			margin-right: 30rpx;
			image{
				width: 200rpx;
				height: 160rpx;
			}
		}
		.set1-bottom{
			display: flex;
			flex-direction: column;
			font-size: 32rpx;
			width: 100%;
			>view:first-child{
				display: flex;
				justify-content: space-between;
				>text{
					font-size: 30rpx;
				}
				image{
					width: 38rpx;
					height: 40rpx;
					padding-right: 20rpx;
				}
			}
			.set1-p2{
				margin-top: 50rpx;
				color: #AAAAAA;
				font-size: 30rpx;
				line-height: 40rpx;
			}
			>view:last-child{
				display: flex;
				justify-content: space-between;
				>text{
					font-size: 30rpx;
				}
				.counter {
					font-size: 34upx;
					vertical-align: bottom;
					display: inline-block;
					height: 50rpx;
					padding-right: 22rpx;
					display: flex;
					margin-top: 4rpx;
					.reduce-add {
						display: inline-block;
						border: 1px solid #707070;
						width: 40rpx;
						height: 40rpx;
						line-height: 40rpx;
						text-align: center;
						font-size: 36rpx;
						vertical-align: middle;
						border-top-left-radius: 14rpx;
						border-bottom-left-radius: 14rpx;
					}
					.reduce-add1 {
						display: inline-block;
						border: 1px solid #707070;
						width: 40rpx;
						height: 40rpx;
						line-height: 40rpx;
						text-align: center;
						font-size: 36rpx;
						vertical-align: middle;
						border-top-right-radius: 14rpx;
						border-bottom-right-radius: 14rpx;
					}
					.amount {
						display: inline-block;
						width: 60rpx;
						height: 40rpx;
						line-height: 40rpx;
						text-align: center;
						border-top: 1px solid #707070;
						border-bottom: 1px solid #707070;
						vertical-align: middle;
						color: #000;
					}
				}
			}
			
		}
	}
	.bu{
		height: 100rpx;
		background: #fff;
	}
	.footer{
		background-color: #fff;
		font-size: 32rpx;
		position: fixed;
		bottom: 0;
		left: 0rpx;
		padding-left: 20rpx;
		height: 70rpx;
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		.footer-font{
			.money{
				color: #F53218;
			}
		}
		.footer-btn{
			width: 140rpx;
			height: 50rpx;
			background-color: #F53218;
			border-radius: 12rpx;
			color: #fff;
			text-align: center;
			line-height: 50rpx;
			margin-right: 40rpx;
			font-size: 30rpx;
		}
	}
	
</style>
