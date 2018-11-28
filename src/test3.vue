<template>
	<div class="cont-box">
			<div class="img-box" v-on:mouseover='stop()' v-on:mouseout='move()'>
				<transition-group tag='ul' name='image'>
					<li v-for='(item,index) in imgArr' v-show='index===img_ind' :key='index'>
						<img :src="item.imgsrc"/>
					</li>
				</transition-group>
			</div>
			<div class="list-box">
				<ul>
					<li v-for='(item,index) in imgArr' :class="{'active':index===img_ind}"
						:key="index" @click='change(index)' @mouseover='stop()' v-on:mouseout='move()' ></li>
				</ul>
			</div>
			<div class="zibiao">
				<div class="zuo" @click='pre()' @mouseover='stop()' v-on:mouseout='move()'><</div>
				<div class="you" @click='next()' @mouseover='stop()' v-on:mouseout='move()'>></div>
			</div>
		</div>
</template>
<script>
	export default{
		data(){
			return{
				imgArr:[
					{imgsrc:require('@/assets/a.jpg')},
					{imgsrc:require('@/assets/b.jpg')},
					{imgsrc:require('@/assets/c.jpg')},
					{imgsrc:require('@/assets/d.jpg')}
				],
				img_ind:0,
				timer:null
			}
		},
		mounted(){
			this.autoplay()
		},
		methods:{
			autoplay(){
					this.img_ind++;
					if(this.img_ind===4){
						this.img_ind=0
					}
				},
				play(){
					this.timer=setInterval(this.autoplay,2500)
				},
				stop(){
					clearInterval(this.timer)
				},
				move(){
					this.timer=setInterval(this.autoplay,2500)
				},
				change(i){
					this.img_ind=i
				},
				next(){
					this.img_ind++;
					if(this.img_ind===4){
						this.img_ind=0
					}
				},
				pre(){
					this.img_ind--;
					if(this.img_ind<0){
						this.img_ind=3
					}
					
				},
		}
	}
</script>
<style>
	li{
		list-style: none;
	}
	.cont-box{
		position: relative;
		margin: 0 auto;
		height: 100%;
		width: 80%;
		
	}
	.img-box{	
		width: 100%;
	}
	.img-box img{
		width: 100%;
		height: auto;
	}
	
	.img-box>ul{
		position: absolute;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		padding: 0;
		overflow: hidden;
	}
	.img-box>ul>li{
		width: 100%;
		height: auto;
		position: absolute;
	}
	.zibiao{
		position: absolute;
		height:100%;
		width: 100%;
		top: 0;
		left: 0;
	}
	.zibiao>div{
		cursor: pointer;
		clear: both;
		top: 50%;
		width: 20px;
		transform: translateY(-50%);
		height: 50px;
		background-color: gainsboro;
		line-height: 50px;
		position: absolute;
	}
	.you{
		right: 0;
	}
	.list-box ul{
		position: absolute;
		width: 100%;
		bottom: -30px;
		margin: 0 auto;
		z-index: 10;
		text-align: center;
		
	}
	.active{
		background-color:#000000;
	}
	.list-box li{
		cursor: pointer;
		width: 10px;
		text-align: center;
		height: 10px;
		border-radius: 10px;
		border: 1px solid black;
		display: inline-block;
		margin: 5px;
		
	}
		.image-enter-active {
		/*opacity: 1;	*/				   /*淡入淡出*/
	    
	    transform: translateX(0);		/*划入划出*/
	    transition: all 1.5s ease;
	  }
	  .image-leave-active {
	  	/*opacity: 0;*/
	    transform: translateX(-100%);
	    transition: all 1.5s ease;
	  }
	  .image-enter {
	  	/*opacity: 0;*/
	    transform: translateX(100%);
	  }
	  .image-leave {
	  	/*opacity: 1;*/
	    transform: translateX(0);
	}
</style>