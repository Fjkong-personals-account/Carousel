<template>
	<div class="page">
		<ul class="cont">
			<li class="a" v-for="(item,index) in carousel_dets" :key="index"
			:class="{
			'now':active == index,
			'pre':index==active-1&&active!=0,
			'next':index==active+1&&active!=carousel_dets.length
			}" @click="turn(index)" @mouseenter="clearPlay" @mouseleave="AutoPlay">
				<img :src="item.imgsrc" alt="">
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
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
				active: 0,
				timer: null,
				timer2: null,
				speed: 4000,
				flag: true
			}
		},
		mounted () {
			this.AutoPlay()
		},
		methods: {
			pre () {
				if (this.active!=0) {
					this.active--
				}
			},
			next () {
				if (this.active!=this.carousel_dets.length-1) {
					this.active++
				}
			},
			turn (index) {
				if (index==this.active -1) {
					this.pre()
				} else if (index == this.active +1) {
					this.next()
				}
			},
			AutoPlay () {
				this.timer = setInterval(()=>{
					if (this.active<this.carousel_dets.length-1&&this.flag) {
						this.active++
					} else if(this.active==this.carousel_dets.length-1&&this.flag){
						this.active--
						this.flag=false
					} else if(this.active>0&&!this.flag) {
						this.active--
					} else if(this.active==0&&!this.flag) {
						this.active++
						this.flag = true
					}
				},this.speed)
			},
			clearPlay () {
				clearInterval(this.timer)
			}
		}
	}
</script>
<style>
	body,ul,li {
		margin: 0;
		padding: 0;
	}
	.cont {
		position: relative;
		height:300px;
		margin: 0 auto;
		width: 100%;
	}
	.cont li {
		position: absolute;
		display: inline-block;
		left: 20%;
		top: 50px;
		width: 60%;
		height:auto;
	}
	li.a {
		display: none;
	}
	li.pre {
		display: block;
		margin-left: -15%;
		z-index: 50;
		transition: all .8s;
		cursor: pointer;
		opacity: .75;
	}
	li.next {
		display: block;
		margin-left: 15%;
		z-index: 50;
		transition: all .8s;
		cursor: pointer;
		opacity: .75;
	}
	li.now {
		display: block;
		z-index: 88;
		transform: scale(1.3);
		transition: all .8s;
	}
	.cont li img {
		width: 100%;
		height:auto;
		box-shadow: 0 2px 20px #aaa;
	}
</style>