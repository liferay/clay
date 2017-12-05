import {Config} from 'metal-state';

let actionItemShape = {
	disabled: Config.bool().value(false),
	icon: Config.string(),
	label: Config.string(),
	separator: Config.bool().value(false),
	type: Config.oneOf(['group', 'item']).value('item'),
	url: Config.string().required(),
};

const actionItemsValidator = Config.arrayOf(Config.shapeOf(actionItemShape));

actionItemShape.items = actionItemsValidator;

export {actionItemsValidator};
export default actionItemsValidator;
