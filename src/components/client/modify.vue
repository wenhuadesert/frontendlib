<template>

      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">修改客户信息</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">
          	<form method = "post" v-on:submit.prevent="modify()">
			  <div class="form-group">
			    <label for="exampleInputEmail1">客户姓名</label>
			    <input type="text" class="form-control" v-model="client.name">
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户性别</label>
			    <input type="text" class="form-control" v-model="client.sex">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户地址</label>
			    <input type="text" class="form-control" v-model="client.address">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">客户用户名</label>
			    <input type="text" class="form-control" v-model="client.username">
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户密码</label>
			    <input type="text" class="form-control" v-model="client.password">
			  </div>
			  <input type="hidden" name="no" value="">
			  <button type="submit" class="btn btn-primary">修改</button>
			  <router-link to="/employee/client/list" class="btn btn-default">取消</router-link>
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"ClientModify",
		data(){
			return{
				client:{
					id:"",
					name:"",
					sex:"",
					username:"",
					password:"",
					address:""
				}
			};
		},
		created(){
			let clientId=this.$route.params.cliid;
			this.getClient(clientId);
		},
		methods:{
			getClient(id){
				this.axiosJson.get("/client/get?id="+id).then(result=>{
					this.client=result.data.result;
				});
			},
			modify(){
				this.axiosJson.post("/client/modify",this.client).then(result=>{
					if(result.data.status=="ok"){
						alert(result.data.message);
						this.$router.push("/employee/client/list");
					}else{
						alert(result.data.message);	
					}
				});				
			}
		}
	}
</script>

<style>
</style>
