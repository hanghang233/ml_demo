<template>
	<div class="PostList">
		<div class="loading" v-if="loading">
			loading
		</div>
		<div class="posts">
			这里显示post列表
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PostList',
		data: function() {
			return {
				posts: {},
				loading: false
			}
		}
	}
</script>

<style scoped>
	.PostList .posts {
		background-color: white;
		padding: 0.5rem;
		margin: 0.5rem 3rem;
	}
	.PostList .posts li {
		list-style: none;
		margin-bottom: 14px;
		border-bottom: 1px solid #E7E7E7;
		line-height: 30px;
	}
	.PostList .posts ul li img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.PostList .posts li span {
		display: inline-block;
		text-align: center;
		width: 70px;
		font-size: 12px;
		margin: 0 10px;
	}
	.PostList .posts a {
		text-decoration: none;
		color: inherit;
	    -o-text-overflow: ellipsis;
	    white-space: nowrap;
	    display: inline-block;
	    vertical-align: middle;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    max-width: 70%;
	}
	.PostList .posts a:visited {
		color:#858585;
	}	
	.PostList .posts .last_reply {
		float: right;
   		font-size: 0.7rem;
   	    margin-top: 0.3rem;
	}
</style>