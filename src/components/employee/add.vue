<template>

      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">增加员工</h3>

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
			    <label for="exampleInputEmail1">员工姓名</label>
			    <input type="text" class="form-control" v-model="employee.name" required="">
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">员工性别</label>
			    <input type="text" class="form-control" v-model="employee.sex" required="">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">员工用户名</label>
			    <input type="text" class="form-control" v-model="employee.username" required="">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">员工密码</label>
			    <input type="text" class="form-control" v-model="employee.password" required="">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">员工照片</label>
			    <input type="file" class="form-control" name="employeePhoto" v-on:change="changePhoto($event)" >
			  </div>
			  <button type="submit" class="btn btn-primary">增加</button>
			  <router-link to="/employee/employee/list" class="btn btn-default">取消</router-link>
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"EmployeeAdd",
		data(){
			return{
				employee:{
					id:0,
					name:"",
					sex:"",
					username:"",
					password:""
				},
				employeePhoto:Object
			};
		},
		methods:{
			changePhoto(event){ //图片选择的处理
				this.employeePhoto=event.target.files[0];			
			},
			add(){
				let formData = new FormData();
				formData.append("name",this.employee.name);
				formData.append("sex",this.employee.sex);
				formData.append("username",this.employee.username);
				formData.append("password",this.employee.password);
				formData.append("employeePhoto",this.employeePhoto);
				
				this.axiosJson.post("/employee/add",formData).then(result=>{
					if(result.data.status=="ok"){
						alert(result.data.message);
						this.$router.push("/employee/employee/list");
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
