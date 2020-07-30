<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">增加快递单</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="add()">
				<div class="form-group">
					<label for="exampleInputPassword1">快递单号</label>
					<input type="text" class="form-control" v-model="express.id" required>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">快递公司编号</label>
					<input type="text" class="form-control" v-model="express.expressCompany.id" required>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">订单编号</label>
					<input type="text" class="form-control" v-model="express.order.id" required>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">是否送达</label>
					<input type="text" class="form-control" v-model="express.arrived" required>
				</div>
				 
				<button type="submit" class="btn btn-primary">确定</button>
				<router-link to="list" class="btn btn-default">取消</router-link>
			</form>

		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default {
		name: "ExpressAdd",
		data() {
			return {
				express: {
					id: 0,
					arrived: "",
						
					expressCompany:{
						id:0
					},
					order:{
						id:0
					}
				}
			};
		},
		methods: {
			add() {
				this.axiosJson.post("/express/add", this.express).then(result => {
					if (result.data.status == "ok") {
						alert(result.data.message);
						console.log(result.data.intResult);
						this.$router.push("/employee/express/list"); //编程方式跳转到部门列表组件
						
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
