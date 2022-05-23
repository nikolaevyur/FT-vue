const requireAll = (r) => r.keys().forEach(r)


const requireContext = require.context('@/assets/icons/', true, /\.svg$/)

requireAll(requireContext)
