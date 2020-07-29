<template>

      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">增加客户</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">
          	<form method = post v-on:submit.prevent="add()">

			  <div class="form-group">
			    <label for="exampleInputEmail1">客户姓名</label>
			    <input type="text" class="form-control" v-model="client.name" required="">
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户性别</label>
			    <input type="text" class="form-control" v-model="client.sex" required="">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户用户名</label>
			    <input type="text" class="form-control" v-model="client.username" required="">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户密码</label>
			    <input type="text" class="form-control" v-model="client.password" required="">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户地址</label>
			    <input type="text" class="form-control" v-model="client.address" required="">
			  </div>
			  <button type="submit" class="btn btn-primary">增加</button>
			  <router-link to="/client/list" class="btn btn-default">取消</router-link>
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"ClientAdd",
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
		methods:{
			add(){
				this.axiosJson.post("/client/add",this.client).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/client/list");
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
