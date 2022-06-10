<template>
	<div class='dropdown-wrapper'>
		<div class='dropdown-button' :class='{"-active": isActive}' @click='toggle'>
			<svg width='10' height='12'>
				<use :xlink:href='href' />
			</svg>
		</div>
		<div class='dropdown-menu' v-if='isActive'>
			<slot :isActive='isActive'></slot>
			<!-- <slot name='drop-item'></slot> -->
		</div>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	data() {
		return {
			isActive: false,
		}
	},
	props: {
		
	},
	
	computed: {
		href() {
			return `#dropdown-icon`
		}
	},
	mounted() {
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive;
		}
	},
}
</script>

<style lang='scss' scoped>
	.dropdown {
		&-wrapper {
			position: relative;
		}
		&-button {
			border: 1px solid black;
			&.-active {
				border-color: red;
			}
		}
		&-menu {
			position: absolute;
			right: 0px;
			left: 0px;
			border: 1px solid black;
			&-item {
				border-bottom: 1px solid black;
			}
		}
	}
</style>