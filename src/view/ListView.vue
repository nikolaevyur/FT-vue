<template>
	<div class="dropdown-wrapper">
		ListView
		{{color}}
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	data() {
		return {
			
		}
	},
	props: {
		color: String,
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

<style lang="scss" scoped>
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
