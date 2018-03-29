<template>
	<div>
		<div class="loading-bar" :class="nowStatus">
			<span class="press"></span>
		</div>
	</div>
</template>

<script>
	import Rem from '@/assets/js/rem'
	import { mapGetters } from 'vuex'
	export default {
		name: 'app',
		data () {
			return {
				transitionName: 'slide-go',
				nowUrl: '/'
			}
		},
		computed: {
			...mapGetters([
				'nowStatus',
				'getShopCarLength'
			])
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Header {
		background:#5a5555 ;
		height: 50px;
	}
	a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	 span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style>
