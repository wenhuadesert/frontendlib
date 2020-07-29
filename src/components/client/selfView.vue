<template>
      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">查看客户信息</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">
          	<form>
			  <div class="form-group">
			    <label for="exampleInputEmail1">客户姓名：</label>
			    <span v-text="client.name">  </span>
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户性别：</label>
			    <span v-text="client.sex"></span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户地址：</label>
			    <span v-text="client.address"></span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">客户用户名：</label>
			    <span v-text="client.username"> </span>
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">客户密码：</label>
			    <span v-text="client.password">  </span>
			  </div>
			  <input type="hidden" name="no" value="">
			  <router-link v-bind:to="'/client/client/modify/'+client.id" class="btn btn-primary">我要修改</router-link>
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"ClientView",
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
			}
		}
	}
</script>

<style>
</style>
