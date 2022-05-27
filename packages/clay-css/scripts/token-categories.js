module.exports = {
	grays: {
		regex: /--((white)|(black)|(gray))/gm,
	},
	colors: {
		regex: /--((blue)|(indigo)|(purple)|(pink)|(red)|(orange)|(yellow)|(green)|(teal)|(cyan))/gm,
	},
	globals: {
		regex: /--((border-radius)|(rounded)|(component)|(font-family)|(font-weight))/gm,
	},
	layout: {
		regex: /--((spacer)|(border-radius)|(rounded)|(breakpoint))/gm,
	},
	'primary-colors': {
		regex: /--primary/gm,
	},
	'secondary-colors': {
		regex: /--secondary/gm,
	},
	'success-colors': {
		regex: /--success/gm,
	},
	'info-colors': {
		regex: /--info/gm,
	},
	'warning-colors': {
		regex: /--warning/gm,
	},
	'danger-colors': {
		regex: /--danger/gm,
	},
	'light-colors': {
		regex: /--light/gm,
	},
	'dark-colors': {
		regex: /--dark/gm,
	},
	link: {
		regex: /--link/gm,
	},
	btn: {
		regex: /--(?!btn-primary|btn-secondary|btn-success|btn-info|btn-warning|btn-danger|btn-light|btn-dark|btn-link|btn-outline|btn-sm|btn-lg|btn-monospaced)btn/gm,
	},
	'btn-lg': {
		regex: /--btn-lg/gm,
	},
	'btn-sm': {
		regex: /--btn-sm/gm,
	},
	'btn-monospaced': {
		regex: /--(?!btn-monospaced-lg|btn-monospaced-sm)btn-monospaced/gm,
	},
	'btn-monospaced-lg': {
		regex: /--btn-monospaced-lg/gm,
	},
	'btn-monospaced-sm': {
		regex: /--btn-monospaced-sm/gm,
	},
	'btn-primary': {
		regex: /--btn-primary/gm,
	},
	'btn-secondary': {
		regex: /--btn-secondary/gm,
	},
	'btn-success': {
		regex: /--btn-success/gm,
	},
	'btn-info': {
		regex: /--btn-info/gm,
	},
	'btn-warning': {
		regex: /--btn-warning/gm,
	},
	'btn-danger': {
		regex: /--btn-danger/gm,
	},
	'btn-light': {
		regex: /--btn-light/gm,
	},
	'btn-dark': {
		regex: /--btn-dark/gm,
	},
	'btn-link': {
		regex: /--btn-link/gm,
	},
	alert: {
		regex: /--alert/gm,
	},
	'form-control': {
		regex: /--input/gm,
	},
	table: {
		regex: /--(?!table-list|table-cell)table/gm,
	},
	'table-cell': {
		regex: /--(?!table-list)table-cell/gm,
	},
	'table-list': {
		regex: /--table-list/gm,
	},
};
