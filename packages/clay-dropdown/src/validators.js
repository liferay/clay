import {Config} from 'metal-state';

let itemShape = {
	active: Config.bool().value(false),
	checked: Config.bool().value(false),
	disabled: Config.bool().value(false),
	href: Config.string(),
	icon: Config.string(),
	inputName: Config.string(),
	inputValue: Config.string(),
	label: Config.oneOfType([Config.number(), Config.string()]),
	maxItems: Config.number(),
	separator: Config.bool().value(false),
	title: Config.string(),
	type: Config.oneOf(['checkbox', 'group', 'item', 'radiogroup']).value(
		'item'
	),
};

const itemsValidator = Config.arrayOf(Config.shapeOf(itemShape));

itemShape.items = itemsValidator;

const preferredAlign = Config.oneOf([
	'BottomCenter',
	'BottomLeft',
	'BottomRight',
	'LeftCenter',
	'RightCenter',
	'TopCenter',
	'TopLeft',
	'TopRight',
]);

export {
	itemsValidator,
	preferredAlign,
};