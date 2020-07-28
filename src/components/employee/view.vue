<template>
      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">删除部门</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">
          	<form action="toview.mvc" method = post>
			  <div class="form-group">
			    <label for="exampleInputEmail1">部门名称</label>
			    <span>  </span>
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">部门编号</label>
			    <span>  </span>
			  </div>
			  <input type="hidden" name="no" value="">
			  <router-link to="/employee/list" class="btn btn-primary">返回</router-link>
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	export default{
		name:"EmployeeView",
		data(){
			return{};
		}
	}
</script>

<style>
</style>
