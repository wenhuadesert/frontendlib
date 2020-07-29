<template>
	
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
			    
	        	<router-link to="/employee/client/add" class="btn btn-default">增加新部门</router-link>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default {
		name:"ClientList",
		data(){
			return{
				clientList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){//当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJson.get("/client/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.clientList=result.data.list;
					this.cout=result.count;
					this.pageCount=result.pageCount;
				});
			},
			deleteClient(id){
				let checkresult=confirm("您确认要删除该客户吗");
				if (checkresult){
					this.axiosJson.post("/client/delete",{id:id}).then(result=>{
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
