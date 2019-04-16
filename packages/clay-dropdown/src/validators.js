import {Config} from 'metal-state';

let itemShape = {
	active: Config.bool().value(false),
	checked: Config.bool().value(false),
	contentRenderer: Config.string(),
	disabled: Config.bool().value(false),
	href: Config.string(),
	icon: Config.string(),
	icons: Config.shapeOf({
		left: Config.string(),
		right: Config.string(),
	}),
	inputName: Config.string(),
	inputValue: Config.string(),
	label: Config.oneOfType([Config.number(), Config.string()]),
	maxItems: Config.number(),
	separator: Config.bool().value(false),
	target: Config.oneOf(['_blank', '_self']),
	title: Config.string(),
	type: Config.oneOfType([
		Config.oneOf([
			'checkbox',
			'group',
			'item',
			'radio',
			'radiogroup',
			'separator',
		]),
		Config.string(),
	]).value('item'),
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

export {itemShape, itemsValidator, preferredAlign};
