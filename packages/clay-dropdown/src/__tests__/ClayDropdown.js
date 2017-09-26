import ClayDropdown from '../ClayDropdown';

let clayDropdown;

describe('ClayDropdown', function() {
  afterEach(() => {
    if (clayDropdown) {
      clayDropdown.dispose();
    }
  });

  it('should render a dropdown with items', () => {
    clayDropdown = new ClayDropdown({
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
        {
          label: 'Item 2',
          url: 'item2url',
        },
        {
          active: true,
          label: 'Item 3',
          url: 'item1ur3',
        },
        {
          disabled: true,
          label: 'Item 4',
          url: 'item1url',
        },
        {
          inputName: 'checkbox5name',
          inputValue: 'checkbox5value',
          label: 'Item 5',
          type: 'checkbox',
        },
        {
          checked: true,
          inputName: 'checkbox6name',
          inputValue: 'checkbox7value',
          label: 'Item 7',
          type: 'checkbox',
        },
        {
          disabled: true,
          inputName: 'checkbox7name',
          inputValue: 'checkbox7value',
          label: 'Item 7',
          type: 'checkbox',
        },
        {
          inputName: 'radioname',
          inputValue: 'radio8value',
          label: 'Item 8',
          type: 'radio',
        },
        {
          checked: true,
          inputName: 'radioname',
          inputValue: 'radio9value',
          label: 'Item 9',
          type: 'radio',
        },
        {
          disabled: true,
          inputName: 'radioname',
          inputValue: 'radio10value',
          label: 'Item 10',
          type: 'radio',
        },
        {
          label: 'Group 11',
          type: 'header',
        },
        {
          type: 'separator',
        },
      ],
      spritemap: 'icons.svg',
      triggerLabel: 'Trigger',
    });

    expect(clayDropdown).toMatchSnapshot();
  });

  it('should render an expanded dropdown', () => {
    clayDropdown = new ClayDropdown({
      expanded: true,
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
      ],
      spritemap: 'icons.svg',
    });

    expect(clayDropdown).toMatchSnapshot();
  });

  it('should render a searchable dropdown', () => {
    clayDropdown = new ClayDropdown({
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
      ],
      searchable: true,
      spritemap: 'icons.svg',
    });

    expect(clayDropdown).toMatchSnapshot();
  });
});
