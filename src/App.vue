<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 中间的路由 router-view 区域 -->
		<transition>
			<router-view></router-view>
		</transition>
		
    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-itemhu" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-itemhu" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-itemhu" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-itemhu" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>
  .app-container{
    padding: 40px 0 60px;
		overflow-x: hidden
  }
	.v-enter{
		opacity: 0;
		transform: translateX(100%)
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active, .v-leave-active{
		transition: all .5s ease;
	}

	.mui-bar-tab .mui-tab-itemhu {
			display: table-cell;
			overflow: hidden;
			width: 1%;
			height: 50px;
			text-align: center;
			vertical-align: middle;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #929292;
	}
	.mui-bar-tab .mui-tab-itemhu .mui-icon {
			top: 3px;
			width: 24px;
			height: 24px;
			padding-top: 0;
			padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-itemhu.mui-active {
			color: #007aff;
	}

	.mui-bar-tab .mui-tab-itemhu .mui-icon ~ .mui-tab-label {
			font-size: 11px;
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
	}
	.mint-header{
		z-index: 99;
	}
</style>
