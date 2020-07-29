<template>
	<div class="box box-primary">
		<div class="box-body">
			<form v-on:submit.prevent="submitAdd()">

				<div class="form-row">

					<div class="form-row">

						<div class="form-group col-md-6">
							<label for="inputAddress2">员工照片</label>
							<input type="file" class="form-control" name="employeePhoto" v-on:change="changePhoto($event)">
						</div>
					</div>

					<button type="submit" class="btn btn-primary">提交</button>
					<router-link to="/employee/list" class="btn btn-primary">取消</router-link>
				</div>
			</form>
		</div><!-- /.box-body -->
	</div>
</template>

<script>
	export default {
		name:"GoodsAddPhoto",
		data(){
			return {
				goodsPhoto:Object
			};
		},
		props: {
			no: {
				required: true
			}
		},
		created(){ //当前组件的生命周期方法，组件创建后
			
		},
		methods:{
			changePhoto(event){ //图片选择的处理
				this.goodsPhoto=event.target.files[0];			
			},
			
			submitAdd(){
				let formData = new FormData();
				formData.append("goodsPhoto",this.goodsPhoto);
				formData.append("no",this.no);
				this.axiosUpload.post("/goods/updatephoto",formData,this.no).then(result => {
					if (result.data.status == "ok") {
						alert(result.data.message);
						this.$router.push("/goods/list"); //编程方式跳转到部门列表组件
					} else {
						alert(result.data.message);
					}
				})
			}
		}
	}
</script>

<style>
</style>
