<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加快递公司</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  
	  <div class="form-group">
		<label for="exampleInputPassword1">名字</label>
		<input type="text" class="form-control" v-model="expresscompany.excname" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">电话</label>
	  		<input type="text" class="form-control" v-model="expresscompany.excphone" required>
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/employee/expresscompany/list" class="btn btn-default">取消</router-link>
	  
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
		  
</template>

<script>
	//import axios from "axios";
	export default {
		name:"ExpressCompanyCAdd",
		data(){
			return {
				expresscompany:{
					excid:"",
					excname:"",
					excphone:""
				}
			};
		},
		methods:{
			add(){
				this.axiosJson.post("/expresscompany/add",this.expresscompany).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/employee/expresscompany/list"); //编程方式跳转到快递公司列表组件
					}
					else{
						alert(result.data.message);
						this.$router.push("/employee/expresscompany/list"); 
					}
				});
			}
		}
	}
</script>

<style>
</style>
