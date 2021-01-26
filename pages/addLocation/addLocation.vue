<template>
	<view class="body">
		<view>
			<text>收货人:</text>
			<input class="right" placeholder="请输入收货人姓名" type="text" value="" />
		</view>
		<view>
			<text>手机号码:</text>
			<input class="right" placeholder="请输入手机号码" type="text" value="" />
		</view>
		<!-- 三级联动地址插件 -->
		<view>
			<view @click="addressShow = true">所在地区:</view>
			<view class="right" @click="addressShow = true">
				{{address}}
				<pickerAddress v-model="addressShow" @confirm="addresspick" />
			</view>
		</view>
		<view>
			<text>详细地址</text>
			<input class="right" placeholder="请输入详细地址:" type="text" value="" />
		</view>
		<view>
			<label>
				<radio value="" /><text class="right">设置为默认地址</text>
			</label>
		</view>
	</view>
</template>

<script>
	import pickerAddress from '@/components/liudx-pickerAddress/index.vue'
	    export default {
	        data() {
	            return {
					//三级联动地址插件
	                addressShow: false,
	                form: {
	                    province: '',
	                    city: '',
	                    area: '',
	                },
	                address: '四川省成都市高新区',
					//状态码 0:修改地址,1:添加地址
					status:0
	            }
	        },
	        onLoad() {
	
	        },
	        methods: {
				//三级联动地址插件
	            addresspick(obj) {
	                let arr = [ 'province', 'city', 'area'];
	                let place = '';
	                arr.map(key => {
	                    this.form[key] = obj[key].AreaId
	                    place += obj[key].AreaName
	                })
	                this.address = place
	            },
				initialize(){
					// console.log(this.status);
					switch(this.status){
						//状态码 0:未付款
						case 0:
						uni.setNavigationBarTitle({
						    title: '修改收货地址'
						});
						break;
						//状态码 1:已付款未发货
						case 1:
						uni.setNavigationBarTitle({
						    title: '添加收货地址'
						});
						break;
					}
				}
	        },
	        components: {
	            pickerAddress
	        },
			onLoad(res){
				//状态码 0:修改地址,1:添加地址
				this.status=Number(res.status);
				this.initialize();
			}
	    }
</script>

<style lang="less" scoped>
	.body{
		height: 100%;
		background-color: #F4F4F3;
		view{
			background-color: #fff;
			display: flex;
			align-items: center;
			height: 80rpx;
			line-height: 80rpx;
			border-bottom: 1rpx solid #D7D7D7;
			padding: 0 20rpx;
			.right{
				margin-left: 20rpx;
			}
		}
	}
</style>
