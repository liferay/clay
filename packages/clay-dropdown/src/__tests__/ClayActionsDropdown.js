import ClayActionsDropdown from '../ClayActionsDropdown';

let clayActionsDropdown;

describe('ClayActionsDropdown', function() {
  afterEach(() => {
    if (clayActionsDropdown) {
      clayActionsDropdown.dispose();
    }
  });

  it('should render default markdown', () => {
    clayActionsDropdown = new ClayActionsDropdown({
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
        {
          label: 'Item 2',
          url: 'item2url',
        },
      ],
      spritemap: 'icons.svg',
    });

    expect(clayActionsDropdown).toMatchSnapshot();
  });

  it('should render an expanded action dropdown', () => {
    clayActionsDropdown = new ClayActionsDropdown({
      expanded: true,
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
        {
          label: 'Item 2',
          url: 'item2url',
        },
      ],
      spritemap: 'icons.svg',
    });

    expect(clayActionsDropdown).toMatchSnapshot();
  });
});
