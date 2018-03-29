<template>
	<div class="app-init home-index">
		<header class="public-header">
				<form class="search-box clear">
						<div class="fl logo">
							<span class="iconfont icon-xiaomi"></span>
						</div>
						<div class="input-box" @click="$router.openPage('/search')">
							<span class="iconfont icon-sousuo-copy absolute"></span>
							<input type="text" class="input-controller" placeholder="搜索商品名称" readonly />
						</div>
						<div class="myself-center fr" @click="$router.openPage('/mine')">
							<span class="iconfont icon-smile"></span>
						</div>
				</form>
				<nav class="menu-box scroll-box-x noscroll">
					<ul class="wrap-box clear">
						<li class="item" :class="{'active': index == navActiveIndex}" v-for="(nav, index) in navList" @click="navChange(index)">{{nav.name}}</li>
					</ul>
				</nav>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				'navList': [{
					name: '推荐'
				},{
					name: '智能'
				},{
					name: '电视'
				},{
					name: '电脑'
				},{
					name: '全面屏'
				},{
					name: '生活周边'
				}],
				navActiveIndex: 0,
				bannerList: [{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/01.png',
					href: '/detail/1001'
				},{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/02.jpg',
					href: '/detail/1002'
				},{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/03.jpg',
					href: '/detail/1003'
				},{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
					href: '/detail/1004'
				}],
			}
		},
		methods: {
			navChange(index) {
				this.navActiveIndex = index
			}
		}
	}
</script>

<style type="text/sass" lang="sass">

	.home-index .tab-box
		top: 2.5rem
	.home-index .tab-box.mi-tj .nav-mi-tj a
			display: block
			width:  25%
	.home-index .shop-box
		background-color: #fff

</style>
