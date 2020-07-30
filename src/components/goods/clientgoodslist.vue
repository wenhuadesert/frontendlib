<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">Title</h3>
		</div>
		<div class="row">
			<div clas="col-md-12">
				<form>
					<div class="form-row">
						<div class="form-group col-md-2">
							<label for="inputEmail4">商品类别</label>
							<select class="form-control" v-model="categoryId" v-on:change="getListByCondition">
								<option value="0">所有品类</option>
								<option v-for="category in categoryList" v-bind:key="category.categoryId" v-bind:value="category.categoryId">{{category.categoryTag}}</option>
							</select>
						</div>
						<div class="form-group col-md-2">
							<label for="inputPassword4">最低价格筛选</label>
							<input type="text" class="form-control" v-model="lowPrice" v-on:change="getListByCondition">
						</div>
						<div class="form-group col-md-2">
							<label for="inputPassword4">最高价格筛选</label>
							<input type="text" class="form-control" v-model="highPrice" v-on:change="getListByCondition">
						</div>
						<div class="form-group col-md-2">
							<label for="inputEmail4">有货</label>
							<select class="form-control" v-model="goodsStock" v-on:change="getListByCondition">
								<option value="0">都可以</option>
								<option value="1">仅看有货</option>
							</select>
						</div>
						<div class="form-group col-md-2">
							<label for="inputPassword4">品牌检索</label>
							<input type="text" class="form-control" v-model="brand" v-on:change="getListByCondition">
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">商品名称</th>
						<th scope="col">价格</th>
						<th scope="col">库存</th>
						<th scope="col">品牌</th>
						<th scope="col">图</th>
						<th scope="col">操作</th>
					</tr>
				</thead>
				<tbody>

					<tr v-for="gm in goodsList" v-bind:key="gm.goodsId">
						<td>{{gm.goodsTag}}</td>
						<td>￥{{gm.price}}</td>
						<td>库存{{gm.goodsStock}}件</td>
						<td>[{{gm.brand}}]</td>
						<td>
							<img v-bind:src="photoUrl+gm.photoFileName" width="100" height="100" alt="无图片" />
						</td>
						<td>

							<router-link v-bind:to="'/client/goods/view/'+gm.goodsId" class="btn btn-default">详情</router-link>
						</td>
					</tr>

				</tbody>
			</table>


		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	export default {
		name: "GoodsClientList",
		data() {
			return {
				goodsList: [],
				categoryList: [],
				page: 1,
				rows: 10,
				count: 0,
				pageCount: 0,
				photoUrl: "http://localhost:8081/goodsphoto/",
				categoryId: 0,
				lowPrice: 0,
				highPrice: 0,
				brand: "",
				goodsStock:0

			}

		},
		created() { //当前组件的生命周期方法，组件创建后
			this.getCategoryList();
			this.getList();
		},
		methods: {
			getCategoryList() {
				this.axiosJson.get("/category/list/all/page").then(result => {
					if (result.data.status == "ok") {
						this.categoryList = result.data.list;
					} else {
						alert(result.data.message);
					}
				});
			},
			getList() {
				this.axiosJson.get("/goods/list/all/page", {
					params: {
						rows: this.rows,
						page: this.page
					}
				}).then(result => {
					this.goodsList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
				});
			},
			deleteGoods(no) {
				let checkresult = confirm("您确认要删除此商品么");
				if (checkresult) {
					console.log(no);
					this.axiosJson.post("/goods/delete", {
						goodsId: (no)
					}).then(result => {
						alert(result.data.message);
						if (result.data.status == "ok") {
							this.getList();
						}
					});
					console.log(no);
				}
			},
			getListByCondition() {
				console.log(this.categoryId);
				console.log(this.lowPrice);
				console.log(this.highPrice);
				console.log(this.goodsStock);
				console.log(this.brand);
				this.axiosJson.get("/goods/list/condition/page",{
					params:{
						rows:this.rows,
						page:this.page,
						categoryId:this.categoryId,
						lowPrice:this.lowPrice,
						highPrice:this.highPrice,
						goodsStock:this.goodsStock,
						brand:this.brand
					}					
				}).then(result=>{
					if(result.data.status=="OK"){
						this.goodsList=result.data.list;
						this.count=result.data.count;
						this.pageCount=result.data.pageCount;
					}
				});
			}
		}
	}
</script>

<style>
</style>
