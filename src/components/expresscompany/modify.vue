<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改快递公司</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputEmail1">快递公司名字</label>
		<input type="text" class="form-control" v-model="expresscomapny.excname" >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">快递公司电话</label>
		<input type="text" class="form-control" v-model="expresscomapny.phone">
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
	//部门修改组件
	export default {
		name:"ExpresscompanyModify",
		data(){
			return {
				expresscomapny:{
					excname:"",
					excphone:"",
					excid:0
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let excNo=this.$route.params.excid;
			this.getStorehouse(excNo);
			
		},
		methods:{
			getExpresscomapny(no){
				
				this.axiosJson.get("/expresscomapny/get?no="+no).then(result=>{
					this.expresscomapny=result.data.result;
				});
			},
			modify(){
				this.axiosJson.post("/expresscomapny/modify",this.expresscomapny).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/expresscomapny/list"); //编程方式跳转到仓库列表组件
					}
					else{
						alert(result.data.message);
						this.$router.push("/expresscomapny/list");
					}
				});
			}
		}
	}
</script>

<style>
</style>
