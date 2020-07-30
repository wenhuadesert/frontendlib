<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">修改品类</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">


				<div class="form-group">
					<label for="exampleInputEmail1">快递公司编号</label>
					<input type="text" class="form-control" v-model="express.expressCompany.id" required>
					<small id="emailHelp" class="form-text text-muted"></small>
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">订单号</label>
					<input type="text" class="form-control" v-model="express.order.id" required>
					<small id="emailHelp" class="form-text text-muted"></small>
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">送达状态</label>
					<input type="text" class="form-control" v-model="express.arrived" required>
					<small id="emailHelp" class="form-text text-muted"></small>
				</div>



				<button type="submit" class="btn btn-primary">提交</button>
				<router-link to="/employee/express/list" class="btn btn-default">取消</router-link>
			</form>

		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	//部门修改组件
	export default {
		name: "ExpressModify",
		data() {
			return {
				express: {
					id: 0,
					arrived: "",
						
					expressCompany:{
						id:0,
						name:""
					},
					order:{
						id:0
					}
				}
			};
		},
		props: {
			id: {
				required: true
			}
		},
		created() { //组件的创建生命周期函数
			this.getExpress();

		},
		methods: {
			getExpress() {

				this.axiosJson.get("/express/get", {
						params:{
							id:this.id
						}
					}

				).then(result => {
					this.express = result.data.result;
				});

			},
			modify() {
				this.axiosJson.post("/express/modify", this.express).then(result => {
					if (result.data.status == "ok") {
						alert(result.data.message);
						//this.$router.push("/goods/list"); //编程方式跳转到部门列表组件
						this.$router.push("/employee/express/list");
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
