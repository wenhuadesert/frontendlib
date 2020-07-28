<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">修改部门</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">
				
				<div class="form-group">
					<label for="exampleInputEmail1">商品名称</label>
					<input type="text" class="form-control" v-model="goods.goodsTag" required>
					<small id="emailHelp" class="form-text text-muted"></small>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">商品价格</label>
					<input type="text" class="form-control" v-model="goods.price" required>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">库存</label>
					<input type="text" class="form-control" v-model="goods.goodsStock" required>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">品牌</label>
					<input type="text" class="form-control" v-model="goods.brand" required>
				</div>
				
				<div class="form-group">
					<label for="exampleInputPassword1">仓库编号</label>
					<input type="text" class="form-control" v-model="goods.storehouse.storehouseId" >
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">品类编号</label>
					<input type="text" class="form-control" v-model="goods.category.categoryId" >
				</div>
				
				
				
				<button type="submit" class="btn btn-primary">提交</button>
				<router-link to="/goods/list" class="btn btn-default">取消</router-link>
			</form>
	
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	//部门修改组件
	export default {
		name: "GoodsModify",
		data() {
			return {
				goods: {
					goodsId: 0,
					goodsTag: "",
					price: 0,
					goodsStock: 0,
					brand:"",
					
					storehouse:{
						storehouseId:0,
						address: "",
						capacity: 0
					},
					category:{
						categoryId:0,
						categoryTag: ""
					}
					
				}
			};
		},
		created() { //组件的创建生命周期函数
			let goodsNo = this.$route.params.no;
			this.getGoods(goodsNo);
	
		},
		methods: {
			getGoods(no) {
	
				axios.get("http://localhost:8080/goods/get?no=" + no).then(result => {
					this.goods = result.data.result;
					console.log(this.goods.storehouse.storehouseId)
				});
				
			},
			modify() {
				axios.post("http://localhost:8080/goods/modify", this.goods).then(result => {
					if (result.data.status == "ok") {
						alert(result.data.message);
						this.$router.push("/goods/list"); //编程方式跳转到部门列表组件
					} else {
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
