<template>

	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">Title</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">快递单号</th>
						<th scope="col">快递公司编号</th>
						<th scope="col">订单号</th>
						<th scope="col">送达</th>
					</tr>
				</thead>
				<tbody>

					<tr v-for="express in expressList" v-bind:key="express.id">
						<td>{{express.id}}</td>
						<td>{{express.expressCompany.id}}</td>
						
						<td>{{express.order.id}}</td>
						<td>{{express.arrived}}</td>
						<td>
							<router-link v-bind:to="'modify/'+express.id" class="btn btn-default">修改</router-link>
							<a href="#" v-on:click="deleteExpress(express.id)" class="btn btn-danger">删除</a>
							<router-link v-bind:to="'view/'+express.id" class="btn btn-default">查看</router-link>
						</td>
					</tr>

				</tbody>
			</table>

			<router-link to="add" class="btn btn-default">增加快递单</router-link>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default {
		name: "ExpressList",
		data() {
			return {
				expressList: [],
				page: 1,
				rows: 10,
				count: 0,
				pageCount: 0,
			};
		},
		created() { //当前组件的生命周期方法，组件创建后
			console.log("????????");
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJson.get("/express/list/all/page", {
					params: {
						rows: this.rows,
						page: this.page
					}
				}).then(result => {
					this.expressList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
				});
			},
			deleteExpress(no) {
				let checkresult = confirm("您确认要删除此快递单么");
				if (checkresult) {
					console.log(no);
					this.axiosJson.post("/express/delete", {
						id:(no)
					}).then(result => {
						alert(result.data.message);
						if (result.data.status == "ok") {
							this.getList();
						}
					});
					console.log(no);
				}


			}
		}
	}
</script>

<style>
</style>
