const requireComponent = require.context('@/components', true, /^[^_].+\.vue$/i)

requireComponent.keys().forEach(filename => {
	const componentConfig = requireComponent(filename)

	// Get PascalCase name of component
	const componentName = _.upperFirst(
		_.camelCase(/\/\w+\.vue/.exec(filename)[0].replace(/^\.\//, '').replace(/\.\w+$/, ''))
	)

	Vue.component(componentName, componentConfig.default || componentConfig)
})

