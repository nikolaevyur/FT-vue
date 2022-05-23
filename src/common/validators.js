export const required = (message = 'Заполните обязательные поля') =>
	({
		validator: value => !_.isEmpty(value),
		message
	})
export const maxLength = max =>
	({
		validator: value => _.isEmpty(value) || value.length <= max,
		message: `Превышено максимально допустимое количество символов (${max})`
	})