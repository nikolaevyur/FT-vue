export const scrollTo = (destination, duration = 400, callback) => {
	const
		start = window.pageYOffset,
		startTime = 'now' in window.performance ? performance.now() : new Date().getTime(),
		documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
		windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight,
		destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop,
		destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset)

	if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll)
		if (callback) {
			callback()
		}
		return
	}

	function scroll() {
		const
			now = 'now' in window.performance ? performance.now() : new Date().getTime(),
			time = Math.min(1, ((now - startTime) / duration)),
			timeFunction = (t => (--t) * t * t + 1)(time)

		window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start))

		if (window.pageYOffset === destinationOffsetToScroll) {
			if (callback) {
				callback()
			}
			return
		}

		requestAnimationFrame(scroll)
	}

	scroll()
}

export const scrollOffset = offset => scrollTo(window.pageYOffset + offset)

export const emptyPage = {
	label: '',
	name: '',
	title: '',
	permissions: []
}

export const GROUP_USERS = { id: '/platform/users', name: 'users' }