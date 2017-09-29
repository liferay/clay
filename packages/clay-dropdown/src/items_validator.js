import {Config} from 'metal-state';

let itemShape = {
  active: Config.bool().value(false),
  checked: Config.bool().value(false),
  disabled: Config.bool().value(false),
  indicatorSymbol: Config.string(),
  inputName: Config.string(),
  inputValue: Config.string(),
  label: Config.string(),
  separator: Config.bool().value(false),
  type: Config.oneOf(['checkbox', 'group', 'item', 'radiogroup']).value('item'),
  url: Config.string().required(),
};

const itemsValidator = Config.arrayOf(Config.shapeOf(itemShape));

itemShape.items = itemsValidator;

export {itemsValidator};
export default itemsValidator;
