<template>
	
	      <!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">Title</h3>
	        </div>
	        <div class="box-body">
				<table class="table table-bordered">
				  <thead>
			        <tr>
			            <th scope="col">编号</th>
			            <th scope="col">部名</th>
			            <th scope="col">编码</th>
			            <th scope="col">操作</th>
			        </tr>
			      </thead>
			      <tbody>
			      <c:forEach items="${departmentList }" var="dm">
			        <tr>
			            <td></td>
			            <td></td>
			            <td></td>
			            <td><a href="tomodify.mvc" class="btn btn-primary">修改</a>
			            	<a href="todelete.mvc" class="btn btn-danger">删除</a> 
			            	<a href="toview.mvc" class="btn btn-info">查看</a>  
			            </td>
			        </tr>
			      </c:forEach>
			      </tbody>
			    </table>
			    
	        	<a href="toadd.mvc" class="btn btn-default">增加新部门</a>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	export default{
		name:"EmployeeList",
		data(){
			return{};
		}
	}
</script>

<style>
</style>
