<template>
	<div>
		<div class="row">
			<div clas="col-md-12">
				<form>
				  <div class="form-row">
					<div class="form-group col-md-3">
					  <label for="inputPassword4">姓名检索</label>
					  <input type="text" class="form-control" v-model="name" v-on:change="getListByCondition">
					</div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">性别检索</label>
					  <input type="text" class="form-control" v-model="sex" v-on:change="getListByCondition">
					</div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">地址检索</label>
					  <input type="text" class="form-control" v-model="address" v-on:change="getListByCondition">
					</div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">用户名检索</label>
					  <input type="text" class="form-control" v-model="username" v-on:change="getListByCondition">
					</div>
				  </div>
				</form>
			</div>
		</div>
	      <!-- Default box -->
		<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">客户列表</h3>
	        </div>
	        <div class="box-body">
				<table class="table table-bordered">
				  <thead>
			        <tr>
			            <th scope="col">编号</th>
			            <th scope="col">姓名</th>
			            <th scope="col">性别</th>
			            <th scope="col">客户地址</th>
			            <th scope="col">客户账号</th>
			            <th scope="col">客户密码</th>
			            <th scope="col">操作</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr v-for="cm in clientList" v-bind:key="cm.id">
			            <td>{{cm.id}}</td>
			            <td>{{cm.name}}</td>
			            <td>{{cm.sex}}</td>
			            <td>{{cm.address}}</td>
			            <td>{{cm.username}}</td>
			            <td>{{cm.password}}</td>
			            <td><router-link v-bind:to="'/employee/client/modify/'+cm.id" class="btn btn-primary">修改</router-link>
			            	<a href="#" v-on:click="deleteClient(cm.id)" class="btn btn-danger">删除</a> 
			            	<router-link v-bind:to="'/employee/client/view/'+cm.id" class="btn btn-info">查看</router-link>  
			            </td>
			        </tr>
			      </tbody>
			    </table>
				
				<div class="row">
					<div class="col-md-6">
					个数:<span>{{count}}</span>	页数:<span>{{page}}</span>/<span>{{pageCount}}</span>
					</div>
					<div class="col-md-6 text-right">
						<nav>
						  <ul class="pagination justify-content-end">
							<li class="page-item"><a class="page-link" href="#">首页</a></li>
							<li class="page-item"><a class="page-link" href="#" >上页</a></li>
							<li class="page-item"><a class="page-link" href="#" >下页</a></li>
							<li class="page-item"><a class="page-link" href="#" >末页</a></li>
						  </ul>
						</nav>
					</div>
				</div> 
			    
	        	<router-link to="/employee/client/add" class="btn btn-default">增加新部门</router-link>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
	</div>
</template>

<script>
	//import axios from "axios";
	export default {
		name:"ClientList",
		data(){
			return{
				clientList:[],
				page:1,
				rows:6,
				count:0,
				pageCount:0,
				name:"",
				sex:"",
				username:"",
				address:""
			};
		},
		created(){//当前组件的生命周期方法，组件创建后
			this.getListByCondition();
		},
		methods:{
			getListByCondition(){
				this.axiosJson.get("/client/list/condition/page",{
					params:{
						rows:this.rows,
						page:this.page,
						name:this.name,
						sex:this.sex,
						username:this.username,
						address:this.address
					}
				}).then(result=>{
					this.clientList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteClient(id){
				let checkresult=confirm("您确认要删除该客户吗");
				if (checkresult){
					this.axiosJson.post("/employee/client/delete",{id:id}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="ok"){
							this.getList();
						}
					});
				}
			}
		}
	}
</script>

<style>
</style>
