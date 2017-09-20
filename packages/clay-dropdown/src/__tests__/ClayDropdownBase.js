import ClayDropdownBase from '../ClayDropdownBase';

let clayDropdownBase;

describe('ClayDropdownBase', function() {
  afterEach(() => {
    if (clayDropdownBase) {
      clayDropdownBase.dispose();
    }
  });

  it('should render a dropdown with items of type item', () => {
    clayDropdownBase = new ClayDropdownBase({
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
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type item and active', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          active: true,
          label: 'Item 1',
          url: 'item1url',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type item and disabled', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          disabled: true,
          label: 'Item 1',
          url: 'item1url',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type checkbox', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          inputName: 'checkbox1name',
          inputValue: 'checkbox1value',
          label: 'Item 1',
          type: 'checkbox',
        },
        {
          inputName: 'checkbox2name',
          inputValue: 'checkbox2value',
          label: 'Item 2',
          type: 'checkbox',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type checkbox and checked', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          checked: true,
          inputName: 'checkbox1name',
          inputValue: 'checkbox1value',
          label: 'Item 1',
          type: 'checkbox',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  // eslint-disable-next-line
  it('should render a dropdown with items of type checkbox and disabled', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          disabled: true,
          inputName: 'checkbox1name',
          inputValue: 'checkbox1value',
          label: 'Item 1',
          type: 'checkbox',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type radio', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          inputName: 'radioname',
          inputValue: 'radio1value',
          label: 'Item 1',
          type: 'radio',
        },
        {
          inputName: 'radioname',
          inputValue: 'radio2value',
          label: 'Item 2',
          type: 'radio',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type radio and checked', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          checked: true,
          inputName: 'radio1name',
          inputValue: 'radio1value',
          label: 'Item 1',
          type: 'radio',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type radio and disabled', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          disabled: true,
          inputName: 'radio1name',
          inputValue: 'radio1value',
          label: 'Item 1',
          type: 'radio',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type radio', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          label: 'Item 1',
          type: 'radio',
        },
        {
          label: 'Item 2',
          type: 'radio',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type header', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          label: 'Group 1',
          type: 'header',
        },
        {
          label: 'Group 2',
          type: 'header',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with items of type separator', () => {
    clayDropdownBase = new ClayDropdownBase({
      items: [
        {
          type: 'separator',
        },
        {
          type: 'separator',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with indicators on the left', () => {
    clayDropdownBase = new ClayDropdownBase({
      indicatorsPosition: 'left',
      items: [
        {
          indicatorSymbol: 'check',
          label: 'Item 1',
          url: 'item1url',
        },
        {
          indicatorSymbol: 'check',
          label: 'Item 2',
          url: 'item2url',
        },
      ],
      spritemap: 'icons.svg',
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with indicators on the right', () => {
    clayDropdownBase = new ClayDropdownBase({
      indicatorsPosition: 'right',
      items: [
        {
          indicatorSymbol: 'check',
          label: 'Item 1',
          url: 'item1url',
        },
        {
          indicatorSymbol: 'check',
          label: 'Item 2',
          url: 'item2url',
        },
      ],
      spritemap: 'icons.svg',
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with help text', () => {
    clayDropdownBase = new ClayDropdownBase({
      helpText: 'Help!',
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with primary button', () => {
    clayDropdownBase = new ClayDropdownBase({
      button: {
        label: 'Button',
        style: 'primary',
      },
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with secondary button', () => {
    clayDropdownBase = new ClayDropdownBase({
      button: {
        label: 'Button',
        style: 'secondary',
      },
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a dropdown with caption', () => {
    clayDropdownBase = new ClayDropdownBase({
      caption: 'My caption!',
      items: [
        {
          label: 'Item 1',
          url: 'item1url',
        },
      ],
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should render a searchable dropdown', () => {
    clayDropdownBase = new ClayDropdownBase({
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
      searchable: true,
      spritemap: 'icons.svg',
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase).toMatchSnapshot();
  });

  it('should filter items', () => {
    let item1 = {
      label: 'Item 1',
      url: 'item1url',
    };

    let item2 = {
      label: 'Item 2',
      url: 'item2url',
    };

    let items = [item1, item2];

    clayDropdownBase = new ClayDropdownBase({
      items: items,
      searchable: true,
      spritemap: 'icons.svg',
      triggerLabel: 'Trigger',
    });

    expect(clayDropdownBase.items).toEqual(items);

    let input = clayDropdownBase.refs['searchInput'];
    input.value = 'Item 1';

    clayDropdownBase._handleSearch({
      delegateTarget: input,
    });

    expect(clayDropdownBase.items).toEqual([item1]);
  });
});
