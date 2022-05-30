<template>
	<div class="dropdown-wrapper">
		ListView
		{{color}}
		<Input v-model="storeText" placeholder="Hello" />
		<router-view></router-view>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	inheritAttrs: false,
	data() {
		return {
			text1: ''
		}
	},
	props: {
		color: String,
	},
	// watch: {
	// 	text1(val) {
	// 		console.log(this.text1)
	// 		this.setFilters(val)
	// 	}
	// },
	
	computed: {
		...mapGetters('app1', ['activeTab', 'filters', 'getCurrentFilter']),
		href() {
			return `#dropdown-icon`
		},
		storeText: {
			get() {
				return this.getCurrentFilter || null
			},
			set(val) {
				this.setFilters(val)
			} 
		}
	},
	mounted() {
		this.setActiveTab(this.$route.fullPath)
		// this.text1 = this.getCurrentFilter || null
	},
	methods: {
		...mapActions('app1', ['setActiveTab', 'setFilters']),
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
