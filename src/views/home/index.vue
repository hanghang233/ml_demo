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
		<div ref="view01" class="app-init scroll-box tab-box mi-tj footer-hack" v-show="navActiveIndex == 0">
			<swiper :list="bannerList"></swiper>
			<div class="nav-mi-tj clear">
				<a href="javascript:;" class="fl">
				  <img @click="$router.openPage('/pay')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292984819.png" alt="">
				</a>
				<a href="javascript:;" class="fl">
				  <img @click="$router.openPage('/pay')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292372054.png" alt="">
				</a>
				<a href="javascript:;" class="fl">
				  <img @click="$router.openPage('/pay')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022291629252.png" alt="">
				</a>
				<a href="javascript:;" class="fl">
				  <img @click="$router.openPage('/pay')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022290460400.png" alt="">
				</a>
			</div>
			<div class="shop-item clear">
				<img @click="$router.openPage('/detail/1001')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114551289342.png" class="fl href" alt="">
				<img @click="$router.openPage('/detail/1004')" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" class="fr href" style="margin-bottom: 0.05rem" alt="">
				<img @click="$router.openPage('/detail/1005')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png" class="fr href" alt="">
			</div>

			<div class="shop-item clear">
				<img @click="$router.openPage('/detail/1003')"  v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg'" alt="">
			</div>

			<div class="shop-item clear">
				<img @click="$router.openPage('/detail/1006')" v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115034174111.png'" alt="">
			</div>

			<div class="shop-item clear">
				<img @click="$router.openPage('/detail/1007')" v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115033089933.png'" alt="">
			</div>

			<div class="shop-item">
				<div class="shop-box clear">
					<div class="shop-box-item" v-for="target in shoplist" @click="$router.openPage(target.href)">
						<img v-lazy="target.src" alt="" />
					 	<p class="title">{{ target.title }}</p>
			            <p class="con">{{ target.con }}</p>
			            <p class="money">
			              <span class="small">￥</span> {{ target.money }}
			            </p>
					</div>
				</div>
			</div>
		</div>
		<div ref="view02" class="app-init scroll-box tab-box mi-tj footer-hack" v-show="navActiveIndex == 1">
			这里是智能
		</div>
		<div ref="view03" class="app-init scroll-box tab-box mi-tj footer-hack" v-show="navActiveIndex == 2">
			这里是电视
		</div>
		<div ref="view04" class="app-init scroll-box tab-box mi-tj footer-hack" v-show="navActiveIndex == 3">
			这里是电脑
		</div>
		<div ref="view05" class="app-init scroll-box tab-box mi-tj footer-hack" v-show="navActiveIndex == 4">
			这里是全面屏
		</div>
		<div ref="view06" class="app-init scroll-box tab-box mi-tj footer-hack" v-show="navActiveIndex == 5">
			这里是生活周边
		</div>
	</div>
</template>

<script>
	import swiper from '../../components/swiper'
	import VueDB from '../../util/vue-db/vue-db'
	let DB = new VueDB()
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
				shoplist : [
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				},
				{
					src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
					title: '米家感应灯',
					con: '举步之明，光明立现',
					money: 49,
					href: '/detail/1008'
				}],
			}
		},
		methods: {
			navChange(index) {
				this.navActiveIndex = index
			}
		},
		components: {
			swiper
		},
		mounted() {
			this.navActiveIndex = DB.getItemOnce('home-index-nowIndex').toNumber() || 0;
			setTimeout(()=>{
		        this.$refs.view01.scrollTop = DB.getItemOnce('home-index-view01').toNumber() || 0
		        this.$refs.view02.scrollTop = DB.getItemOnce('home-index-view02').toNumber() || 0
		        this.$refs.view03.scrollTop = DB.getItemOnce('home-index-view03').toNumber() || 0
		        this.$refs.view04.scrollTop = DB.getItemOnce('home-index-view04').toNumber() || 0
		        this.$refs.view05.scrollTop = DB.getItemOnce('home-index-view05').toNumber() || 0
		        this.$refs.view06.scrollTop = DB.getItemOnce('home-index-view06').toNumber() || 0
	
		      }, 10)
		},
		beforeRouteLeave (to, from, next) {
	      DB.setItem('home-index-view01', this.$refs.view01.scrollTop)
	      DB.setItem('home-index-view02', this.$refs.view02.scrollTop)
	      DB.setItem('home-index-view03', this.$refs.view03.scrollTop)
	      DB.setItem('home-index-view04', this.$refs.view04.scrollTop)
	      DB.setItem('home-index-view05', this.$refs.view05.scrollTop)
	      DB.setItem('home-index-view06', this.$refs.view06.scrollTop)

	      DB.setItem('home-index-nowIndex', this.navActiveIndex)
	      next();
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
