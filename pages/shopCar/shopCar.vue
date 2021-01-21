<template>
	<view>
		<view class="container">
			<view class="context">
				<view class="header">
					<checkbox value="cb" :checked="pCheckStatus" @click="checkChange" />
					<text>自营店</text>
				</view>
				<view class="section" v-for="(v,i) in skuData" :key="i">
					<view class="set1-top">
						<label class="checkbox">
							<checkbox value="cb" :checked="v.checked" @click="cCheckChange(i)" :data-id="v.skuId"/>
						</label>
					</view>
					<view class="set1-middle">
						<image :src="v.image"></image>
					</view>
					<view class="set1-bottom">
						<view>
							<text>{{v.name}}</text>
							<image src="../../static/images/del.png" @click="del(v.skuId)"></image>
						</view>
						<text class="set1-p2">汽车类型：轿车  位置：全车</text>
						<view>
							<text>单价：{{v.price}}</text>
							<view class="counter">
								<text class="reduce-add" :disabled="true" @click="minusReduce(i,v.skuId)" :style="{'pointer-events': isPointer}">-</text>
								<text class="amount">{{v.num}}</text>
								<text class="reduce-add1" :disabled="true" @click="addReduce(i,v.skuId)">+</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bu"></view>
			<view class="footer">
				<text class="footer-font">总额：<text class="money" space="emsp"> {{totalJi}} </text> 元(不含运费)</text>
				<navigator url="../confirmOrder/confirmOrder" open-type="navigate">
				    <view class="footer-btn">去结算</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				pCheckStatus:false,//父级的checkbox
				//定义是否可以点击减号
				isPointer:"auto",
				//总金额
				totalJi:0,
				//渲染的数据
				skuData:[
					{
						skuId:1,
						name:'汽车贴膜（每10CM）',
						image:'http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=c3b4ff848a61a132357823e9cdfb1a74d38de325077b43e61feb69e9d413f2a9',
						price:29.90,
						num:1,
						totalPrice:29.90,
						checked:false
					},
					{
						skuId:2,
						name:'汽车贴膜（每10CM）',
						image:'http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=c3b4ff848a61a132357823e9cdfb1a74d38de325077b43e61feb69e9d413f2a9',
						price:29.90,
						num:1,
						totalPrice:29.90,
						checked:false
					},
					{
						skuId:3,
						name:'汽车贴膜（每10CM）',
						image:'http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=c3b4ff848a61a132357823e9cdfb1a74d38de325077b43e61feb69e9d413f2a9',
						price:29.90,
						num:1,
						totalPrice:29.90,
						checked:false
					}
				],
				//用来控制checkbox选中的个数
				jiShu:0,
				//临时的总金额
				tempTotal:0.00,
			}
		},
		mounted(){
			// wx.showLoading({
			//   title: '加载中',
			//   success:()=>{
			// 	  this.init();
			//   }
			// })
		},
		methods:{
			//初始化渲染页面
			init(){
				// wx.request({
				// 	url:'http://172.17.1.221:6060/cart/queryUserCart',
				// 	method:'get',
				// 	success:(res)=>{
				// 		console.log(res);
				// 		//需要给每一项添加一个checked属性,默认为false
						// wx.hideLoading();
				// 	},
				// 	fail:(err)=>{
				// 		console.log(err);
				// 	}
				// })
				
			},
			//增加
			addReduce(index,id) {
				//传递index过来判断对应的数组里面的数量进行修改
				this.isPointer = "auto";
				for(let i=0;i<this.skuData.length;i++){
					if(i === index){
						this.skuData[i].num++;
					}
				}
				this.addOrMinus(this.count,id)
			},
			//减少
			minusReduce(index,id){
				for(let i=0;i<this.skuData.length;i++){
					if(i === index){
						if(this.skuData[i].num > 1){
							this.skuData[i].num--;
						}else{
							this.isPointer = "none";
						}
					}
				}
				this.addOrMinus(this.count,id);
				// if(this.count > 1){
				// 	for(let i=0;i<this.skuData.length;i++){
				// 		if(i === index){
				// 			this.skuData[i].num--;
				// 		}
				// 	}
				// 	this.addOrMinus(this.count,id)
				// }else{
				// 	this.isPointer = "none";
				// }
			},
			//增加或者减少数量调用的接口
			addOrMinus(count,id){
				// wx.request({
				// 	url:'http://172.17.1.221:6060/cart/update',
				// 	method:'post',
				// 	data:{
				// 		num:count,
				// 		skuId:id
				// 	},
				// 	success:(res)=>{
				// 		console.log(res);
				// 	},
				// 	fail:(err)=>{
				// 		console.log(err);
				// 	}
				// })
			},
			totalMoney(){
				
			},
			//父级的checkbox选中的时候,所有的子级都需要选中
			checkChange(){
				//如果父级checkbox最初为true
				if(this.pCheckStatus){
					for(let i=0;i<this.skuData.length;i++){
						this.skuData[i].checked = false;
						this.pCheckStatus = false;
					}
				}else{
					//如果父级checkbox最初为false
					for(let i=0;i<this.skuData.length;i++){
						this.skuData[i].checked = true;
						this.pCheckStatus = true;
					}
				}
				this.jiShu = 0;//注意会影响值，所以必须清0
			},
			//子级的某一个checkbox选中的时候
			cCheckChange(index){
				//让点击的子级选中，并且计数
				for(let i=0;i<this.skuData.length;i++){
					if(index === i){
						this.skuData[i].checked = !this.skuData[i].checked;
						//如果子级选中的话，总金额将会改变,强行设置小数点后只保留两位
						if(this.skuData[i].checked){
							this.tempTotal += this.skuData[i].totalPrice;
							this.totalJi = parseFloat(this.tempTotal).toFixed(2);
							this.jiShu++;
						}else{
							// console.log(this.totalJi);
							// console.log(this.skuData[i].totalPrice);
							this.tempTotal -= this.skuData[i].totalPrice;
							this.totalJi = parseFloat(this.tempTotal).toFixed(2);
						}
						break;
					}
				}
				// console.log(this.totalJi);
				//当数量为数组的长度时
				let shu = 0;
				if(this.jiShu === this.skuData.length){
					//如果子级全部选中
					for(let i=0;i<this.skuData.length;i++){
						if(this.skuData[i].checked){
							shu++;
						}
					}
					//父级选中
					if(shu == this.skuData.length){
						this.pCheckStatus = true;
						this.jiShu = 0;
					}else{
						this.pCheckStatus = false;
					}
				}else{
					this.pCheckStatus = false;
				}
			},
			del(id){
				// wx.showModal({
				// 	content: '确定删除吗？',
				// 	  success (res) {
				// 	    if (res.confirm) {
				// 	      wx.request({
				// 	      	url:'http://172.17.1.221:6060/cart/removeCartItem',
				// 	      	method:'POST',
				// 	      	data:{
				// 	      		skuId:id,
				// 	      	},
				// 	      	success: (res) => {
				// 	      		console.log(res);
				// 	      		//需要重新渲染页面
					      		// wx.showLoading({
					      		//   title: '加载中',
					      		//   success:()=>{
					      		// 	  this.init();
					      		//   }
					      		// })
				// 	      	}
				// 	      })
				// 	    } 
				// 	}
				// })
			},
		},
		watch:{
			totalJi:{
				handler:function(){
					
				}
			},
			deep:true,
			immediate:true
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
		navigator{
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
	}
	
</style>
