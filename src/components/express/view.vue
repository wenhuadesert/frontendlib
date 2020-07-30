<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看品类</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label for="exampleInputEmail1">快递单号</label>
					<span> {{express.id}}</span>

				</div>
				
				<div class="form-group">
					<label for="exampleInputPassword1">快递公司</label>
					<span> {{express.expressCompany.name}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">订单号</label>
					<span> {{express.order.id}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">是否送达</label>
					<span> {{express.arrived}}</span>
				</div>

				<router-link to="/employee/express/list" class="btn btn-default">返回</router-link>
			</form>

		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//部门查看组件
	//import axios from "axios";
	export default {
		name: "ExpressView",
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
			//console.log("???")
			this.getExpress()
		},
		methods: {
			getExpress() {
				this.axiosJson.get("/express/get", {
					params: {
						id: this.id
					}
				}).then(result => {
					this.express = result.data.result;
					console.log(this.id);
				});
			}
		}
	}
</script>

<style>
</style>
