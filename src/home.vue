<template>
	<div class="container">
		<div class="view_box">
			<router-view></router-view>
		</div>
		<div class="btn">
			<router-link v-for='(btn,index) in btns' :key='index' :to="btn.btn_link">
				<div>
					<p>{{btn.btn_text}}</p>
				</div>
			</router-link>

		</div>
	</div>
</template>
<style type="text/css">
	.container{
		width:100%;
		height:500px;
	}
	.view_box{
		width: 80%;
		height: 450px;
		margin: 0 auto;
		transition: all .8s;
	}
	.btn div{
		display: inline-block;
		width:120px;
		height: 65px;
		margin: 20px 5px;
		border-radius: 5px;
		background-color: #5ccccc;
	}
	.btn div p{
		margin-top: 20px;
	}
</style>
<script>
	export default{
		data (){
			return{
				btns:[
					{
						btn_text:'caouset1',
						btn_link:'/home/test'
					},
					{
						btn_text:'caouset2',
						btn_link:'/home/test2'
					},
					{
						btn_text:'caouset3',
						btn_link:'/home/test3'
					}
				]
			}
		}
	}
</script>
