<template>
	<div class="contain">
		<div class="carousels_box" @mouseenter='clear()' @mouseleave='autoplay()'>
			<ul>
				<li @click="turn(index)" v-for='(item,index) in carousel_dets' :key='index'
				:class="{
					'first':(active>1&&index==active-2)||(active<=1&&index==active+4-1),
					'two':(index==active-1&&active>=1)||(active<1&&index==active+4),
					'three':index==active,
					'four':(index==active+1&&active<4)||(active>3&&index==active-4),
					'five':(index==active+2&&active<3)||(active>=3&&index==active+1-4),
					}"
				>{{index}}-{{active}}
					<img :src="item.imgsrc" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				carousel_dets:[
					{
						imgsrc:require('@/assets/a.jpg'),
					},
					{
						imgsrc:require('@/assets/b.jpg'),
					},
					{
						imgsrc:require('@/assets/c.jpg'),
					},
					{
						imgsrc:require('@/assets/d.jpg'),
					},
					{
						imgsrc:require('@/assets/e.jpg'),
					}
				],
				active:0,
				timer:null,
				flag: true
			}
		},
		mounted (){
			this.autoplay()
		},
		methods:{
			turn(ind){
				this.active=ind
			},
			autoplay(){
				this.timer=setInterval(()=>{
					if(this.active<4){
						this.active++
					}else{
						this.active=0
					}
				},2000)

			},
			clear(){
				clearInterval(this.timer)
			}
		}
	}
</script>
<style>
	*{
		padding: 0;
		margin: 0;
	}
	li{
		list-style-type: none;
	}
	.carousels_box{
		
	}
	.carousels_box ul{
		position: relative;
		width: 100%;
		height: 500px;
		margin: 0 auto;
	}
	.carousels_box li{
		position: absolute;
		transition: all .8s;
		width: 60%;
	}
	.carousels_box img{
		width: 100%;
	}
	.first{
		left: 0;
		z-index: 1;
		transform: scale(.85);
		opacity: .5;

	}
	.two{
		left: 10%;
		z-index: 2;
		transform: scale(.95);
		opacity: .75;
	}
	.three{
		left: 20%;
		z-index: 3;

	}
	.four{
		left:30%;
		z-index: 2;
		transform: scale(.95);
		opacity: .75;
	}
	.five{
		left: 40%;
		z-index: 1;
		transform: scale(.85);
		opacity: .5;
	}
</style>
<!-- 'first':(index==active-2&&active>1)||(active<2&&index==active+5-2),
'two':(index==active-1&&active>1)||(active<1&&index==active+5-2),
'three':index==active,
'four':(index==active+1&&active<4)||(active=4&&index==active+1-5),
'five':(index==active+2&&active<3)||(active>2&&index==active+2-5), -->