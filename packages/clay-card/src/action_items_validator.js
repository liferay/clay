import {Config} from 'metal-state';

let actionItemShape = {
	disabled: Config.bool().value(false),
	href: Config.string().required(),
	icon: Config.string(),
	label: Config.string(),
	separator: Config.bool().value(false),
	type: Config.oneOf(['group', 'item']).value('item'),
};

const actionItemsValidator = Config.oneOfType([
	Config.arrayOf(Config.shapeOf(actionItemShape)),
	Config.object(),
]);

actionItemShape.items = actionItemsValidator;

export {actionItemsValidator};
export default actionItemsValidator;
