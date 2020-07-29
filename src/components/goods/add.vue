<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">增加商品</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="add()">
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
				 
				<button type="submit" class="btn btn-primary">确定</button>
				<router-link to="/goods/list" class="btn btn-default">取消</router-link>
			</form>

		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default {
		name: "GoodsAdd",
		data() {
			return {
				goods: {
					goodsTag:"",
					price: 0,
					goodsStock: 0,
					brand: "",
					
					storehouse:{
						storehouseId:0,
						
					},
					category:{
						categoryId:0
					}
					
					
				}
			};
		},
		methods: {
			add() {
				this.axiosJson.post("/goods/add", this.goods).then(result => {
					if (result.data.status == "ok") {
						alert(result.data.message);
						console.log(result.data.intResult);
						this.$router.push("/goods/add/photo/"+result.data.intResult); //编程方式跳转到部门列表组件
						
						
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
