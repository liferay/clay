import ClayIcon from '../ClayIcon';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let clayIcon;

describe('ClayIcon', function() {
  afterEach(() => {
    if (clayIcon) {
      clayIcon.dispose();
    }
  });

  it('should generate markup for icon `add-cell`', () => {
    clayIcon = new ClayIcon({
      spritemap: spritemap,
      symbol: 'add-cell',
    });

    expect(clayIcon).toMatchSnapshot();
  });

  it('should render a `add-cell` icon with id', () => {
    clayIcon = new ClayIcon({
      id: 'myIcon',
      spritemap: spritemap,
      symbol: 'add-cell',
    });

    expect(clayIcon).toMatchSnapshot();
  });
});
