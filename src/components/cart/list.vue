<template>

	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">购物车</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">编号</th>
						<th scope="col">商品名称</th>
						<th scope="col">价格</th>
						<th scope="col">件数</th>
						<th scope="col">品牌</th>
						<th scope="col">操作</th>
					</tr>
				</thead>
				<tbody>

					<tr v-for="good in clientList[0].goods" v-bind:key="good.goodsId">
						<td>{{good.goodsId}}</td>
						<td>{{good.goodsTag}}</td>
						<td>{{good.price}}</td>
						<td><input type="text" class="form-control" v-model="good.cartCount" size="1"/></td>
						<td>{{good.brand}}</td>
						<td>
							<a href="#" v-on:click="modifyCart($route.params.cliid, good.goodsId, good.cartCount)" class="btn btn-default">修改</a>
							<a href="#" v-on:click="deleteCart($route.params.cliid, good.goodsId)" class="btn btn-danger">删除</a>
							<router-link v-bind:to="'/client/goods/view/'+good.goodsId" class="btn btn-default">查看</router-link>
						</td>
					</tr>

				</tbody>
			</table>

			<router-link to="/client/goods/list" class="btn btn-default">我还要买买买！</router-link>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default {
		name: "CartList",
		data() {
			return {
				clientList: [],
				page: 1,
				rows: 10,
				count: 0,
				pageCount: 0
			};
		},
		created() { //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJson.get("/client/cart/list/all/page", {
					params: {
						id:this.$route.params.cliid,
						rows: this.rows,
						page: this.page
					}
				}).then(result => {
					this.clientList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
				});
			},
			deleteCart(id, goodsid) {
				let checkresult = confirm("您确认要删除么");
				if (checkresult) {
					this.axiosJson.post("/client/cart/delete", 
						{
							id:id,
							goods:[{goodsId:goodsid}]
						}).then(result => {
						alert(result.data.message);
						if (result.data.status == "ok") {
							this.getList();
						}
					});
				}
			},
			modifyCart(id, goodsid, count){
				let checkresult = confirm("您确认要修改么");
				if(checkresult){
					this.axiosJson.post("/client/cart/modify",
						{
							id:id,
							goods:[{goodsId:goodsid, cartCount:count}]
						}
						).then(result=>{
							if(result.data.status=="ok"){
								alert(result.data.message);
									this.getList();
							}else{
								alert(result.data.message);	
							}
						});	
					}
				}
			}
	}
</script>

<style>
</style>
