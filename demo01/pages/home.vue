<template>
	<div>
		HOME
		<nuxt-child/>
		<!-- <nuxt-link to="layouts/default">Index</nuxt-link> -->
		<button @click="backGo">返回</button>
		<hr>
  		<button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
  		<div>
  			<ul >
  				<li v-for="(item,index) in posts" :key="index">{{item.releaseUsername}}</li>
  			</ul>
  		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		asyncData({ req, params }) {
			// We can return a Promise instead of calling the callback
			return axios.get('http://localhost:6500/travelList').then((res) => {
				console.log(res.data)
				return { posts: res.data }
			})
		},
		head: {
			title: 'List of posts'
		},
		methods:{
			backGo(){
				this.$router.go(-1)
			}
		}

	}
</script>
<style scoped>
	div{
		color: blue;
	} 
</style>
